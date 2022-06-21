import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ItemContainer from './ItemContainer';
import { Grid } from '@mui/material';

const UserItems = () => {

  const [userItems, setUserItems] = useState()
  const [userName, setUserName] = useState()

  const userId = localStorage.getItem('userId')

  const sendRequest = async () => {
    const response = await axios.get(`http://localhost:5000/api/item/user/${userId}`)
                                .catch(err => console.log(err))
    const data = await response.data
    setUserName(data.items.name)

    return data
  }

  useEffect(() => {
    sendRequest()
    .then((data) => setUserItems(data.items.items))
  }, [])

  console.log(userItems)

  return (
    <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
      {userItems && userItems.map((item, index) => (
        <Grid item xs={2} sm={4} md={4} key={index}>
          <ItemContainer
            id={item._id}
            name={item.name}
            description={item.description}
            image={item.image}
            foundat={item.foundat}
            email={item.email}
            number={item.number}
            username={userName}
            isUser={true}
          />
        </Grid>
      ))}
    </Grid>
  )
}

export default UserItems