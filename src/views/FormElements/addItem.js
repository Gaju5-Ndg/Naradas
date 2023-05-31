import { React, useEffect, useState } from "react";
import Category from "./categories";
import { IoIosArrowDown } from "react-icons/io";
import axios from "axios";
import Select from "react-select";
import { useNavigate } from "react-router-dom";

function AddItem() {
  const [date, setDate] = useState("");
  const [category, setCategory] = useState("");
  const [itemName, setItemName] = useState("");
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const navigate = useNavigate();

  const handleItemSave = (event) => {
    event.preventDefault();
    fetch(
      `https://inventory-ciul.onrender.com/api/items/${selectedCategory.id}/create`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          token: localStorage.getItem("inv-token"),
        },
        body: JSON.stringify({ name: itemName }),
      }
    )
      .then((response) => response.json())
      .then((data) => {
        navigate("/dashboard/form-elements/items");
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  useEffect(() => {
    fetch("https://inventory-ciul.onrender.com/api/category/all", {
      headers: {
        token: localStorage.getItem("inv-token"),
      },
    })
      .then((res) => res.json())
      .then((data) =>
        setCategories([
          ...data.categories.map((category) => ({
            id: category._id,
            label: category.name,
            value: category.name,
          })),
        ])
      )
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="add-item-container">
      <div className="add-item-form">
        <div className="add-item-part1">
          <p style={{ color: "blue", fontSize: "25px", marginBottom: "80px" }}>
            Add Item
          </p>
          <p>Date</p>
          <input
            className="form-control"
            type="date"
            placeholder="Date of entry"
            name="date"
            required
          />

          <p>Select category of item</p>
          <Select
            options={categories}
            value={selectedCategory}
            onChange={(selected) => setSelectedCategory(selected)}
            placeholder="Select category"
            name="category"
            required
            isSearchable
          />
          <p>Add name of Item</p>
          <input
            className="form-control"
            type="text"
            placeholder="Enter name of item"
            name="item"
            value={itemName}
            onChange={(e) => setItemName(e.target.value)}
            required
          />
        </div>

        {/* <div className="add-item-part2"  style={{padding:"20px 20px 0px 0px",marginTop:"116px"}}> */}
        {/* <p style={{marginLeft:"-290px"}}>Select category of item</p>
    <input  style={{padding:"4px 100px 4px 0px",marginLeft:"-290px"}}
        type="text"
        placeholder="Select category"
        name="Category"
        required
        /> */}

        {/* <p>Select unit of item</p>
    <input  style={{padding:"4px 100px 4px 0px"}}
        type="text"
        placeholder="Select Unit"
        name="Unit"
        required
        /> */}

        {/* <p>Price per piece</p>
    <input  style={{padding:"4px 100px 4px 0px"}}
        type="text"
        placeholder="Enter price per piece"
        name="Price"
        required
        />  */}
        {/* </div> */}

        {/* <div className="add-item-part3" style={{marginTop:"135px"}}>

 <p>Add quantity</p>
    <input  style={{padding:"4px 100px 4px 0px"}}
        type="text"
        placeholder="Enter Quantity"
        name="Quantity"
        required
        />

<p>Price of unit</p>
    <input  style={{padding:"4px 100px 4px 0px"}}
        type="text"
        placeholder="Enter price of unit"
        name="Price"
        required
        />

<p>Total amount</p>
    <input  style={{padding:"4px 100px 4px 0px"}}
        type="text"
        placeholder="Enter amount"
        name="Amount"
        required
        />
        </div> */}
        <button
          type="save"
          className="btn btn-primary"
          onClick={handleItemSave}
        >
          {" "}
          Save{" "}
        </button>
      </div>
    </div>
  );
}
export default AddItem;
