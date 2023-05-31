import React, { useState } from "react";
import "./Forgot.css";

function ForgotPassword() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform forgot password logic here
  };

  return (
    <div className="forgot-password-container">
      <div className="forgot-password-form-container">
        <h2>Forgot Password</h2>
        <form onSubmit={handleSubmit}>
          <label>Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button type="submit">Reset Pswd</button>
        </form>
      </div>
    </div>
  );
}

export default ForgotPassword;
