import React from "react";
import { AppBar, Badge, InputBase, Toolbar, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import MailIcon from "@mui/icons-material/Mail";
import LogoutIcon from "@mui/icons-material/Logout";
import { Search } from "@mui/icons-material";
import Avatar from "@mui/material/Avatar";
//const { classes } = this.props;
const usesStyles = makeStyles((theme) => ({
  logoLg: {
    //   display: "none",
    //   [theme.breakpoints.up("sm")]: {
    //     display: "block",
    //   },
  },
  logoSm: {
    // display: "block",
    // [theme.breakpoints.up("sm")]: {
    //   display: "none",
    // },
  },
  Search: {
    display: "flex",
    alignItems: "center",
    backgroundColor: "#0490d6",
    "&:hover": {
      backgroundColor: "#ffff",
    },
    borderRadius: "15px",
  },
  toolbar: {
    display: "flex",
    justifyContent: "space-between",
  },
  input: {
    color: "white ",
    marginLeft: "10px",
    //marginLeft:theme.spaceing(1)
  },
  icons: {
    display: "flex",
    alignItems: "center",
  },
  badge: {
    marginRight: "10px",
  },
}));

function stringAvatar(name) {
  return {
    sx: {
      bgcolor: stringToColor(name),
    },
    children: `${name.split(" ")[0][0]}${name.split(" ")[1][0]}`,
  };
}

function stringToColor(string) {
  let hash = 0;
  let i;

  /* eslint-disable no-bitwise */
  for (i = 0; i < string.length; i += 1) {
    hash = string.charCodeAt(i) + ((hash << 5) - hash);
  }

  let color = "#";

  for (i = 0; i < 3; i += 1) {
    const value = (hash >> (i * 8)) & 0xff;
    color += `00${value.toString(16)}`.substr(-2);
  }
  /* eslint-enable no-bitwise */

  return color;
}

const Navbar = () => {
  const classes = usesStyles();
  return (
    <AppBar>
      <Toolbar className={classes.toolbar}>
        <Typography variant="h6" className={classes.logoLg}>
          Ready Rooms
        </Typography>
        {/* <Typography variant="h6" className={classes.logoSm}>
          Ready Rooms
        </Typography> */}
        <div className={classes.Search}>
          <Search />
          <InputBase placeholder="Serach........" className={classes.input} />
        </div>
        <div className={classes.icons}>
          <Badge color="secondary">
            <h3 className={classes.badge}>Logout</h3>
            {/* <MailIcon color="action" className={classes.badge} /> */}
            {/* <LogoutIcon className={classes.badge} /> */}
            <Avatar {...stringAvatar("Kent Dodds")} className={classes.badge} />
          </Badge>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
