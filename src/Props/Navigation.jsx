import React from "react";
 const Navigation=()=>{
    return(
        <nav>
        <div className="logoblock">
            <img src="https://www.jansatta.com/wp-content/uploads/2022/01/kattappa.jpg" alt="" />
        </div>
        <div className="menublock">
            <ol>
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Services</a></li>
                <li><a href="#">Portfolio</a></li>
            </ol>
        </div>
        </nav>
    )
 }
 export default Navigation;