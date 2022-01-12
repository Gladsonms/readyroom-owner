import React, { useState } from "react";
import {
  Avatar,
  Button,
  Grid,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";
import AddBoxIcon from "@mui/icons-material/AddBox";

import { userRegister } from "../../axios/index";

const Signup = () => {
  const paperStyle = {
    padding: "30px 20px",
    margin: "20px auto",
    width: 270,
    height: "80vh",
  };
  const headerStyle = {
    margin: 0,
  };
  const avatarStyle = {
    backgroundColor: "green",
  };
  const signupBtn = {
    margin: "15px 0",
  };
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");
  const [email, setemail] = useState("");
  const [confirmPassword, setconfirmPassword] = useState("");
  const [phone, setphone] = useState("");
  const [place, setplace] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await userRegister({
        username,
        password,
        confirmPassword,
        email,
        phone,
        place,
      });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Grid>
      <Paper elevation={20} style={paperStyle}>
        <Grid align="center">
          <Avatar style={avatarStyle}>
            <AddBoxIcon />
          </Avatar>
          <h2 style={headerStyle}>Signup</h2>
          <Typography variant="caption">
            Please fill this form to create an account
          </Typography>
        </Grid>
        <form onSubmit={handleSubmit}>
          <TextField
            fullWidth
            label="Username"
            placeholder="Username"
            variant="standard"
            value={username}
            type="text"
            onChange={(e) => setusername(e.target.value)}
          ></TextField>
          <TextField
            fullWidth
            label="Email"
            placeholder="Email"
            variant="standard"
            value={email}
            type="email"
            onChange={(e) => setemail(e.target.value)}
          ></TextField>
          <TextField
            fullWidth
            label="Phone "
            placeholder="Phone"
            variant="standard"
            type="number"
            value={phone}
            onChange={(e) => setphone(e.target.value)}
          ></TextField>
          <TextField
            fullWidth
            label="Password"
            placeholder="Password"
            variant="standard"
            type="password"
            value={password}
            onChange={(e) => setpassword(e.target.value)}
          ></TextField>
          <TextField
            fullWidth
            label="Confirm Password"
            placeholder="Confirm Password"
            variant="standard"
            type="password"
            value={confirmPassword}
            onChange={(e) => setconfirmPassword(e.target.value)}
          ></TextField>
          <TextField
            fullWidth
            label="Place"
            placeholder="Place"
            variant="standard"
            type="text"
            value={place}
            onChange={(e) => setplace(e.target.value)}
          ></TextField>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            style={signupBtn}
          >
            Sign Up
          </Button>
        </form>
        <Typography variant="caption">
          Already have an account?
          <Link to="/signin">Signin</Link>
        </Typography>
      </Paper>
    </Grid>
  );
};

export default Signup;
