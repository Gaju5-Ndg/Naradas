import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";


const initialState ={
    EstateSale: false,
    stock: [],
    sale:{},
};

export const stockSlice = createSlice({
    name:"b",
    initialState,
    reducers: {
        stock: (state) =>{
            state.EstateSale = true;
        },
        storeStock: (state,action) =>{
            state.stock = action.payload
        },
        getStock: (state,action) =>{
            state.stock = action.payload
        }
    },
});

export const createStock = (data) => async(dispatch) =>{
    const token = localStorage.getItem("token")
    console.log(data)
    const stock = {
        items: [
            {
                itemId: "",
                quantity: {
                    box: {
                        numberOfBoxes: "",
                        subItems: {
                            pieces: ""
                        }
                    }
                },
                salesPrice: {
                    box: {
                        price: "",
                        subItems: {
                            price: ""
                        }
                    }
                }
            }
        ]
    }
    axios({
        method:"POST",
        url:"https://inventory-ciul.onrender.com/api/sales/create",
        data:sale,
        headers: {
            Authorization: `bearer ${localStorage.getItem("token")}`
        },
    })
    .then((res)=>{
        console.log('helooooooo')
    })
    .catch((err) =>{
        console.log(err)
    });
};

export const getStock =() =>(dispatch)=> {
    axios({
        method:"GET",
        url:"https://inventory-ciul.onrender.com/api/sales/all",
        headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`  
        }
    })
    .then((Response)=>{
        console.log(Response.stock)
        dispatch(storeStock(Response.data))
    })
    .then((err)=>{
        console.log(err)
    })
    }

    export const {sale,storeStock} =stockSlice.actions;
    export default stockSlice.reducer;