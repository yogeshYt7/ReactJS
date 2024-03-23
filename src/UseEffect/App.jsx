import React,{useEffect,useState}from 'react'
import "./Global.css"
const App = () => {
    let [userdata, setuserdata]=useState([])
    useEffect(()=>{
        fetch('https://api.github.com/users')
        .then((response)=>response.json())
        .then((data)=>setuserdata(data))
        .catch((err)=>alert(err))
    },[])
  return (
    <div className='mainblock'>
        {userdata.map((x)=>{
            return(
                <div className='card'> 
                <h2>{x.login}</h2>
                <h2>{x.id}</h2>
                <img src={x.avatar_url} alt="" />

                </div>
            )
        })}
      
    </div>
  )
}

export default App
