import React from "react";
import Categories from "./pages/Categories";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import Products from "./pages/Proudcts";
import SingleProduct from "./pages/SingleProduct";
import Login from "./pages/Login";
import Register from "./pages/Register";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/products/:id" element={<Products />} />
          <Route path="/products/:id/:product" element={<SingleProduct />} />
          <Route path="*" element={<h2>You're Lost</h2>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
