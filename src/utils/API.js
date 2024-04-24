// const URL_PREFIX="http://localhost:3000"
const URL_PREFIX="https://uci-fish-back.onrender.com"

const API = {
    //auth
    signup:userObj=>{
        return fetch(`${URL_PREFIX}/api/users`,{
            method:"POST",
            body:JSON.stringify(userObj),
            headers:{
                "Content-Type":"application/json"
            }
        }).then(res=>res.json())
    },
    login:userObj=>{
        return fetch(`${URL_PREFIX}/api/users/login`,{
            method:"POST",
            body:JSON.stringify(userObj),
            headers:{
                "Content-Type":"application/json"
            }
        }).then(res=>res.json())
    },
    checkToken:token=>{
        return fetch(`${URL_PREFIX}/tokendata`,{
            headers:{
                "Authorization":`Bearer ${token}`
            }
        }).then(res=>res.json())
    },
    //user
    getOneUser:userId=>{
        return fetch(`${URL_PREFIX}/api/users/${userId}`).then(res=>res.json())
    },
    //tank
    getAllTanks:()=>{
        return fetch(`${URL_PREFIX}/api/tanks`).then(res=>res.json())
    },
    getOneTank:id=>{
        return fetch(`${URL_PREFIX}/api/tanks/${id}`).then(res=>res.json())
    },
    createTank:(tankObj,token)=>{
        return fetch(`${URL_PREFIX}/api/tanks`,{
            method:"POST",
            body:JSON.stringify(tankObj),
            headers:{
                "Content-Type":"application/json",
                "Authorization":`Bearer ${token}`
            }
        }).then(res=>res.json())
    },
    addFish:(fishObj,token)=>{
        return fetch(`${URL_PREFIX}/api/fishes`,{
            method:"POST",
            body:JSON.stringify(fishObj),
            headers:{
                "Content-Type":"application/json",
                "Authorization":`Bearer ${token}`
            }
        }).then(res=>res.json())
    }
}

export default API