import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Auth from "./components/Auth";
import Items from "./components/Items";
import UserItems from "./components/UserItems";
import ItemDetails from "./components/ItemDetails";
import AddItem from "./components/AddItem";
import Header from "./components/Header";
import { useDispatch, useSelector } from "react-redux";
import { authActions } from "./store";

function App() {

  const isLoggedIn = useSelector(state => state.isLoggedIn)
  const dispatch = useDispatch()
  console.log(isLoggedIn)

  useEffect(() => {
    if(localStorage.getItem('userId')) {
      dispatch(authActions.login())
    }
  }, [dispatch])

  return (
    <React.Fragment>
      <header>
        <Header/>
      </header>
      <main>
        <Routes>
          <Route path="/auth" element={<Auth/>} />
          <Route path="/allItems" element={<Items/>} />
          <Route path="/foundItems" element={<UserItems/>} />
          <Route path="/foundItems/:id" element={<ItemDetails/>} />
          <Route path="/allItems/addItem" element={<AddItem/>} />
        </Routes>
      </main>
    </React.Fragment>
  );
}

export default App;
