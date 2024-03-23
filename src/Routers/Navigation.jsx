import React from 'react';
import { Link } from 'react-router-dom'; 
const Navigation = () => {
  return (
    <nav>
      <div>Logo</div>
      <ol>
        <li>
          <Link to={"/"}>Home</Link>
        </li>
        <li>
          <Link to={"/About"}>About</Link> 
        </li>
        <li>
          <Link to={"/Help"}>Help</Link> 
        </li>
        <li>
          <Link to={"/login"}>Login</Link> 
        </li>
        <li>
          <Link to={"/signup"}>Signup</Link> 
        </li>
      </ol>
    </nav>
  );
}

export default Navigation;
