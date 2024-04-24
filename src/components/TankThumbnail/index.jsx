import React from 'react'
import "./style.css"
import FishThumbnail from '../FishThumnail'
const TankThumbnail = (props) => {
  return (
    <div className = "TankThumbnail">
        <h2>{props.name}</h2>
       {props.fish.map(fsh=><FishThumbnail key={fsh.id} name={fsh.name} color={fsh.color} width={fsh.width}/>)}
    </div>
  )
}

export default TankThumbnail