import React from "react"




function AddSale () {
    return (
 <div className="add-category-container" style={{display:"flex",backgroundColor:"white",paddingBottom:"50px",borderRadius:"10px"}}>
    
<div className="add-category-form" style={{marginTop:"30px",paddingLeft:"50px"}}>
<p style={{color:"blue",fontSize:"20px",marginBottom:"80px"}}>Add Sale</p>
<p >Add Sale </p>
<input  style={{padding:"4px 100px 4px 0px"}}
        type="text"
        placeholder="Name of Category"
        name="Category"
        required
        />

<p>Add Item</p>
<input  style={{padding:"4px 100px 4px 0px"}}
        type="text"
        placeholder="Name of Item"
        name="Item"
        required
        />

<p>Add Unit</p>
<input  style={{padding:"4px 100px 4px 0px"}}
        type="text"
        placeholder="Symbol of Unit"
        name="Unit"
        required
        />

<button style={{
    display:"flex",
    marginTop:"20px",
    paddingRight:"121px",
    paddingLeft:"121px",
    backgroundColor:"blue",
    textAlign:"center",
    border:"none",
    borderRadius:"6px",
    color:"white",
    paddingTop:"7px",
    paddingBottom:"7px",
}}
        type="save"
        className="save-data"
        >{" "}Save{" "}
        </button>

</div>
 </div>
    )
}
export default AddSale;