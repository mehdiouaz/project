import React from "react";
import homeintro from "../images/homeintro.mp4";
import "./pages.css";

function Home() {
  return (
    <div>
      <h1 className="home">Welcome to &nbsp; <span style={{color:"red"}}>  BCM  </span> &nbsp; Factory</h1>
      <video autoPlay loop muted 
      style={{
        position:"absolute",
        width:"100%",
        left:"50%",
        top:"50%",
        height:"100%",
        objectFit:"cover",
        transform:"translate(-50%,-50%)",
        zIndex:"-1",
      }}>
        <source src={homeintro} type="video/mp4"/>
      </video>
    </div>
  );
}

export default Home;
