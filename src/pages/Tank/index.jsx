import React, { useEffect, useState } from "react";
import "./style.css";
import Fish from "../../components/Fish";
import FishForm from "../../components/FishForm";
import { useParams } from "react-router-dom";
import API from "../../utils/API";
const Tank = (props) => {
  const { id } = useParams();
  const [tank, setTank] = useState({});
  useEffect(() => {
    API.getOneTank(id).then((data) => {
      setTank(data);
    });
  }, []);

  const addFish = fishObj=>{
    fishObj.TankId = id;
    API.addFish(fishObj,props.token).then(data=>{
      API.getOneTank(id).then((data) => {
        setTank(data);
      });
    })
  }

  return (
    <>
      {!tank.name ? (
        <h1>No such tank</h1>
      ) : (
        <>
          <h2>{tank?.name}</h2>
          {props.userId===tank.UserId?(
            <FishForm addFish={addFish}/>
          ):null}
          <div className="Tank">
            {tank?.Fishes?.map((fsh) => (
              <Fish
                key={fsh.id}
                name={fsh.name}
                color={fsh.color}
                width={fsh.width}
              />
            ))}
          </div>
          <div className="seaFloor"></div>
        </>
      )}
    </>
  );
};

export default Tank;
