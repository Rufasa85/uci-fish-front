import React from 'react'
import { Link } from 'react-router-dom'
import "./style.css"

const NavBar = (props) => {
  return (
   <div className="Navbar">
    <Link to="/">Home</Link>
    {props.userId ? <Link to="/profile">Profile</Link>:<Link to ="/login">Login</Link>}
    {props.userId ? <button onClick={props.logout}>Logout</button>:<Link to ="/signup">signup</Link>}
   </div>
  )
}

export default NavBar