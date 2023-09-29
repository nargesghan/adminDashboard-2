import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { IconButton, Typography } from "@mui/material";
import PermIdentityOutlinedIcon from "@mui/icons-material/PermIdentityOutlined";
import LeaderboardOutlinedIcon from "@mui/icons-material/LeaderboardOutlined";
import LocalGroceryStoreOutlinedIcon from "@mui/icons-material/LocalGroceryStoreOutlined";
import OtherHousesOutlinedIcon from "@mui/icons-material/OtherHousesOutlined";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import ShowChartOutlinedIcon from "@mui/icons-material/ShowChartOutlined";
import MapsUgcOutlinedIcon from "@mui/icons-material/MapsUgcOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import StarBorderPurple500OutlinedIcon from "@mui/icons-material/StarBorderPurple500Outlined";
import HistoryOutlinedIcon from "@mui/icons-material/HistoryOutlined";
import ExitToAppOutlinedIcon from "@mui/icons-material/ExitToAppOutlined";
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import MenuIcon from '@mui/icons-material/Menu';

const drawerWidth = 240;

function ResponsiveDrawer(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const icons = [
    <OtherHousesOutlinedIcon sx={{ width:'14px',
    height:'14px',}}/>,
    <PermIdentityOutlinedIcon sx={{ width:'14px',
    height:'14px',}}/>,
    <LeaderboardOutlinedIcon sx={{ width:'14px',
    height:'14px',}}/>,
    <LocalGroceryStoreOutlinedIcon sx={{ width:'14px',
    height:'14px',}}/>,
    <ShoppingBagOutlinedIcon sx={{ width:'14px',
    height:'14px',}}/>,
    <ShowChartOutlinedIcon sx={{ width:'14px',
    height:'14px',}}/>,
    <MapsUgcOutlinedIcon sx={{ width:'14px',
    height:'14px',}}/>,
    <SettingsOutlinedIcon sx={{ width:'14px',
    height:'14px',}}/>,
    <StarBorderPurple500OutlinedIcon sx={{ width:'14px',
    height:'14px',}}/>,
    <HistoryOutlinedIcon sx={{ width:'14px',
    height:'14px',}}/>,
    <ExitToAppOutlinedIcon sx={{ width:'14px',
    height:'14px',}}/>,
  ];

  const drawer = (
    <Box
      sx={{
        backgroundColor: "primary.dark",
        color: "grey.600",
        width: "fit-content",
        pt:'50px',
        height:'100vh'
      }}
    > 
      <List>
        {[
          "Dashboard",
          "Profile",
          "Leaderboard",
          "Order",
          "Product",
          "Sales Report",
          "Message",
          "Settings",
          "Favourite",
          "History",
          "Signout",
        ].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton
              sx={{
                ":hover": {
                  bgcolor: "secondary.main",
                  color: "primary.dark",
                },
                ml: "15px",
                mr:'15px',
                mt:'6px',
                mb:'6px',
                borderRadius: "5px",
                padding:0,
              }}
            >
              <ListItemIcon sx={{minWidth:'30px'}}>
                <IconButton
                  color="inherit"
                  sx={{
                    color: "grey.600",
                    ":hover": {
                      color: "primary.dark",
                    },
                  }}
                >
                  {icons[index]}
                </IconButton>
              </ListItemIcon>
              <ListItemText
                primary={
                  <Typography sx={{ fontSize: "12px",fontWeight:500,lineHeight:'15px' }}>{text}</Typography>
                }
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
    <AppBar
      position="fixed"
      sx={{
        width: { sm: `calc(100% - ${133}px)` },
        ml: { sm: `${drawerWidth}px` },
      }}
    >
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={handleDrawerToggle}
          sx={{ mr: 2, display: { sm: 'none' } }}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" noWrap component="div">
          Responsive drawer
        </Typography>
      </Toolbar>
    </AppBar>
      <Box component="nav" aria-label="mailbox folders">
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": { boxSizing: "border-box" },
            width: "fit-content",
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": { boxSizing: "border-box" },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box>{props.children}</Box>
    </Box>
  );
}

ResponsiveDrawer.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default ResponsiveDrawer;
