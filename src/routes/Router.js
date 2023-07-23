import { lazy } from "react";
import { Navigate } from "react-router-dom";
import Category from "../views/FormElements/categories";
// import HistoryTable from "../views/FormElements/historyTable";
import Items from "../views/FormElements/items";
import PaymentTable from "../views/FormElements/Pay";
import PaymentModal from "../views/FormElements/PaymentModal";
import AddCategory from "../views/FormElements/addCategory";
import AddItem from "../views/FormElements/addItem";
import Report from "../views/FormElements/report";
import EditCategory from "../views/FormElements/editCategory";
import EditItem from "../views/FormElements/editItem";
import Stock from "../views/FormElements/stock";
import UserForm from "../views/FormElements/userForm";
import SalesReport from "../views/FormElements/salesReport";
//import ProfitReport from "../components/Landingpage/ProfitReport";

/****Screens *****/

import Home from "../components/Landingpage/home";
import Signup from "../components/Landingpage/Signup";
import StockForm from "../views/FormElements/StockForm";
import Login from "../components/Landingpage/Login";
import AddSale from "../views/FormElements/addSale";
import Sale from "../views/FormElements/sale";
import Profile from "../views/FormElements/profile";

import ForgotPassword from "../components/Landingpage/Forgotpassword";
import BusinessForm from "../components/Landingpage/BusinessForm";
import ProfitReport from "../components/Landingpage/ProfitReport";
import Statements from "../views/FormElements/Statements";
import HistoryTable from "../components/Landingpage/HistoryTable";


/****Layouts*****/
const FullLayout = lazy(() => import("../layouts/FullLayout/FullLayout.js"));
/****End Layouts*****/

/*****Pages******/
const Dashboard1 = lazy(() => import("../views/dashboards/Dashboard1"));

/*****Tables******/
const BasicTable = lazy(() => import("../views/tables/BasicTable"));

// form elements
const ExAutoComplete = lazy(() => import("../views/FormElements/stock"));
const ExButton1 = lazy(() => import("../views/FormElements/ExButton"));
const ExCheckbox1 = lazy(() => import("../views/FormElements/categories"));

const ExRadio = lazy(() => import("../views/FormElements/items"));
const ExButton = lazy(() => import("../views/FormElements/stock"));
const ExCheckbox = lazy(() => import("../views/FormElements/sale"));
const ExSlider = lazy(() => import("../views/FormElements/salesReport"));
//const ExSlider = lazy(() => import("../views/FormElements/ExSlider"));
const ExSwitch = lazy(() => import("../views/FormElements/Pay"));

// form layouts
const FormLayouts = lazy(() => import("../views/FormLayouts/FormLayouts"));

/*****Routes******/

const ThemeRoutes = [
  {
    path: "/",
    element: <Navigate to="/home" />,
  },
  {
    path: "/home",
    element: <Home />,
  },

  {
    path: "/",
    element: <Navigate to="/businessform" />,
  },

  { path: "/businessform", element: <BusinessForm /> },


  {
    path: "/",
    element: <Navigate to="/historytable" />,
  },
  { path: "/historytable/:id", element: <HistoryTable /> },

  // { path: "/historytable/:id", element: <HistoryTable /> },


  {
    path: "/",
    element: <Navigate to="/paymentmodal" />,
  },

  { path: "/paymentmodal", element: <PaymentModal /> },

  {
    path: "/",
    element: <Navigate to="/paymenttable" />,
  },

  { path: "/paymenttable", element: <PaymentTable /> },


{
  path: "/",
  element: <Navigate to="/profitreport"/>,
},
{ path:"/profitreport", element: <ProfitReport/>},
 

  {
    path: "/",
    element: <Navigate to="/signup" />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },

  {
    path: "/",
    element: <Navigate to="/login" />,
  },
  {
    path: "/login",
    element: <Login />,
  },

  {
    path: "/",
    element: <Navigate to="/forgotpassword" />,
  },
  {
    path: "/forgotpassword",
    element: <ForgotPassword />,
  },
  // {
  //   path: "/addstock", element: <StockForm />
  // },
  {
    path: "/dashboard/",
    exact: true,
    element: <FullLayout />,
    children: [
      { path: "/", element: <Navigate to="/dashboard/home" /> },
      { path: "/home", element: <Dashboard1 /> },
      { path: "/tables/basic-table", element: <BasicTable /> },
      { path: "/form-layouts/form-layouts", element: <FormLayouts /> },
      { path: "/form-elements/stock", element: <Stock /> },
      { path: "/form-elements/user", element: <UserForm /> },
      { path: "/form-elements/sale", element: <Sale /> },
      { path: "/form-elements/category", element: <Category /> },

      { path: "/form-elements/items", element: <Items /> },
      { path: "/form-elements/slider", element: <ExSlider /> },
      { path: "/form-elements/switch", element: <ExSwitch /> },
      { path: "/form-elements/report", element: <Report /> },
      { path: "/form-elements/statement", element: <Statements /> },
      { path: "/form-elements/salesReport", element: <SalesReport /> },
      { path: "/form-elements/profitreport", element: <ProfitReport /> },
      { path: "/form-elements/profile", element: <Profile /> },

      { path: "/addCategory", element: <AddCategory /> },
      { path: "/addItem", element: <AddItem /> },
      { path: "/editCategory", element: <EditCategory /> },
      { path: "/editItem", element: <EditItem /> },

      { path: "/StockForm", element: <StockForm /> },
      { path: "/addSale", element: <AddSale /> },
      
      { path: "/Signup", element: <Signup /> },
      { path: "/historytable/:id" ,element: <HistoryTable />}
      // {  },
    ],
  },
];

export default ThemeRoutes;
