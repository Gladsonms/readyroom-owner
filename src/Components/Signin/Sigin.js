import React from "react";
import LockIcon from "@mui/icons-material/Lock";
import {
  Grid,
  Paper,
  Avatar,
  TextField,
  Button,
  Typography,
  Link,
} from "@mui/material";

const Sigin = () => {
  const paperStyle = {
    padding: 30,
    height: "60vh",
    width: 280,
    margin: "20px auto ",
  };
  const avatarStyle = {
    backgroundColor: "green",
  };
  const siginBtn = {
    margin: "15px 0",
  };
  const signup = {
    margin: "10px 0",
  };
  return (
    <Grid>
      <Paper elevation={10} style={paperStyle}>
        <Grid align="center">
          <Avatar style={avatarStyle}>
            <LockIcon />
          </Avatar>
          <h2>Sigin</h2>
        </Grid>
        <TextField
          id="username"
          label="username"
          variant="standard"
          placeholder="Enter Username"
          fullWidth
          required
        />
        <TextField
          id="password"
          label="password"
          variant="standard"
          placeholder="Enter Password"
          type="password"
          fullWidth
          required
        />
        <Button variant="contained" style={siginBtn} fullWidth>
          Login
        </Button>
        <Typography style={signup}>
          Do you Dont Have an Account
          <Link href="#">Signup</Link>
        </Typography>
      </Paper>
    </Grid>
  );
};

export default Sigin;
