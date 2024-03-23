import React from 'react'
import { ToastContainer,toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const App = () => {
    let submit=()=>{
        toast("Login successfully",{
            
        })
    }

  return (
    <div>
        <ToastContainer/>
      <form action="">
        <label htmlFor="">Name</label>
        <input type='text' placeholder='Name' name='name' />
        <br /><br />
        <label htmlFor="">Password</label>
        <input type='password' placeholder='Password' name='password'/>   <br /><br />
        <button onClick={submit}>Sumbit</button>
      </form>
    </div>
  )
}

export default App
