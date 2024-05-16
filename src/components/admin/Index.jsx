// src/components/AdminPanel.js
import React, { useEffect, useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Grid,
  Paper,
  List,
  ListItem,
  ListItemText,
  Menu,
  MenuItem,
  Avatar,
  ListItemIcon,
  Tooltip,
  IconButton,
} from "@mui/material";
import AdminLogin from "./AdminLogin";
import { useNavigate } from "react-router-dom";
import Logout from "@mui/icons-material/Logout";
import Users from "./ContactUsers";

const Dashboard = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [selectedNavItem, setSelectedNavItem] = useState("Users");
  const [authenticated, setAuthenticated] = useState(false);
  const [admin, setAdmin] = useState();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const navigate = useNavigate();

  const handleNavItemClick = (itemName) => {
    setSelectedNavItem(itemName);
  };

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  useEffect(() => {
    const token = localStorage.getItem("Admintoken");
    if (token) {
      setIsLoading(!isLoading);
      jwt_decode(token);
      setAuthenticated(true);
      setIsLoading(false)
    }
  }, [isLoading]);

  const jwt_decode = (token) => {
    setAdmin(JSON.parse(atob(token)));
    return JSON.parse(atob(token)); // Simulated JWT decoding
  };

  const handleLogout = () => {
    localStorage.removeItem("Admintoken");
    setAuthenticated(false);
  };

  if (authenticated && admin.username === "admin@gmail.com" && "admin@123") {
    return (
      <div className="dashboard_section">
        <AppBar position="static">
          <Toolbar style={{ display: "flex", justifyContent: "space-between" }}>
            <Typography variant="h6" component="div">
            <img src="/brandclever_logo.png" width="200px" />
            </Typography>
            <div>
              <Tooltip title="Account">
                <IconButton
                  onClick={handleClick}
                  size="small"
                  sx={{ ml: 2 }}
                  aria-controls={open ? 'account-menu' : undefined}
                  aria-haspopup="true"
                  aria-expanded={open ? 'true' : undefined}
                >
                  <Avatar sx={{ width: 32, height: 32 }}></Avatar>
                </IconButton>
              </Tooltip>
              <Menu
                anchorEl={anchorEl}
                id="account-menu"
                open={open}
                onClose={handleClose}
                onClick={handleClose}
                PaperProps={{
                  elevation: 0,
                  sx: {
                    overflow: 'visible',
                    filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                    mt: 1.5,
                    '& .MuiAvatar-root': {
                      width: 32,
                      height: 32,
                      ml: -0.5,
                      mr: 1,
                    },
                    '&:before': {
                      content: '""',
                      display: 'block',
                      position: 'absolute',
                      top: 0,
                      right: 14,
                      width: 10,
                      height: 10,
                      bgcolor: 'background.paper',
                      transform: 'translateY(-50%) rotate(45deg)',
                      zIndex: 0,
                    },
                  },
                }}
                transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
              >
                
                <MenuItem onClick={handleLogout}>
                  <ListItemIcon>
                    <Logout fontSize="small" />
                  </ListItemIcon>
                  Logout
                </MenuItem>

              </Menu>
            </div>
          </Toolbar>
        </AppBar>
        <div>
          <Grid container spacing={3}>
            <Grid item xs={3}>
              <Paper className="left_nav">
                {/* Left side: Navigation */}
                <List component="nav">
                  
                  <ListItem onClick={() => handleNavItemClick("Users")}>
                    <ListItemText
                      primary="Contct Users"
                      className={
                        selectedNavItem === "Users" ? "active_nav" : "nav_item"
                      }
                    />
                  </ListItem>
                  <ListItem onClick={() => handleNavItemClick("career")}>
                    <ListItemText
                      primary="Career Users"
                      className={
                        selectedNavItem === "career"
                          ? "active_nav"
                          : "nav_item"
                      }
                    />
                  </ListItem>
                </List>
              </Paper>
            </Grid>
            <Grid item xs={9}>
              <Paper>
                {/* Right side: Content */}
                <Typography variant="h5">{selectedNavItem}</Typography>
                {/* Content based on selected navigation item */}
                {selectedNavItem === "Users" && <><Users/></>}
               
                {/* Add more content components for other navigation items */}
              </Paper>
            </Grid>
          </Grid>
        </div>
      </div >
    );
  }

  return (
    <div>
      <AdminLogin isLoading={() => [isLoading, setIsLoading]} />
    </div>
  );
};

export default Dashboard;
