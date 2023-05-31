import React from "react"


function EditCategory () {
    return (
 <div className="add-category-container" style={{display:"flex",backgroundColor:"white",paddingBottom:"50px",borderRadius:"10px",justifyContent:"center"}}>
    
<div className="add-category-form" style={{marginTop:"30px",paddingLeft:"50px"}}>
<p style={{color:"blue",fontSize:"30px",marginBottom:"80px"}}>Edit Category</p>
<p >Edit Category </p>
<input  style={{padding:"8px 380px 8px 0px",borderRadius:"8px"}}
        type="text"
        placeholder="Name of Category"
        name="Category"
        required
        />

<p>Edit Item</p>
<input  style={{padding:"8px 380px 8px 0px",borderRadius:"8px"}}
        type="text"
        placeholder="Name of Item"
        name="Item"
        required
        />

{/* <p>Edit Unit</p>
<input  style={{padding:"4px 100px 4px 0px"}}
        type="text"
        placeholder="Symbol of Unit"
        name="Unit"
        required
        /> */}

<button style={{
    display:"flex",
    marginTop:"30px",
    paddingRight:"80px",
    paddingLeft:"80px",
    backgroundColor:"blue",
    textAlign:"center",
    border:"none",
    borderRadius:"6px",
    color:"white",
    paddingTop:"8px",
    paddingBottom:"8px",
}}
        type="save"
        className="save-data"
        >{" "}Save{" "}
        </button>

</div>
 </div>
    )
}
export default EditCategory;