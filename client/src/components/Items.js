import React, { useEffect, useState } from 'react';
import axios from "axios";
import ItemContainer from './ItemContainer';
import { Grid } from '@mui/material';

const Items = () => {

  const [items, setItems] = useState()

  const sendRequest = async () => {
    const response = await axios.get("http://localhost:5000/api/item")
                          .catch(err => console.log(err))
    const data = await response.data

    return data
  }

  useEffect(() => {
    sendRequest()
    .then((data) => setItems(data.items))
  }, [])

  console.log(items)

  return (
    /**<div>
      {items && items.map((item, index) => (
        <ItemContainer
          name={item.name}
          description={item.description}
          image={item.image}
          foundat={item.foundat}
          email={item.email}
          number={item.number}
          username={item.user.name}
        />
      ))}
    </div>*/
    <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
      {items && items.map((item, index) => (
        <Grid item xs={2} sm={4} md={4} key={index}>
          <ItemContainer
            id={item._id}
            name={item.name}
            description={item.description}
            image={item.image}
            foundat={item.foundat}
            email={item.email}
            number={item.number}
            username={item.user.name}
            isUser={localStorage.getItem('userId') === item.user._id}
          />
        </Grid>
      ))}
    </Grid>
  )
}

export default Items