import React, { useEffect,useState } from 'react'
import API from "../../utils/API"
import TankThumbnail from '../../components/TankThumbnail'
import "./style.css"
import { Link } from 'react-router-dom'

const Home = () => {
const [tanks, setTanks] = useState([])
useEffect(() => {
  API.getAllTanks().then(data=>{
    console.log(data)
    setTanks(data)
  })
}, [])

  return (
    <div className="Home">
      {tanks.map(tank=><Link to={`/tanks/${tank.id}`}><TankThumbnail key={tank.id} name={tank.name} fish={tank.Fishes}/></Link>)}
    </div>
  )
}

export default Home