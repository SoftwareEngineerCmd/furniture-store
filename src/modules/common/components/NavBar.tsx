import MenuIcon from "@mui/icons-material/Menu";
import {
  AppBar,
  Avatar,
  Box,
  Button,
  Container,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";
import { FC, useState } from "react";
import { Link } from "react-router-dom";
import { NavBarPagesEnum } from "../models/nav-bar-pages.enum";
import { pagesConfig } from "../configs/pages.config";
import { NavigationItemModel } from "../models/navigation-item.model";

const pages: NavigationItemModel[] = [
  {
    id: 1,
    url: pagesConfig[NavBarPagesEnum.HOME],
    name: NavBarPagesEnum.HOME,
    isDisabled: false,
  },
  {
    id: 2,
    url: pagesConfig[NavBarPagesEnum.SHOP],
    name: NavBarPagesEnum.SHOP,
    isDisabled: false,
  },
  {
    id: 3,
    url: pagesConfig[NavBarPagesEnum.ABOUT_US],
    name: NavBarPagesEnum.ABOUT_US,
    isDisabled: false,
  },
  {
    id: 4,
    url: pagesConfig[NavBarPagesEnum.CONTACT_US],
    name: NavBarPagesEnum.CONTACT_US,
    isDisabled: false,
  },
];

export const NavBar: FC = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const toggleDrawer = () => setMobileOpen((prev) => !prev);

  return (
    <AppBar position="static">
      <Container maxWidth="xl" sx={{ bgcolor: "background.paper" }}>
        <Toolbar disableGutters>
          {/* Mobile Hamburger */}
          <Box sx={{ display: { xs: "flex", md: "none" }, flexGrow: 1 }}>
            <IconButton
              size="large"
              onClick={toggleDrawer}
              sx={{ color: "text.primary" }}
            >
              <MenuIcon />
            </IconButton>
          </Box>

          {/* Desktop Logo */}
          <Typography
            variant="h6"
            noWrap
            component={Link}
            to="/"
            sx={{
              mr: 2,
              display: { xs: "none", sm: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "text.primary",
              textDecoration: "none",
            }}
          >
            Furniture Store
          </Typography>
          

          {/* Desktop Nav */}
          <Stack
            flexDirection="row"
            flexGrow={1}
            justifyContent="center"
            sx={{ display: { xs: "none", md: "flex" } }}
          >
            {pages.map((page) => (
              <Button
                key={page.id}
                component={Link}
                to={page.url}
                sx={{ my: 2, color: "text.primary", display: "block" }}
              >
                {page.name}
              </Button>
            ))}
          </Stack>
        </Toolbar>
      </Container>

      {/* Mobile Drawer */}
      <Drawer
        anchor="left"
        open={mobileOpen}
        onClose={toggleDrawer}
        ModalProps={{ keepMounted: true }}
      >
        <Box
          sx={{ width: 250 }}
          role="presentation"
          onClick={toggleDrawer}
          onKeyDown={toggleDrawer}
        >
          <Typography variant="h6" m={2}>
            Furniture Store
          </Typography>
          <Divider />
          <List>
            {pages.map((page) => (
              <ListItem key={page.id} disablePadding>
                <ListItemButton component={Link} to={page.url}>
                  <ListItemText primary={page.name} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </AppBar>
  );
};
