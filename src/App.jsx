import {
  Route,
  BrowserRouter as Router,
  Routes
} from "react-router-dom"
import Home from "./pages/Home"
import Tank from "./pages/Tank"
import { useEffect, useState } from "react"
import Profile from "./pages/Profile"
import Auth from "./pages/Auth"
import API from "./utils/API"
import NavBar from "./components/NavBar"
function App() {
  const [userId, setUserId] = useState(0)
  const [token, setToken] = useState("")
  useEffect(()=>{
    const savedToken = localStorage.getItem("token");
    //make sure it exists and is vaild
    if(savedToken){
      API.checkToken(savedToken).then(data=>{
        if(data.validToken){
          setToken(savedToken);
          setUserId(data.userId)
        } else {
          localStorage.removeItem("token")
        }
      })
    }
  },[])
  const handleSignup = obj=>{
    API.signup(obj).then(data=>{
      setToken(data.token);
      setUserId(data.user.id);
      localStorage.setItem("token",data.token)
    })
  }

  const handleLogin = obj=>{
    API.login(obj).then(data=>{
      setToken(data.token);
      setUserId(data.user.id);
      localStorage.setItem("token",data.token)
    })
  }

  const logout = ()=>{
    setToken("");
    setUserId(0);
    localStorage.removeItem("token")
  }
  return (
    <Router>
      <NavBar userId={userId} logout={logout}/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/profile" element={<Profile userId={userId} token={token}/>}/>
        <Route path="/tanks/:id" element={<Tank userId={userId} token={token}/>}/>
        <Route path="/login" element={<Auth type="Login"  handleSubmit={handleLogin} userId={userId}/>}/>
        <Route path="/signup" element={<Auth type="Signup" handleSubmit={handleSignup} userId={userId}/>}/>
        <Route path="*" element={<h1>notFound</h1>}/>
      </Routes>
    </Router>
  )
}

export default App
