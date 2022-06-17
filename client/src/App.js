import React from "react";
import { Routes, Route } from "react-router-dom";
import Auth from "./components/Auth";
import ItemContainer from "./components/ItemContainer";
import UserItems from "./components/UserItems";
import ItemDetails from "./components/ItemDetails";
import AddItem from "./components/AddItem";
import Header from "./components/Header";
import { useSelector } from "react-redux";

function App() {

  const isLoggedIn = useSelector(state => state.isLoggedIn)
  console.log(isLoggedIn)

  return (
    <React.Fragment>
      <header>
        <Header/>
      </header>
      <main>
        <Routes>
          <Route path="/auth" element={<Auth/>} />
          <Route path="/allItems" element={<ItemContainer/>} />
          <Route path="/foundItems" element={<UserItems/>} />
          <Route path="/foundItems/:id" element={<ItemDetails/>} />
          <Route path="/allItems/addItem" element={<AddItem/>} />
        </Routes>
      </main>
    </React.Fragment>
  );
}

export default App;
