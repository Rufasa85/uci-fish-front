import React, { useState } from 'react'
import Fish from "../Fish"

const FishForm = (props) => {
    const [fishData, setFishData] = useState({
        name:"",
        width:150,
        color:"#facade"
    })

    const handleChange = e=>{
        const {name,value}= e.target;
        setFishData({
            ...fishData,
            [name]:value
        })
    }

    const handleSubmit =e=>{
        e.preventDefault();
        props.addFish(fishData);
        setFishData({
            name:"",
            width:150,
            color:"#facade"
        })
    }
  return (
    <>
   <form onSubmit={handleSubmit}>
    <input type="text" name="name" value={fishData.name} onChange={handleChange} />
    <input type="number" name="width"value={fishData.width} onChange={handleChange} />
    <input type="color" name="color" value={fishData.color} onChange={handleChange} />
    <button>Add fish</button>
   </form>
   <Fish name={fishData.name} color={fishData.color} width={fishData.width}/>
    </>
  )
}

export default FishForm