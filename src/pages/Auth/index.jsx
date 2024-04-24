import React, { useState,useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const Auth = (props) => {
    const [formState, setFormState] = useState({
        email:"",
        password:""
    })
    const navigate = useNavigate()
    useEffect(() => {
        if(props.userId){
            navigate("/profile")
        }
    }, [props.userId])
    
    const handleChange = e=>{
        const {name,value} = e.target;
        setFormState({
            ...formState,
            [name]:value
        })
    }
    const submitHandler = e=>{
        e.preventDefault();
        props.handleSubmit(formState);
        setFormState({
            email:"",
            password:""
        })
    }
  return (
    <div className='Auth'>
        <h1>{props.type}</h1>
        <form onSubmit={submitHandler}>
            <input name="email" value = {formState.email} onChange={handleChange}/>
            <input name="password" type='password' value = {formState.password} onChange={handleChange}/>
            <button>{props.type}</button>
        </form>
    </div>
  )
}

export default Auth