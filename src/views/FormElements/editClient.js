import { Select } from "@material-ui/core";
import {React} from "react"
import { TextField, MenuItem,Typography ,Box, Button } from "@material-ui/core";
import {IoIosArrowDown} from "react-icons/io"



export const EditClient =()=> {
    return (
        <div className="add-item-container" style={{backgroundColor:"white",borderRadius:"10px",justifyContent:"center",paddingBottom:"20px"}}>
<div style={{padding:"20px 100px 0px 100px"}}>
    
    <Typography style={{color:"blue",fontSize:"25px",marginBottom:"50px"}}>Edit Clients</Typography>
    <Typography>Edit Client Name</Typography>
    
        <TextField
              id="date-text"
              label="Client Name"
              type="item"
              variant="outlined"
              fullWidth
              sx={{
                mb: 2,
              }}
            />







<Box style={{
            
            backgroundColor:"blue",
            color:"white",
            padding:"10px 0px 10px 0px",
            textAlign:"center",
            border:"none",
            borderRadius:"5px",
        }}
        type="save"
        className="save-data"
        >{" "}Save{" "}
        </Box>
        
        </div>       
// </div>
        
    )
}
export default EditClient;