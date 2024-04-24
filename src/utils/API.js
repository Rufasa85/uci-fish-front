const API = {
    getAllTanks:()=>{
        return fetch("http://localhost:3000/api/tanks").then(res=>res.json())
    },
    getOneTank:id=>{
        return fetch(`http://localhost:3000/api/tanks/${id}`).then(res=>res.json())
    }
}

export default API