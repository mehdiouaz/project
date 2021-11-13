import React from 'react'
import "./Contact.css";
import img from "../images/contact.jpg"
import img2 from "../images/contactdev.jpg"

function Contact() {
    return (
        <div class="barr">
        <div class="bigg">
        <div class="wrapper">
        <div class="card front-face">
          <img src={img2}/>
        </div>
        <div class="card back-face">
          <img src={img} />
          <div class="info">
            <div class="title" style={{
                fontStyle: "italic",
                fontVariant: "small-caps",
                
            }}>Ouaz Mehdi</div>
            <p style={{
            fontStyle: "italic",
          
            }}>If You Want To Contact Me Please Message Me In One Of These APP'S <br/> <br/> Front And Back -end developer</p>
          </div>
          <ul>
            <a href="https://www.facebook.com/mehdi.ouaz/" target="_blank"><i class="fab fa-facebook-f"></i></a>
            <a href="#"><i class="fab fa-twitter"></i></a>
            <a href="#"><i class="fab fa-instagram"></i></a>
            <a href="#"><i class="fab fa-youtube"></i></a>
          </ul>
        </div>
      </div>
      </div>
  </div>
    )
}

export default Contact
