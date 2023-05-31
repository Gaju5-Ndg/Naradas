import React from "react";
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import { useEffect } from "react";

const Statements = () => {
  const [rows, setRows] = React.useState([]);
  
  useEffect(() => {
    fetch('https://inventory-ciul.onrender.com/api/sales/profits', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'token': localStorage.getItem('inv-token'),
      },
    })
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
        setRows(response.data.map((item, index) => {
          return {
            id: item._id,
            no: index + 1,
            totalSales: item.totalSales,
            // items: item.items,
            totalExpenses: item.totalExpenses,
            profit: item.profit,
            netProfit: item.netProfit,
            createdAt: item.createdAt,
            updatedAt: item.updatedAt,
          };
        }));
      }).catch((error) => {
        console.log(error);
      });
  }, []);


  const columns = [
    { field: 'no', headerName: 'No.', width: 70 },
    { field: 'totalSales', headerName: 'Total Sales', width: 130 },
    // { field: 'items', headerName: 'Items', width: 130 },
    { field: 'totalExpenses', headerName: 'TotalExpenses', type: 'number', width: 150 },
    { field: 'profit', headerName: 'Profit', type: 'number', width: 90 },
    { field: 'netProfit', headerName: 'Net Profit', type: 'number', width: 90 },
   { field: 'createdAt', headerName: 'Created At', width: 130 },
   { field: 'updatedAt', headerName: 'Updated At', width: 130 },
  ];

  return (
    <div style={{ width: '100%', height: '600px' }}>
      <h3>Profit Report </h3>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        checkboxSelection
        onSelectionModelChange={(newSelection) => {
          console.log(newSelection);
        }}
        slots={{ toolbar: GridToolbar }}
      />
    </div>
  );
}

export default Statements;
