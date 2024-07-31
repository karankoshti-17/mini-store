import React from "react";
import Categories from "./pages/Categories";
import { BrowserRouter, Route, Router, Routes, Navigate } from "react-router-dom";
import Products from "./pages/Proudcts";
import SingleProduct from "./pages/SingleProduct";
import Login from "./pages/Login";
import Register from "./pages/Register";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
        <Route path="/" element={<Navigate to="/categories" replace />} />
          <Route path="/register" element={<Register />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/products/:id" element={<Products />} />
          <Route path="/products/:id/:product" element={<SingleProduct />} />
          <Route path="/" element={<Navigate to="/categories" replace />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
