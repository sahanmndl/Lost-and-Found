import React, { useState } from 'react';
import {Box, Button, Typography, TextField} from "@mui/material";
import axios from 'axios';
import {useDispatch} from "react-redux";
import { authActions } from '../store';
import {useNavigate} from "react-router-dom";

const Auth = () => {
  
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [isSignup, setIsSignup] = useState(false)
  const [inputs, setInputs] = useState({
    email: "", 
    password: "",
    name: "",
    number: ""
  })

  const sendRequest = async (type="signin") => {
    const response = await axios.post(`http://localhost:5000/api/user/${type}`, {
      email: inputs.email,
      password: inputs.password,
      name: inputs.name,
      number: inputs.number
    }).catch(err => console.log(err))

    const data = await response.data
    console.log(data)

    return data
  }

  const handleInputChange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value
    }))
  }

  const handleSubmission = (e) => {
    e.preventDefault()
    console.log(inputs)

    if(isSignup) {
      sendRequest("signup")
      .then((data) => localStorage.setItem("userId", data.user._id))
      .then(() => dispatch(authActions.login()))
      .then(() => navigate("/allItems"))
      .then(data => console.log(data))
    } else {
      sendRequest()
      .then((data) => localStorage.setItem("userId", data.user._id))
      .then(() => dispatch(authActions.login()))
      .then(() => navigate("/allItems"))
      .then(data => console.log(data))
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmission}>
        <Box 
          maxWidth={450}
          display="flex"
          flexDirection={"column"}
          alignItems="center"
          justifyContent={"center"}
          boxShadow="10px 10px 20px #ccc"
          padding={5}
          margin="auto"
          marginTop={4}
          marginBottom={4}
          borderRadius={4}
        >
            <Typography variant="h2" padding={3} textAlign="center">
              {isSignup ? "Sign Up" : "Sign In"}
            </Typography>
            <TextField
              required
              fullWidth
              name="email"
              label="Email"
              type="email"
              margin='normal'
              value={inputs.email}
              onChange={handleInputChange}
            />
            <TextField
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              margin='normal'
              value={inputs.password}
              onChange={handleInputChange}
            />
            {isSignup && (
              <>
                <TextField
                required
                fullWidth
                name="name"
                label="Name"
                type="text"
                margin='normal'
                value={inputs.name}
                onChange={handleInputChange}
              />
              <TextField
                required
                fullWidth
                name="number"
                label="Phone Number"
                type="text"
                margin='normal'
                inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}
                value={inputs.number}
                onChange={handleInputChange}
              />
              </>
            )}{" "}
            <Button
              type="submit"
              variant="contained"
              sx={{ marginTop: 3, width: 450 }}
            >
              {isSignup ? "Register" : "Login"}
            </Button>
            <Button
              onClick={() => setIsSignup(!isSignup)}
              sx={{ marginTop: 3, width: 450 }}
            >
              {isSignup ? "Already have an account?" : "Create a new account!"}
            </Button>
          </Box>
      </form>
    </div>
  )
}

export default Auth