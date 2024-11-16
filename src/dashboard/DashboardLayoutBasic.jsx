import * as React from "react";
import { Link, useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton"; // Import IconButton
import { AppProvider } from "@toolpad/core/AppProvider";
import { DashboardLayout } from "@toolpad/core/DashboardLayout";
import { useDemoRouter } from "@toolpad/core/internal";
import lockerlogo from "../assets/lockerlogo.png"; // Import your logo image
import { createTheme } from "@mui/material/styles";
import LogoutIcon from "@mui/icons-material/Logout"; // Import logout icon (or any other icon)
import { FaUserCircle } from "react-icons/fa"; // Import the specific icon
import { Box, Typography } from "@mui/material"; // Import Typography from MUI
import DashboardIcon from "@mui/icons-material/Dashboard"; // Import Dashboard Icon
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart"; // Import Shopping Cart Icon
import BarChartIcon from "@mui/icons-material/BarChart"; // Import BarChart Icon
import DescriptionIcon from "@mui/icons-material/Description"; // Import Description Icon4
import ListIcon from '@mui/icons-material/List';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import EditIcon from '@mui/icons-material/Edit';
import ApartmentIcon from '@mui/icons-material/Apartment';
import FaxIcon from '@mui/icons-material/Fax';
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
import LayersIcon from "@mui/icons-material/Layers"; // Import Layers Icon
import "../App.css"; // Import your CSS file
const NavigationMenu = [
  {
    segment: "home",
    title: "Home",
    icon: <DashboardIcon />,
    color: "#4caf50", // Green color for Dashboard
  },
  {
    segment: "cmpMng",
    title: "Admin panel",
    icon: <ApartmentIcon />,
    children: [
      {
        segment: "newCompany",
        title: "Create Company",
        icon: <AddCircleOutlineIcon />,
      },
      {
        segment: "editcompany",
        title: "Edit Company",
        icon: <EditIcon />,
      },
      {
        segment: "Company_list",
        title: "Company List",
        icon: <ListIcon />,
      },
    ],
  },
  {
    segment: "offMng",
    title: "Office Management",
    icon: <FaxIcon />,
    children: [
      {
        segment: "newOff",
        title: "New Office",
        icon: <AddCircleOutlineIcon />,
      },
      {
        segment: "editOff",
        title: "Edit Office",
        icon: <EditIcon />,
      },
      {
        segment: "offList",
        title: "Office List",
        icon: <ListIcon />,
      },
    ],
  },
  {
    segment: "userMng",
    title: "User Management",
    icon: <PersonAddAltIcon/>,
    children: [
      {
        segment: "newUser",
        title: "New User",
        icon: <AddCircleOutlineIcon />,
      },
      {
        segment: "editUser",
        title: "Edit User",
        icon: <EditIcon />,
      },
      {
        segment: "userList",
        title: "User List",
        icon: <ListIcon />,
      },
    ],
  },
  {
    segment: "lckMng",
    title: "Locker Management",
    icon: <PersonAddAltIcon/>,
    children: [
      {
        segment: "newlckr",
        title: "New Locker",
        icon: <AddCircleOutlineIcon />,
      },
      {
        segment: "editUser",
        title: "Edit User",
        icon: <EditIcon />,
      },
      {
        segment: "userList",
        title: "User List",
        icon: <ListIcon />,
      },
    ],
  },
  {
    segment: "orders",
    title: "Orders",
    icon: <ShoppingCartIcon />,
  },
  {
    kind: "divider",
  },

  
];

const demoTheme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 600,
      lg: 1200,
      xl: 1536,
    },
  },
});

const handleNavigation = (segment) => {
  if (segment === "home") {
    navigate("/home");
  }
  if (segment === "cmpMng") {
    navigate("/CompanyNew");
  }
  if (segment === "integrations") {
    navigate("/CompanyNew");
  }
  if (segment === "newUser") {
    navigate("/newUser");
  }
  if (segment === "Company_list") {
    navigate("/Company_list");
  }
  if (segment === "newlckr") {
    navigate("/newLocker");
  }
  
};

function DashboardLayoutBasic(props) {
  const { window, children } = props;
  const router = useDemoRouter("/home");
  const demoWindow = window !== undefined ? window() : undefined;
  const navigate = useNavigate();

  const handleSignOut = () => {
    localStorage.removeItem("jwtToken");
    navigate("/login");
  };

  return (
    <AppProvider
      navigation={NavigationMenu.map((item) => ({
        ...item,
        onClick: () => handleNavigation(item.segment),
      }))}
      branding={{
        logo: (
          <img
            src={lockerlogo}
            alt="Locker logo"
            style={{ height: "38px", marginRight: "15px" }}
          />
        ),
        title: (
          <Typography
            sx={{
              color: "black",
              fontSize: "1.25rem",
              textShadow: "none",
              fontWeight: "600",
              flexGrow: 1, // Allows Typography to take the available space
              textAlign: "left", // Center when open, left when closed
            }}
          >
            LOCKER MANAGEMENT SYSTEM
          </Typography>
        ),
      }}
      router={null}
      theme={demoTheme}
      window={demoWindow}
    >
      <DashboardLayout
        sx={{
          display: "flex",
          height: "100vh",
          ".css-hikx3c-MuiDrawer-docked .MuiDrawer-paper": {
            width: "250px",
            minWidth: "200px",
          },
          ".css-hikx3c-MuiDrawer-docked": {
            width: "250px",
            minWidth: "200px",
          },
        }}
        slots={{
          toolbarActions: () => (
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                width: "100%",
              }}
            >
              {/* Title and logo to the left */}
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "flex-start",
                  alignItems: "center",
                }}
              >
                <Link
                  to="#"
                  role="button"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    textDecoration: "none",
                  }}
                >
                  <FaUserCircle style={{ marginRight: "8px" }} />{" "}
                  {/* Add space between icon and text */}
                  <Typography
                    sx={{
                      fontSize: "1rem",
                      color: "#000",
                      fontWeight: "600",
                      mr: "10px",
                    }}
                  >
                    LMS HEAD OFFICE (AU)
                  </Typography>
                </Link>
              </Box>

              {/* IconButton (Logout) to the right of the title */}
              <span
                style={{
                  cursor: "pointer",
                  marginRight: "8px",
                  height: "2.2rem",
                  width: "2.2rem",
                  borderRadius: "50%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  padding: "10px",
                  overflow: "hidden",
                  background: "#ebecef",
                }}
                onClick={handleSignOut}
              >
                <LogoutIcon style={{ fontSize: "1.5rem", color: "#000" }} />
              </span>
            </Box>
          ),
        }}
      >
        {/* Main Content */}
        <Box sx={{ flex: 1 }}>{children}</Box>
      </DashboardLayout>
    </AppProvider>
  );
}

DashboardLayoutBasic.propTypes = {
  window: PropTypes.func,
  children: PropTypes.node,
};

export default DashboardLayoutBasic;
