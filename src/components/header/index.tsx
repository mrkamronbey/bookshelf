import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircle from "@mui/icons-material/AccountCircle";
import NotificationsIcon from "@mui/icons-material/Notifications";
import EmailIcon from '@mui/icons-material/Email';
import LogoutIcon from '@mui/icons-material/Logout';
import {
  Container,
  AppBar,
  Box,
  Toolbar,
  IconButton,
  InputBase,
  Badge,
  MenuItem,
  Menu
} from "@mui/material";
import Logo from "../../assets/logo.svg";
import { HeaderProps } from "./header.props";


const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 1),
    color: alpha(theme.palette.common.black, 1),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

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
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "30ch",
    },
  },
}));

const Header: React.FC<HeaderProps> = ({ handleSearch }) => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [userData, setUserData] = React.useState<{ data: { name: string, email: string } } | null>(null);

  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleLogOut = () => {
    localStorage.removeItem("userData")
    window.location.reload()
  };

  React.useEffect(() => {
    const userDataString = localStorage.getItem("userData");
    if (userDataString !== null) {
      const userData = JSON.parse(userDataString);
      setUserData(userData);
    }
  }, []);


  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        sx={{ background: "transparent", boxShadow: "none" }}
      >
        <Container maxWidth="lg">
          <Toolbar>
            <img src={Logo} alt="" />
            <Search>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search for any training you want "
                inputProps={{ "aria-label": "search" }}
                onChange={(e) => handleSearch(e.currentTarget.value)}
              />
            </Search>
            <Box sx={{ flexGrow: 1 }} />
            <Box sx={{ display: { xs: "none", md: "flex" } }}>
              <IconButton
                size="large"
                aria-label="show 17 new notifications"
                color="inherit"
              >
                <Badge badgeContent={17} color="error">
                  <NotificationsIcon sx={{ color: "#000" }} />
                </Badge>
              </IconButton>
              <IconButton
                size="large"
                edge="end"
                id="basic-button"
                aria-controls={open ? "basic-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
                onClick={handleClick}
                color="inherit"
              >
                <AccountCircle sx={{ color: "#000" }} />
              </IconButton>
              <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                  "aria-labelledby": "basic-button",
                }}
              >
                <MenuItem onClick={handleClose}><AccountCircle sx={{ marginRight: "10px" }} />{userData?.data.name}</MenuItem>
                <MenuItem onClick={handleClose}><EmailIcon sx={{ marginRight: "10px" }} /> {userData?.data.email}</MenuItem>
                <MenuItem onClick={handleLogOut}><LogoutIcon sx={{ marginRight: "10px" }} />Logout</MenuItem>
              </Menu>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
};

export default Header
