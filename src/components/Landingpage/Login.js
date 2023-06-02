import React, { useState } from "react";
import "./Login.css";
import { Link, NavLink, useNavigate } from "react-router-dom";
import axios from "axios";
import Alert from "react-bootstrap/Alert";

function Login() {
  const [deviceId, setDeviceId] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);
      const response = await axios.post(
        "https://narada.onrender.com/api/client/signin",
        {
          deviceId,
          password,
        }
      );
      console.log(response, "role");

      localStorage.setItem("token", response.data.token);
      if (response.data.user.role === "admin") {
        navigate("/dashboard");
      } else {
        navigate("/home");
      }
      setLoading(false);
    } catch (error) {
      setLoading(false);
      setErrorMessage("User not found");
      console.log(error);
    }
  };

  return (
    <div className="login-container">
      <div className="left-container">
        <h2>Login</h2>
        {errorMessage && (
          <Alert variant="danger" className="mb-3">
            {errorMessage}
          </Alert>
        )}
        <form>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
            }}
          >
            <label>Device Id</label>
            <input
              type="deviceId"
              value={deviceId}
              onChange={(e) => setDeviceId(e.target.value)}
              style={{ marginTop: "8px", width: "400px" }}
            />
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
            }}
          >
            <label>Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={{ marginTop: "8px", width: "400px" }}
            />
          </div>
          {loading ? (
            <button type="submit" onClick={handleSubmit}>
              loading.....
            </button>
          ) : (
            <button type="submit" onClick={handleSubmit}>
              Login
            </button>
          )}
        </form>
        <NavLink to="/ForgotPassword">Forgot Password</NavLink>
      </div>
      <div className="right-container">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyU4UAYQLyRqkbkNgr2PW-3I7ILBsX4bZDCw&usqp=CAU"
          alt="Square"
        />
      </div>
    </div>
  );
}

export default Login;
