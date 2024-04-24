import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import TankThumbnail from "../../components/TankThumbnail";
import API from "../../utils/API";
import "./style.css";
import { Link } from "react-router-dom";

const Profile = (props) => {
  const navigate = useNavigate();
  const [userObj, setUserObj] = useState({});
  const [tankName, setTankName] = useState("");
  useEffect(() => {
    if (!props.userId) {
      navigate("/login");
    } else {
      API.getOneUser(props.userId).then((data) => {
        setUserObj(data);
      });
    }
  }, [props.userId]);

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      const newTank = await API.createTank(
        {
          name: tankName,
        },
        props.token
      );
      const data = await API.getOneUser(props.userId);
      setUserObj(data);
    } catch (error) {}
  };
  return (
    <div className="Profile">
      <h1>Welcome back, {userObj.email}!</h1>
      <h2>Add a tank!</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="tankName"
          value={tankName}
          onChange={(e) => setTankName(e.target.value)}
        />
        <button>Add tank!</button>
      </form>
      <h2>Your tanks</h2>
      <div className="tanksDiv">
        {userObj?.Tanks?.map((tank) => (
          <Link to={`/tanks/${tank.id}`}>
            <TankThumbnail key={tank.id} name={tank.name} fish={tank.Fishes} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Profile;
