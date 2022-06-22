import React, {useState} from 'react';
import {Box, Typography, TextField, Button} from "@mui/material";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import FileBase64 from 'react-file-base64';

const AddItem = () => {

  const navigate = useNavigate()

  const [inputs, setInputs] = useState({
    name: "", 
    description: "",
    foundat: "",
    email: "",
    number: "",
    image: ""
  })

  const handleChange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value
    }))
  }

  const sendRequest = async () => {
    const response = await axios.post('http://localhost:5000/api/item/additem', {
      name: inputs.name,
      description: inputs.description,
      image: inputs.image,
      foundat: inputs.foundat,
      email: inputs.email,
      number: inputs.number,
      user: localStorage.getItem('userId')
    }).catch(err => console.log(err))

    const data = await response.data

    return data
  }

  const handleSubmission = (e) => {
    e.preventDefault()
    console.log(inputs)
    sendRequest()
    .then(data => console.log(data))
    .then(() => navigate("/allItems"))
  }

  return (
    <div>
      <form onSubmit={handleSubmission}>
        <Box 
          width="50%"
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
            <Typography variant="h2" padding={2} textAlign="center">
              Add New Item
            </Typography>
            <TextField
              required
              fullWidth
              name="name"
              label="Item Name"
              type="text"
              margin='normal'
              value={inputs.name}
              onChange={handleChange}
            />
            <TextField
              required
              fullWidth
              multiline
              name="description"
              label="Description"
              type="text"
              margin='normal'
              maxRows={4}
              value={inputs.description}
              onChange={handleChange}
            />
            <TextField
              required
              fullWidth
              name="image"
              label="Image"
              type="text"
              margin='normal'
              value={inputs.image}
              onChange={handleChange}
            />
            <TextField
              required
              fullWidth
              name="foundat"
              label="Location where item was found"
              type="text"
              margin='normal'
              value={inputs.foundat}
              onChange={handleChange}
            />
            <TextField
              required
              fullWidth
              name="email"
              label="Contact Email"
              type="email"
              margin='normal'
              value={inputs.email}
              onChange={handleChange}
            />
            <TextField
              required
              fullWidth
              name="number"
              label="Contact Phone Number"
              type="text"
              margin='normal'
              inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}
              value={inputs.number}
              onChange={handleChange}
            />
            <FileBase64
              type="file"
              multiple={false}
              onDone={({ base64 }) => setInputs({ ...inputs, image: base64 })}
            />
            <Button
              type="submit"
              variant="contained"
              sx={{ marginTop: 3 }}
            >
              Add
            </Button>
        </Box>
      </form>
    </div>
  )
}

export default AddItem