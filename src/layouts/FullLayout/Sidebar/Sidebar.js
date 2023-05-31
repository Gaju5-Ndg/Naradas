import React from "react";
import { useLocation } from "react-router";
import { Link, NavLink ,useNavigate} from "react-router-dom";
import {
  Box,
  Drawer,
  useMediaQuery,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Button,
} from "@material-ui/core";
import { SidebarWidth } from "../../../assets/global/Theme-variable";
import logo from "../../../images/logo-2.png";
//import logo from "../../../images/logo-2.png";
import {
  DashboardOutlined,
  AddToPhotosOutlined,
  AspectRatioOutlined,
  AlbumOutlined,
  SwitchLeftOutlined,
} from "@material-ui/icons/";
import Buynow from "./Buynow";
import jwtDecode from "jwt-decode";

const Sidebar = (props) => {
  const [open, setOpen] = React.useState(true);
  const { pathname } = useLocation();
  const pathDirect = pathname;
  const lgUp = useMediaQuery((theme) => theme.breakpoints.up("lg"));
  const invRole = localStorage.getItem("token");
  const userToken = jwtDecode(invRole);
  console.log("too", userToken.id.role);
  const navigate = useNavigate();

  const handleLogout = () =>{
    localStorage.removeItem("token");
    navigate("/home")
  }
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

  const handleClick = (index) => {
    if (open === index) {
      setOpen((prevopen) => !prevopen);
    } else {
      setOpen(index);
    }
  };

  const SidebarContent = (
    <Box
      sx={{
        p: 3,
        height: "calc(100vh - 40px)",
        backgroundColor: "#1565C0",
        marginTop: "0px",
        color: "white",
      }}
    >
      <Link to="/">
        <Box sx={{ display: "flex", alignItems: "Center" }}>
          <img src={logo} alt="Logo" />
        </Box>
      </Link>

      <Box>
        <List
          sx={{
            mt: 4,
          }}
          style={{
            flexDirection: "column",
          }}
        >
          {Menuitems.map((item, index) => {
            //{/********SubHeader**********/}
            // console.log(item);
            return (
              <List component="li" disablePadding key={item.title}>
                {invRole === "admin" && item.title === "Client" ? (
                  <ListItem
                    onClick={() => handleClick(index)}
                    button
                    component={NavLink}
                    to={item.href}
                    selected={pathDirect === item.href}
                    sx={{
                      mb: 1,
                      ...(pathDirect === item.href && {
                        color: "white",
                        backgroundColor: (theme) =>
                          `${theme.palette.primary.main}!important`,
                      }),
                    }}
                  >
                    <ListItemIcon
                      sx={{
                        color: "white",
                        ...(pathDirect === item.href && { color: "white" }),
                      }}
                    >
                      <item.icon width="20" height="20" />
                    </ListItemIcon>
                    <ListItemText>{item.title}</ListItemText>
                  </ListItem>
                ) : (
                  invRole !== "admin" && (
                    <ListItem
                      onClick={() => handleClick(index)}
                      button
                      component={NavLink}
                      to={item.href}
                      selected={pathDirect === item.href}
                      sx={{
                        mb: 1,
                        ...(pathDirect === item.href && {
                          color: "white",
                          backgroundColor: (theme) =>
                            `${theme.palette.primary.main}!important`,
                        }),
                      }}
                    >
                      <ListItemIcon
                        sx={{
                          color: "white",
                          ...(pathDirect === item.href && { color: "white" }),
                        }}
                      >
                        <item.icon width="20" height="20" />
                      </ListItemIcon>
                      <ListItemText>{item.title}</ListItemText>
                    </ListItem>
                  )
                )}
              </List>
            );
          })}
        </List>
      </Box>
      <Buynow />
      <Box sx={{backgroundColor: (theme) =>
                          `${theme.palette.primary.main}!important`,
                      }}>
        <Button sx={{ color: "white" }} onClick={ handleLogout}>logout</Button>
      </Box>
    </Box>
  );
  if (lgUp) {
    return (
      <Drawer
        anchor="left"
        open={props.isSidebarOpen}
        variant="persistent"
        PaperProps={{
          sx: {
            width: SidebarWidth,
          },
        }}
      >
        {SidebarContent}
      </Drawer>
    );
  }
  return (
    <Drawer
      anchor="left"
      open={props.isMobileSidebarOpen}
      onClose={props.onSidebarClose}
      PaperProps={{
        sx: {
          width: SidebarWidth,
        },
      }}
      variant="temporary"
    >
      {SidebarContent}
    </Drawer>
  );
};

export default Sidebar;
