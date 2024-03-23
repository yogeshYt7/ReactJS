import React,{useEffect,useState}from 'react'
import "./Global.css"
const App = () => {
    let [userdata, setuserdata]=useState([])
    useEffect(()=>{
      let fetchData=async()=>{
        let data=await   fetch('https://api.github.com/users')
        let finalData= await data.json(  )
        setuserdata(finalData)
      }
      fetchData()
    },[])
  return (
    <div className='mainblock'>
        {userdata.map((x,y)=>{
            return(
                <div key={y} className='card'> 
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
