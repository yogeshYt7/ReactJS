import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom'


const Signup = () => {
    let navigate=useNavigate();
    let [username,setusername]=useState("")
    let [password,setpassword]=useState("")
    

    let handleSignup=(e)=>{
        e.preventDefault();
        window.localStorage.setItem("username",username)
        window.localStorage.setItem("password",password)
        navigate("/login")
    }
  return (
    <div>
      <form action="">
        <fieldset style={{textAlign:"center"}}>
            <legend>Signup Page</legend>
            <label htmlFor="">username:</label>
            <input type="text"  onChange={(e)=>{
                setusername(e.target.value)

            }} /> <br /><br /> 

            <label htmlFor="">password</label>
            <input type="text"  onChange={(e)=>{
                setpassword(e.target.value)

            }} /> <br /><br /> 
            <button onClick={handleSignup}>Signup</button>
        </fieldset>
      </form>
    </div>
  )
}

export default Signup
