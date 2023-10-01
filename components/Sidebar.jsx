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
import Image from "next/image";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import MenuIcon from "@mui/icons-material/Menu";
import { styled, alpha } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import Avatar from "@mui/material/Avatar";
import Grid from "@mui/material/Grid";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: "primary.main",
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "504px",
  [theme.breakpoints.down("md")]: {
    width: "400px",
  },
  [theme.breakpoints.down("sm")]: {
    width: "50%",
  },
}));

const drawerWidth=133;

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: theme.palette.primary.main,
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

function ResponsiveDrawer(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const icons = [
    <OtherHousesOutlinedIcon sx={{ width: "14px", height: "14px" }} />,
    <PermIdentityOutlinedIcon sx={{ width: "14px", height: "14px" }} />,
    <LeaderboardOutlinedIcon sx={{ width: "14px", height: "14px" }} />,
    <LocalGroceryStoreOutlinedIcon sx={{ width: "14px", height: "14px" }} />,
    <ShoppingBagOutlinedIcon sx={{ width: "14px", height: "14px" }} />,
    <ShowChartOutlinedIcon sx={{ width: "14px", height: "14px" }} />,
    <MapsUgcOutlinedIcon sx={{ width: "14px", height: "14px" }} />,
    <SettingsOutlinedIcon sx={{ width: "14px", height: "14px" }} />,
    <StarBorderPurple500OutlinedIcon sx={{ width: "14px", height: "14px" }} />,
    <HistoryOutlinedIcon sx={{ width: "14px", height: "14px" }} />,
    <ExitToAppOutlinedIcon sx={{ width: "14px", height: "14px" }} />,
  ];

  const drawer = (
    <Box
      sx={{
        backgroundColor: "primary.dark",
        color: "grey.600",
        width: "fit-content",
        pt: "50px",
        height: "100vh",
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
                mr: "15px",
                mt: "6px",
                mb: "6px",
                borderRadius: "5px",
                padding: 0,
              }}
            >
              <ListItemIcon sx={{ minWidth: "30px" }}>
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
                  <Typography
                    sx={{
                      fontSize: "12px",
                      fontWeight: 500,
                      lineHeight: "15px",
                    }}
                  >
                    {text}
                  </Typography>
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
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${134}px` },
        }}
      >
        <Toolbar sx={{ backgroundColor: "primary.dark" }}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Grid container direction={"row"} justifyContent={"space-between"}>
            <Search sx={{ backgroundColor: "primary.main" }}>
              <SearchIconWrapper>
                <SearchIcon sx={{ color: "grey.500" }} />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search here…"
                inputProps={{ "aria-label": "search" }}
                sx={{ color: "grey.400" }}
              />
            </Search>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-evenly",
                alignItems: "center",
                width: "100px",
              }}
            >
              <Image
                src="/images/NotifIcon.svg"
                width={"15"}
                height={"17"}
              ></Image>
              <Avatar sx={{ width: "29px", height: "29px" }} />
              <Image src={"/images/Arrow.svg"} width={"6"} height={"12"} />
            </Box>
          </Grid>
          {/**dddddddddd */}
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
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3 ,backgroundColor:'primary.dark',ml:{sm:`${drawerWidth}px`},height:'100vh'}}
      >
        <Toolbar />
        {props.children}
        
      </Box>
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
