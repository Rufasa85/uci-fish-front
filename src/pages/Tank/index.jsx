//TODO: condintally render for no tank found
import React, { useEffect, useState } from 'react'
import "./style.css"
import Fish from '../../components/Fish'
import { useParams } from 'react-router-dom'
import API from '../../utils/API'
const Tank = (props) => {
  const {id} = useParams()
  const [tank, setTank] = useState({})
  useEffect(() => {
   API.getOneTank(id).then(data=>{
    setTank(data)
   })
  }, [])
  
  return (
    <>
        <h2>{tank?.name}</h2>
    <div className = "Tank">
       {tank?.Fishes?.map(fsh=><Fish key={fsh.id} name={fsh.name} color={fsh.color} width={fsh.width}/>)}
    </div>
    <div className="seaFloor">

    </div>
    </>
  )
}

export default Tank