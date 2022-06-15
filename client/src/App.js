import React from "react";
import { Routes, Route } from "react-router-dom";
import Auth from "./components/Auth";
import ItemContainer from "./components/ItemContainer";
import UserItems from "./components/UserItems";
import ItemDetails from "./components/ItemDetails";
import AddItem from "./components/AddItem";
import Header from "./components/Header";

function App() {
  return (
    <React.Fragment>
      <header>
        <Header/>
      </header>
      <main>
        <Routes>
          <Route path="/auth" element={<Auth/>} />
          <Route path="/items" element={<ItemContainer/>} />
          <Route path="/myItems" element={<UserItems/>} />
          <Route path="/myItems/:id" element={<ItemDetails/>} />
          <Route path="/items/addItem" element={<AddItem/>} />
        </Routes>
      </main>
    </React.Fragment>
  );
}

export default App;
