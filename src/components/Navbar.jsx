import React, { useEffect, useState } from "react";
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Menu,
  Container,
  Button,
  MenuItem,
  Switch,
  Link,
} from "@mui/material";

import MenuIcon from "@mui/icons-material/Menu";

import { useColorMode } from "../theme.context";

const pages = ["home", "about", "skills", "portfolio", "contact"];

const Navbar = () => {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const colorMode = useColorMode();

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 0) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <navbar>
      {isVisible && (
        <AppBar
          position="static"
          sx={{ position: "sticky", top: "0", zIndex: "100" }}
        >
          <Container maxWidth="xl">
            <Toolbar disableGutters>
              <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
                <IconButton
                  size="large"
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={handleOpenNavMenu}
                  color="inherit"
                >
                  <MenuIcon />
                </IconButton>
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorElNav}
                  anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "left",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "left",
                  }}
                  open={Boolean(anchorElNav)}
                  onClose={handleCloseNavMenu}
                  sx={{
                    display: { xs: "block", md: "none" },
                  }}
                >
                  {pages.map((page) => (
                    <MenuItem key={page} onClick={handleCloseNavMenu}>
                      <Link
                        href={`#${page}`}
                        underline="none"
                        color="inherit"
                        variant="button"
                      >
                        {page}
                      </Link>
                    </MenuItem>
                  ))}
                </Menu>
              </Box>
              <Box
                sx={{
                  flexGrow: 1,
                  display: { xs: "none", md: "flex" },
                  justifyContent: "flex-end",
                }}
              >
                {pages.map((page) => (
                  <Button
                    key={page}
                    onClick={handleCloseNavMenu}
                    sx={{ color: "white", display: "block" }}
                    size="large"
                  >
                    <Link href={`#${page}`} underline="none" color="inherit">
                      {page}
                    </Link>
                  </Button>
                ))}
              </Box>
              <Switch
                color="default"
                aria-label="theme"
                defaultChecked
                onClick={colorMode.toggleColorMode}
              />
            </Toolbar>
          </Container>
        </AppBar>
      )}
    </navbar>
  );
};
export default Navbar;
