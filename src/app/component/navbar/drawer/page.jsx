"use client";

import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { useRouter } from "next/navigation";
import {
  FaSignInAlt,
  FaUserPlus,
  FaInfoCircle,
  FaEnvelope,
  FaLock,
} from "react-icons/fa";

const AppDrawer = ({
  open,
  onClose,
  onSignIn,
  onSignUp,
  isAuthenticated,
  logout,
}) => {
  const router = useRouter();

  const handleNavigation = (path) => {
    router.push(path);
    onClose();
  };

  const handleLogout = () => {
    logout();
    onClose();
  };

  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" onClick={onClose}>
      <List>
        {!isAuthenticated ? (
          <>
            <ListItem disablePadding>
              <ListItemButton onClick={() => onSignIn()}>
                <ListItemText primary="Login" />
                <FaSignInAlt />
              </ListItemButton>
            </ListItem>

            <ListItem disablePadding>
              <ListItemButton onClick={() => onSignUp()}>
                <ListItemText primary="Register" />
                <FaUserPlus />
              </ListItemButton>
            </ListItem>
          </>
        ) : (
          <>
            <ListItem disablePadding>
              <ListItemButton onClick={handleLogout}>
                <ListItemText primary="Logout" />
                <FaLock />
              </ListItemButton>
            </ListItem>
          </>
        )}

        <ListItem disablePadding>
          <ListItemButton onClick={() => handleNavigation("/component/about")}>
            <ListItemText primary="About Us" />
            <FaInfoCircle />
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton
            onClick={() => handleNavigation("/component/contact")}
          >
            <ListItemText primary="Contact" />
            <FaEnvelope />
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton
            onClick={() => handleNavigation("/component/privacy")}
          >
            <ListItemText primary="Privacy Policy" />
            <FaLock />
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <Drawer anchor="right" open={open} onClose={onClose}>
      {DrawerList}
    </Drawer>
  );
};

export default AppDrawer;
