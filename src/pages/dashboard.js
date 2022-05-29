import {
  AppBar,
  Avatar,
  Box,
  ButtonBase,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Tooltip,
  Typography,
} from "@mui/material";
import Head from "next/head";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [open, setOpen] = useState(false);

  const setDrawerOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Box>
      <Head>
        <title>Admin-Dashboard</title>
      </Head>

      <AppBar>
        <Toolbar>
          <IconButton onClick={setDrawerOpen}>
            <Image
              src="/assets/svg/bars.svg"
              alt="bars"
              width={30}
              height={30}
            />
          </IconButton>

          <Typography variant="h2" sx={{ marginLeft: "12px" }}>
            Point of Sale System
          </Typography>
        </Toolbar>
      </AppBar>

      <Drawer anchor="left" open={open} onClose={handleClose}>
        <Box
          sx={{
            minWidth: "200px",
            display: "flex",
            height: "100vh",
            flexDirection: "column",
          }}
        >
          <Box sx={{ padding: "12px", display: "flex" }}>
            <Avatar />
            <Box sx={{ marginLeft: "8px" }}>
              <Tooltip title="dominic.m.francisco@gmail.com">
                <Typography color="primary" noWrap sx={{ maxWidth: "150px" }}>
                  dominic.m.francisco@gmail.com
                </Typography>
              </Tooltip>

              <Typography color="secondary">Admin</Typography>
            </Box>
          </Box>
          <List sx={{ flexGrow: "1" }}>
            <Divider />
            <ListItem button>
              <ListItemIcon>
                <Image
                  src="/assets/svg/users.svg"
                  alt="users"
                  width={20}
                  height={20}
                ></Image>
              </ListItemIcon>
              <ListItemText primary="Users" />
            </ListItem>

            <ListItem button>
              <ListItemIcon>
                <Image
                  src="/assets/svg/box.svg"
                  alt="products"
                  width={20}
                  height={20}
                ></Image>
              </ListItemIcon>
              <ListItemText primary="Products" />
            </ListItem>

            <ListItem button>
              <ListItemIcon>
                <Image
                  src="/assets/svg/sales.svg"
                  alt="sales"
                  width={20}
                  height={20}
                ></Image>
              </ListItemIcon>
              <ListItemText primary="Sales" />
            </ListItem>
          </List>

          <List>
            <Divider />
            <ListItem button>
              <ListItemIcon>
                <Image
                  src="/assets/svg/logout.svg"
                  alt="logout"
                  width={20}
                  height={20}
                ></Image>
              </ListItemIcon>
              <ListItemText>Sign out</ListItemText>
            </ListItem>
          </List>
        </Box>
      </Drawer>
    </Box>
  );
}
