import React, { useState, useEffect } from "react";
import "./Profile.css";
import jwt from "jwt-decode";
// https://narada.onrender.com/api/user/getOne
const Profile = () => {
  const [user, setUser] = useState({});
  const [pay, setPay] = useState({});

  useEffect(async() => {
    const decodedToken = jwt(localStorage.getItem("token").split(" ")[1]);
    const endpoint = `https://narada.onrender.com/api/user/getOne/${decodedToken.id._id}`;
    const endpointPayment = `https://narada.onrender.com/api/payment/getOne/${decodedToken.id._id}`;
    // const endpointPayment = `https://narada.onrender.com/api/payment/getOne/${decodedToken.id._id}`;
    await fetch(endpoint, {
      method: "GET",
      headers: {
        Authorization: localStorage.getItem("token"),
      },
    })
      .then((res) => res.json())
      .then((data) => setUser(data.user) )
      .catch((err) => console.log(err));

    await fetch(endpointPayment, {
      method: "GET",
      headers: {
        Authorization: localStorage.getItem("token"),
      },
    })
      .then((res) => res.json())
      .then((item) => {
        console.log(item);
        setPay(item)
        // const combinedData = { ...user, ...data.user };
        // setUser(combinedData);
      })
      .catch((err) => console.log(err));
  }, []);
   console.log(pay)
  return (
    <div className="profile-container">
      <div className="profile-card">
        <img
          className="profile-picture"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOSQ8yS1dmcoeApLMDdWOfoYlBxDnl1LY3rQ&usqp=CAU"
          alt="Profile"
        />
        <h2>{`${user.firstname} ${user.lastname}`}</h2>
        <p>Description of the user</p>
      </div>
      <div className="account-card">
        <h2>Account Details</h2>
        <form>
          {/* <div className="form-group">
            <label htmlFor="first-name">username</label>
            <input type="text" id="first-name" name="first-name" defaultValue={user.username} />
          </div> */}
          <div className="form-group">
            <label htmlFor="last-name">deviceId</label>
            <input
              type="text"
              id="last-name"
              name="last-name"
              defaultValue={user.deviceId}
            />
          </div>
          {/* <div className="form-group">
            <label htmlFor="email">installationDate</label>
            <input
              type="text"
              id="last-name"
              name="last-name"
              defaultValue={user.installationDate}
            />
          </div> */}
          {/* <div className="form-group">
            <label htmlFor="password">paymentStartDate</label>
            <input
              type="text"
              id="last-name"
              name="last-name"
              defaultValue={user.paymentStartDate}
            />
          </div> */}
          {/* <div className="form-group">
            <label htmlFor="location">sensor</label>
            <input
              type="text"
              id="last-name"
              name="last-name"
              defaultValue={user.sensor}
            />
          </div>
          <div className="form-group">
            <label htmlFor="location">battery</label>
            <input
              type="text"
              id="last-name"
              name="last-name"
              defaultValue={user.battery}
            />
          </div>
          <div className="form-group">
            <label htmlFor="location">naradaTel</label>
            <input
              type="text"
              id="battery"
              name="battery"
              defaultValue={user.naradaTel}
            />
          </div> */}
          <div className="form-group">
            <label htmlFor="location">phone</label>
            <input
              type="text"
              id="battery"
              name="battery"
              defaultValue={user.phone}
            />
          </div>
          <div className="form-group">
            <label htmlFor="location">monthlyInstallment</label>
            <input
              type="text"
              id="last-name"
              name="last-name"
              defaultValue={user.monthlyInstallment}
            />
          </div>
          <div className="form-group">
            <label htmlFor="location">totalAmount</label>
            <input
              type="text"
              id="last-name"
              name="last-name"
              defaultValue={user.totalAmount}
            />
          </div>
          <div className="form-group">
            <label htmlFor="location">district</label>
            <input
              type="text"
              id="last-name"
              name="last-name"
              defaultValue={user.district}
            />
          </div>
          <div className="form-group">
            <label htmlFor="location">sector</label>
            <input
              type="text"
              id="last-name"
              name="last-name"
              defaultValue={user.sector}
            />
          </div>
          <div className="form-group">
            <label htmlFor="location">cell</label>
            <input
              type="text"
              id="last-name"
              name="last-name"
              defaultValue={user.cell}
            />
          </div>
          <div className="form-group">
            <label htmlFor="location">nearby</label>
            <input
              type="text"
              id="last-name"
              name="last-name"
              defaultValue={user.nearby}
            />
          </div>
          <div className="form-group">
            <label htmlFor="location">coordinates</label>
            <input
              type="text"
              id="last-name"
              name="last-name"
              defaultValue={user.coordinates}
            />
          </div>
          <div className="form-group">
            <label htmlFor="location">overFlow</label>
            <input
              type="text"
              id="last-name"
              name="last-name"
              defaultValue={user.overFlow}
            />
          </div>
          <div className="form-group">
            <label htmlFor="location">totalRemaining</label>
            <input
              type="text"
              id="last-name"
              name="last-name"
              defaultValue={user.totalRemaining}
            />
          </div>
          <button type="submit">Done</button>
        </form>
      </div>
    </div>
  );
};

export default Profile;
