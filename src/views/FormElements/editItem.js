import {React} from "react"



function EditItem () {
    return (
        <div className="add-item-container" style={{backgroundColor:"white",borderRadius:"10px"}}>
<div className="add-item-form" style={{display:"flex",padding:"10px 0px 20px 20px",marginLeft:"150px"}}>
    <div className="add-item-part1" style={{padding:"20px 20px 0px 0px",marginTop:"-2px"}}>
    <p style={{color:"blue",fontSize:"25px",marginBottom:"80px"}}>Edit Item</p>
    <p>Edit Date</p>
    <input  style={{padding:"8px 380px 8px 0px",borderRadius:"8px"}}
        type="text"
        placeholder="Date of entry"
        name="Date"
        required
        />

<p >Select category of item</p>
    <input  style={{padding:"8px 380px 8px 0px",borderRadius:"8px"}}
        type="text"
        placeholder="Select category"
        name="Category"
        required
        />


<p>Edit name of Item</p>
    <input  style={{padding:"8px 380px 8px 0px",borderRadius:"8px"}}
        type="text"
        placeholder="Enter name of item"
        name="Item"
        required
        />

{/* <p>Edit Price per box</p>
    <input  style={{padding:"4px 100px 4px 0px"}}
        type="text"
        placeholder="Enter price per box"
        name="Price"
        required
        /> */}
        </div>

        {/* <div className="add-item-part2"  style={{padding:"20px 20px 0px 0px",marginTop:"116px"}}>
        <p style={{marginLeft:"-290px"}}>Select category of item</p>
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
        />

<p>Edit Price per piece</p>
    <input  style={{padding:"4px 100px 4px 0px"}}
        type="text"
        placeholder="Enter price per piece"
        name="Price"
        required
        />  */}
        {/* </div> */}

        {/* <div className="add-item-part3" style={{marginTop:"135px"}}>

 <p>Edit quantity</p>
    <input  style={{padding:"4px 100px 4px 0px"}}
        type="text"
        placeholder="Enter Quantity"
        name="Quantity"
        required
        />

<p>Edit Price of unit</p>
    <input  style={{padding:"4px 100px 4px 0px"}}
        type="text"
        placeholder="Enter price of unit"
        name="Price"
        required
        />

<p>New total amount</p>
    <input  style={{padding:"4px 100px 4px 0px"}}
        type="text"
        placeholder="Enter amount"
        name="Amount"
        required
        />
        </div> */}
        <button style={{
            marginTop:"410px",
            marginLeft:"-570px",
            backgroundColor:"blue",
            color:"white",
            padding:"8px 80px 8px 80px",
            border:"none",
            borderRadius:"5px",
        }}
        type="save"
        className="save-data"
        >{" "}Save{" "}
        </button>
</div>
        </div>
    )
}
export default EditItem;