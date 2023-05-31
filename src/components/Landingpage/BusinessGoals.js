import React, { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { TextField, Button, Typography } from "@material-ui/core";
const BusinessGoals = ({ handleNext, handleBack }) => {
  const [businessgoal, setBusinessGoal] = useState("");
  const [challenges, setChallenges] = useState("");
  const [comment, setComment] = useState("");
  const [color, setColor] = useState("");

const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/login")
  };

  return (
    <div style={{ alignContent: "center", marginLeft: "200px" }}>
      <h3>Business Goals</h3>
      <form onSubmit={handleSubmit}>
        <label htmlFor="businessgoal">Business Goal</label>
        <TextField
          type="text"
          id="businessgoal"
          value={businessgoal}
          onChange={(e) => setBusinessGoal(e.target.value)}
          required
          sx={{mb:2}}
        />

        <label htmlFor="challenges">Challenges</label>
        <input
          type="text"
          id="challenges"
          value={challenges}
          onChange={(e) => setChallenges(e.target.value)}
        />

        <label htmlFor="comment"> Commment</label>
        <input
          type="text"
          id="comment"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        />

        <label htmlFor="color">Color</label>
        <input
          type="text"
          id="color"
          value={color}
          onChange={(e) => setColor(e.target.value)}
        />

        <div>
          <button type="submit" onClick={() => handleBack()}>Back</button>
          <button style={{ marginLeft: "30px" }} type="submit">submit</button>
        </div>
      </form>
    </div>
  );
};

export default BusinessGoals;
