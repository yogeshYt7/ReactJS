  import React, { useRef, useState } from 'react'
  import ved from "./video.mp4";
  import "./Global.css";
  const App = () => {
      let vedRef= useRef()
      let [toggle,setToggle]=useState(false)
      let  palyOrpause=()=>
      {
          if(!toggle){
              vedRef.current.play()
              setToggle(true)            
      }else{
          vedRef.current.pause()
          setToggle(false)
      }
  }
    return (
      <div>
        <video onClick={palyOrpause} ref={vedRef} src={ved}></video>
      </div>
    )
  }

  export default App
