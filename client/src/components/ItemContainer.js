import React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import {Typography, Box, IconButton, Avatar} from '@mui/material';
import { red } from '@mui/material/colors';
import DeleteIcon from '@mui/icons-material/DeleteOutline';
import EditIcon from '@mui/icons-material/Edit';
import CallIcon from '@mui/icons-material/Call';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import LocationOnIcon from '@mui/icons-material/LocationOn';

const ItemContainer = ({name, description, image, foundat, email, number, username}) => {
  return (
    <div>
      {" "}
      <Card sx={{ 
        maxWidth: 400,
        margin: "auto",
        boxShadow: "5px 5px 10px #ccc",
        ":hover": {
          boxShadow: "10px 10px 20px #ccc",
          cursor: "pointer"
        },
        borderRadius: 4,
        mt: 2,
        padding: 2
      }}>
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: red[500] }} aria-label="profile-logo">
              {username ? username.charAt(0) : ""}
            </Avatar>
          }
          title={username}
          subheader="Date"
        />
        <CardMedia
          component="img"
          height="200"
          image={image}
          alt="item-img"
        />
        <CardContent>
          <Typography variant="body1" color="text.primary">
            {name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
        </CardContent>
        <Box display="flex" sx={{ alignItems: "center" }}>
            <IconButton>
              <LocationOnIcon />
            </IconButton>
            <Typography variant="body2" color="text.secondary">
              {foundat}
            </Typography>
        </Box>
        <Box display="flex" sx={{ alignItems: "center" }}>
            <IconButton>
              <CallIcon />
            </IconButton>
            <Typography variant="body2" color="text.secondary">
              {number}
            </Typography>
        </Box>
        <Box display="flex" sx={{ alignItems: "center" }}>
            <IconButton>
              <AlternateEmailIcon />
            </IconButton>
            <Typography variant="body2" color="text.secondary">
              {email}
            </Typography>
        </Box>
        <Box display="flex">
            <IconButton sx={{ marginLeft: "auto" }}>
              <EditIcon color="warning" />
            </IconButton>
            <IconButton>
              <DeleteIcon color="error" />
            </IconButton>
        </Box>
      </Card>
    </div>
  )
}

export default ItemContainer