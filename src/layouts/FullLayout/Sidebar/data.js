import React from "react";
import {
  DashboardOutlined,
  AddToPhotosOutlined,
  AspectRatioOutlined,
  AssignmentTurnedInOutlined,
  AlbumOutlined,
  SwitchCameraOutlined,
  SwitchLeftOutlined,
} from "@material-ui/icons/";
import jwt from "jwt-decode";

const token = localStorage.getItem("token");
// console.log(token);

const userToken = jwt(token);
console.log("too", userToken.id.role);

const Menuitems =
  userToken.id.role === "client"
    ? [
        {
          title: "Profile",
          icon: SwitchLeftOutlined,
          href: "/dashboard/form-elements/profile",
        },
      ]
    : [
        {
          title: "Dashboard",
          icon: DashboardOutlined,
          href: "/dashboard/home",
        },
        {
          title: "Client",
          icon: AddToPhotosOutlined,
          href: "/dashboard/form-elements/stock",
        },

        // {
        //   title: "Categories",
        //   icon: AlbumOutlined,
        //   href: "/dashboard/form-elements/items",
        // },
        {
          title: "Payments",
          icon: AspectRatioOutlined,
          href: "/dashboard/form-elements/sale",
        },
        
      ];
export default Menuitems;
