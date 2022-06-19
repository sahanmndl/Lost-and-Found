import React, { useEffect, useState } from 'react';
import axios from "axios";
import ItemContainer from './ItemContainer';

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
    <div>
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
    </div>
  )
}

export default Items