import React, { useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import Navbar from "./Navbar";
import "./Signup.css";
import axios from "axios";

function Signup() {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [deviceId, setDeviceId] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()
  
  const handleSignup = async (e) => {
    e.preventDefault()
    try {
      setLoading(true)
      const response = await axios.post("https://narada.onrender.com/api/user/register", {
        firstname, lastname, deviceId, email, phone, password
      })
      console.log(response);
      setLoading(false)
      navigate("/login")
    } catch (error) {
      setLoading(false)
      console.log(error);
    }
  }
  return (
    <div className="signup-container">
      <div className="signup-image-container">
        <img
          className="signup-image"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyU4UAYQLyRqkbkNgr2PW-3I7ILBsX4bZDCw&usqp=CAU"
          alt="signup"
        />

      </div>
      <div className="signup-form-container">
        <h2>Create an Account</h2>
        <form onSubmit={handleSignup}>
          <div className="form-group">
            <div className="form-group-row">
              <div className="form-group-column">
                <label htmlFor="firstName">First Name</label>
                <input
                  type="text"
                  id="firstName"
                  value={firstname}
                  onChange={(event) => setFirstname(event.target.value)}
                />
              </div>
              <div className="form-group-column">
                <label htmlFor="lastName">Last Name</label>
                <input
                  type="text"
                  id="lastName"
                  value={lastname}
                  onChange={(event) => setLastname(event.target.value)}
                />
              </div>
            </div>

            <div className="form-group-row">
              <div className="form-group-column">
                <label htmlFor="deviceId">Device Id</label>
                <input type="password" id="deviceId" value={deviceId}
                  onChange={(event) => setDeviceId(event.target.value)}
                />
              </div>
            </div>
            <div className="form-group-row">
              <div className="form-group-column">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                />
              </div>

              <div className="form-group-row">
                <div className="form-group-column">
                  <label htmlFor="phone">Phone</label>
                  <input type="password" id="phone" value={phone}
                    onChange={(event) => setPhone(event.target.value)} />
                </div>
              </div>

              <div className="form-group-column">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                />
              </div>
            </div>
            {/* <div className="form-group-row">
              <div className="form-group-column">
                <label htmlFor="confirmPassword">Confirm Pswd</label>
                <input type="password" id="confirmPassword" />
              </div>
            </div> */}
          </div>{
            loading ? <button type="submit">loading...</button> : <button type="submit">Sign Up</button>
          }
          

        </form>
        {/* <p>Already have an account? <Link to="/paymenttable">Login</Link></p> */}
        <p>Already have an account? <Link to="/login">Login</Link></p>
      </div>
    </div>
  );
}

export default Signup;