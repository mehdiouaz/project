import React from 'react'
import "./profile.css";
import homeintro from "../images/homeintro.mp4";

const Profile = () => {
    return (
        <div className='intro'>
            Welcome User , From Now On You Have The Access To Communicate And Buy Our Products From Our Factory .
            <br></br>
            Please Click On Store So You Can Choose And Purchase What You Need And We Will Deliver It To You 
            As Soon As Possible 
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
    )
}

export default Profile
