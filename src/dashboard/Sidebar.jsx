import React, { useState, useEffect } from 'react';
import {styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import {useMediaQuery } from '@mui/material';
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { IoHome } from "react-icons/io5";
import { HiDocumentReport } from "react-icons/hi";
import QueryStatsIcon from "@mui/icons-material/QueryStats";
import BusAlertIcon from "@mui/icons-material/BusAlert";
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Outlet } from "react-router-dom";
import lockerlogo from "../assets/lockerlogo.png"; // Import your logo image
import { DashboardLayout } from '@toolpad/core';
// Drawer width and styles
import DashboardLayoutBasic from './DashboardLayoutBasic'

export default function Sidebar({ children }) {
  const theme = useTheme();

  
  return <DashboardLayoutBasic>
    <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        {children}
        <Outlet />
      </Box>
  </DashboardLayoutBasic>
}