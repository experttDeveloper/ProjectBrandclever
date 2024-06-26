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
import { Link, useNavigate } from "react-router-dom";
import Logout from "@mui/icons-material/Logout";
import Users from "./ContactUsers";
import LandingPageUser from "./LandingPageUser";
import Interviewers from "./Interviewers";
import Team from "./Team";

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



  if (authenticated && admin.username === "adminuser@gmail.com" && "Admin@1911") {
    return (
      <div className="dashboard_section">
        <AppBar position="static">
          <Toolbar className="admin_header">
            <Typography variant="h6" component="div">
              <Link to='/' target="_blank">
                <img src="/brandclever_logo.png" width="200px" />
              </Link>
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
                <h1>Dashboard</h1>
                {/* Left side: Navigation */}
                <List component="nav">

                  <ListItem onClick={() => handleNavItemClick("Users")}>
                    <ListItemText
                      primary="Contact Users"
                      className={
                        selectedNavItem === "Users" ? "active_nav" : "nav_item"
                      }
                    />
                  </ListItem>
                  <ListItem onClick={() => handleNavItemClick("Landing page users")}>
                    <ListItemText
                      primary="Landing page users"
                      className={
                        selectedNavItem === "Landing page users"
                          ? "active_nav"
                          : "nav_item"
                      }
                    />
                  </ListItem>
                  <ListItem onClick={() => handleNavItemClick("Interviewers")}>
                    <ListItemText
                      primary="Interviewers"
                      className={
                        selectedNavItem === "Interviewers"
                          ? "active_nav"
                          : "nav_item"
                      }
                    />
                  </ListItem>
                  <ListItem onClick={() => handleNavItemClick("Team")}>
                    <ListItemText
                      primary="Team"
                      className={
                        selectedNavItem === "Team"
                          ? "active_nav"
                          : "nav_item"
                      }
                    />
                  </ListItem>
                </List>
              </Paper>
            </Grid>
            <Grid item xs={9} className="admin_right_side">
              <Paper>
                <Typography variant="h5">{selectedNavItem}</Typography>
                {selectedNavItem === "Users" && <><Users /></>}
                {selectedNavItem === "Landing page users" && <LandingPageUser />}
                {selectedNavItem === "Interviewers" && <Interviewers />}
                {selectedNavItem === "Team" && <><Team/></>}
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
