import React, { useState } from "react";
import logo from "../../images/logo-2.png";

import Navbar from "./Navbar";
import "../../App.css";
import img from "../../images/aboutimage.jpg";
import { Facebook, LinkedIn, Twitter } from "@material-ui/icons";
import {
  FaFacebookSquare,
  FaTwitterSquare,
  FaLinkedin,
  FaYoutube,
} from "react-icons/fa";

function Home() {
  const workInfoData = [
    {
      image:
        "https://th.bing.com/th?q=Home+Security+Cameras+and+Alarms&w=120&h=120&c=1&rs=1&qlt=90&cb=1&pid=InlineBlock&mkt=en-WW&cc=RW&setlang=en&adlt=moderate&t=1&mw=247.jpg",
      title: " Home alarm",
      text: "Advanced sensors, instant alerts and reliable protection for your home.",
    },
    {
      image:
        "https://th.bing.com/th?q=Robotic+Equipment&w=120&h=120&c=1&rs=1&qlt=90&cb=1&pid=InlineBlock&mkt=en-WW&cc=RW&setlang=en&adlt=moderate&t=1&mw=247.jpg",
      title: " Embedded System",
      text: "We build embedded devices and complex embedded software solutions for",
    },
    {
      image:
        "https://learn.g2.com/hubfs/iStock-1024926532.jpg",
      title: "NARADA Shop",
      text: "We are a leading retailer of high-quality electronic devices, offering a wide products"
      // text: "We are a leading retailer of high-quality electronic devices, offering a wide range of products from trusted brands including everything from  smart home devices and much more with the latest technology at competitive prices.",
    },
    ];
  const [names, setNames] = useState("")
  const [email, setEmail] = useState("")
  const [subject, setSubject] = useState("")
  const [message, setMessage] = useState("")
  const [loading , setLoading] = useState(false)
  const handleContact = async (e) => {
    e.preventDefault()
    setLoading(true)
    fetch("https://inventory-ciul.onrender.com/api/message/send", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ names, email, subject, message }),
    }).then((response) => response.json())
      .then((data) => {
        console.log("Success", data);
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
        console.error("Error:", error);
      }); 
  }
  return (
    <div>
      <div className="home">
        <Navbar />
        <div className="home-container">
          <h1 className="head-text">
            Welcome to the inventory management system
          </h1>
          <p className="head-paragraph">
          NARADA offers advanced home security systems and a wide range of electronic devices. 
          Our comprehensive management system streamlines operations, boosts productivity, 
          and helps achieve business goals. Collaborate, assign tasks, track progress, and 
          generate insightful reports with ease
          </p>
        </div>
        <div>
          <button className="learn">Learn More</button>
        </div>
      </div>

      <div className="about-section" style={{ marginBottom: "300px" }}>
        <h1 style={{ margin: "80px 0px 0px 60px" }}>About Us</h1>
        <div className="about-text">
          <h2 style={{ color: "blue", paddingBottom: "25PX", marginLeft: "-860px", fontSize: "larger" }}>
            Welcome to our Inventory Management system
          </h2>
          <p style={ { marginLeft:"-760px", fontSize:"larger"}}>We are a cutting-edge inventory management system designed    <br/>
          to streamline your operations and optimize you payment control. <br/>
         
          Our goal is tohelp you save time and resources, so you can focus<br/>
           ,on other minding issues .</p>
        </div>
        <img src={img} alt="about" className="right"></img>
      </div>

      <div className="work-section-wrapper" style={{ marginBottom: "300px" }}>
        <div className="work-section-top">
          <p className="primary-subheading"></p>
          <h1 className="primary-heading">Our Services</h1>
          
        </div>
        <div className="work-section-bottom">
          {workInfoData.map((data) => (
            <div className="work-section-info" key={data.title}>
              <div className="info-boxes-img-container" style={{ background: `url(${data.image})`, backgroundPosition: "center", backgroundSize: "cover", height: 250, width: 400, borderRadius: "8px" }}>
                {/* <img src={data.image} alt="" /> */}
              </div>
              <h2 style={{ color: "blue" }}>{data.title}</h2>
              <p>{data.text}</p>
            </div>
          ))}
        </div>
        <div className="contact-background">
          <div className="white-ground">
            <div className="contact-container">
              <div className="contact-left">
                <h2 className="contact-text1">Contact Us</h2>
                <p className="contact-text2">Kigali Nyarugenge, KG ave 234</p>
                <p className="contact-text3">
                  Email:<span>inveto@gmail.com</span>
                </p>
                <p className="contact-text4">
                  Phone:<span>+250786666666</span>
                </p>
                <p className="contact-text5">
                  Skype:<span>Invet.win</span>
                </p>

                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15950.026610205683!2d30.0549678!3d-1.9504945999999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x19dca5e060874d73%3A0x5baa629e8229848b!2sVedox%20rwanda!5e0!3m2!1sen!2srw!4v1678084977625!5m2!1sen!2srw"
                  width="250"
                  height="120"
                  allowfullscreen=""
                  loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>

              <div className="contact-right">
                <form className="contact-form" onSubmit={handleContact}>
                  <input
                    style={{ padding: "10px 0px 10px 30px", marginLeft: "-70px" }}
                    type="text"
                    placeholder="Your name"
                    name="names"
                    value={names}
                    onChange={(e) => setNames(e.target.value)}
                    required
                    
                  />

                  <input
                    style={{ padding: "10px 20px 10px", marginLeft: "-70px" }}
                    type="text"
                    placeholder="Your Email"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                  
                  <input
                    style={{ padding: "10px 20px 10px", marginLeft: "-70px" }}
                    type="text"
                    placeholder="Subject"
                    name="subject"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    required
                  />
                  

                  <textarea
                  style={ { marginLeft: "-75px", marginRight: "27.5px"}}
                    name="message"
                    placeholder="Message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    cols="60"
                    rows="7"
                  ></textarea>
                  <button
                    type="submit"
                    className="send-sms"
                    style={{
                      marginLeft: "30px",
                      marginTop: "10px",
                      padding: "10px",
                      height: "10%",
                      border: "none",
                      borderRadius: "10px",
                      backgroundColor: "#020250",
                      color: "white",
                    }}
                  >
                    {" "}
                   {  loading ?  "Loading......" : "Send "}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>

        <div className="footer">
          <div className="sb-footer section-padding">
           
            <div class="logo" style={{marginLeft: "15px",height: "100px" , width: "200px"}}>
            <img src={logo} alt="Logo" />
       </div>
       <div className="socialmedia">
        <FaFacebookSquare/>
        <FaTwitterSquare/>
        <p>
<img src={LinkedIn}alt=""/>
        </p>
        <FaLinkedin/>
        <FaYoutube/>

       </div>
            
            <div className="sb-footer-links">
              
              

              <div className ="sb-footer-links-div" style={{ marginLeft:"760px", fontSize:"larger"}}>
                <h4>Address</h4>
                <p>Kigali</p>
                <p style={{ marginTop: "-10px" }}> Nyarugenge</p>
                <p style={{ marginTop: "-10px" }}>KG ave 234</p>
                <h4>coming soon</h4>
                
              </div>
            </div>
            
            <div className="sb-footer-copyright">
              <p>
                @{new Date().getFullYear()} Inventory. All right reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Home;
