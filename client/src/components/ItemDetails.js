import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import {Box, Typography, TextField, Button} from "@mui/material";

const ItemDetails = () => {

    const [itemDetails, setItemDetails] = useState()
    const [inputs, setInputs] = useState({})

    const itemId = useParams().id
    const navigate = useNavigate()
    
    const handleChange = (e) => {
        setInputs((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value
        }))
    }

    const fetchItemDetails = async () => {
        const response = await axios.get(`http://localhost:5000/api/item/${itemId}`)
                                    .catch(err => console.log(err))
        const data = await response.data
        return data
    }

    useEffect(() => {
        fetchItemDetails()
        .then((data) => {
            setItemDetails(data.item)
            setInputs({
                name: data.item.name, 
                description: data.item.description,
                foundat: data.item.foundat,
                email: data.item.email,
                number: data.item.number,
                image: data.item.image
            })
        })
    }, [itemId])

    const sendRequest = async () => {
        const response = await axios.put(`http://localhost:5000/api/item/updateitem/${itemId}`, {
            name: inputs.name,
            description: inputs.description,
            foundat: inputs.foundat,
            email: inputs.email,
            number: inputs.number
        }).catch(err => console.log(err))

        const data = await response.data

        return data
    }

    const handleSubmission = (e) => {
        e.preventDefault()
        console.log(inputs)
        sendRequest()
        .then((data) => console.log(data))
        .then(() => navigate('/foundItems/'))
    }

    return (
        <div>
            {inputs && 
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
                        <Typography variant="h3" padding={2} textAlign="center">
                            Update Item Details
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
                            InputLabelProps={{shrink: true}}
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
                            InputLabelProps={{shrink: true}}
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
                            InputLabelProps={{shrink: true}}
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
                            InputLabelProps={{shrink: true}}
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
                            InputLabelProps={{shrink: true}}
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
                            InputLabelProps={{shrink: true}}
                        />
                        <Button
                            type="submit"
                            variant="contained"
                            sx={{ marginTop: 3 }}
                        >
                            Update
                        </Button>
                    </Box>
                </form>
            }
        </div>
    )
}

export default ItemDetails