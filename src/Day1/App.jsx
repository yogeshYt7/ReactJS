import React from 'react'
import Grandparent from './Grandparent';
import "./global.css";
const App = () => {
  return (
    <div className='mainroot'>
      <h2> ROOT COMPONENT</h2> 
      <Grandparent data="Front End Dev"/>
    </div>
  )
}

export default App
