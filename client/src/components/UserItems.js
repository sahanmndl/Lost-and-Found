import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ItemContainer from './ItemContainer';

const UserItems = () => {

  const [userItems, setUserItems] = useState()

  const userId = localStorage.getItem('userId')

  const sendRequest = async () => {
    const response = await axios.get(`http://localhost:5000/api/item/user/${userId}`)
                                .catch(err => console.log(err))
    const data = await response.data

    return data
  }

  useEffect(() => {
    sendRequest()
    .then((data) => setUserItems(data.items.items))
  }, [])

  console.log(userItems)

  return (
    <div>
      {userItems && userItems.map((item, index) => (
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

export default UserItems