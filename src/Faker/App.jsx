import React,{ useState } from 'react';
import { faker } from '@faker-js/faker';


const App = () => {
    let [photo ,setPhoto]=useState(faker.image.avatar())
    let handlechange=()=>{
        setPhoto(faker.image.avatar)
    }
  return (
    <div>
      <img src={photo }alt="" />
      <button onClick={handlechange}>Change</button>
    </div>
  )
}

export default App
