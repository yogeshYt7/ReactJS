import React from "react";
import LOGO from "../resources/netflix-app-icon_152.jpg";
import "../global.css"; 

const Landingpage = () => {
  return (
    <div className="landingpage" >     
      <div className="gradient"> </div>
      <nav>
        <div className="logoblock">
          <img src={LOGO} alt="Netflix Logo"  id="netflixlogo"/> 
        </div>
        
          <select name="Languages" id="languages">
            <option value="">English</option>
            <option value="">Hindhi</option>
          </select>
          <button type="submit" id="signinbutton">Signin</button>
    
      </nav>
      <div id="centerdata">
      <h1 id="heading1">Unlimited movies, TV shows and more</h1>
      <h2 id="heading2">Watch anywhere. Cancel anytime.</h2>   
      <h3 id="heading3">Ready to watch? Enter your email to create or restart your membership.</h3>    
      </div>
    </div>
  );
};

export default Landingpage;
<div class=" default-ltr-cache-1y1tnl9 egicmjq0" ></div>
