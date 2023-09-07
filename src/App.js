import React, { lazy, Suspense } from "react";
import { Routes, Route, Link, Navigate } from "react-router-dom";
import "./App.css";
import { useSelector } from "react-redux";

const Cart = lazy(() => import("./pages/card/Card"));
const Productdetails = lazy(() => import("./pages/Detail/Productdetail"));
const Favorite = lazy(() => import("./pages/Favorite/Favorite"));
const Navbar = lazy(() => import("./component/Navbar/Navbar"));
const Login = lazy(() => import("./component/Login/Login"));
const Product = lazy(() => import("./pages/Products/Product"));
const Footer = lazy(() => import("./component/Footer/Footer"));
function App() {
  const state = useSelector((state) => state);

  return (
    <div className="App">
      <Suspense fallback={<div>Loading...</div>}>
      {state?.isAuthenticaticon ? (
        <>
          <Navbar />

          <Routes>
            <Route path="/" element={<Product />} />
            <Route path="/Navbar" element={<Navbar />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/favorite" element={<Favorite />} />
            <Route path="/products/:id" element={<Productdetails />} />
          </Routes>
          <Footer />
        </>
      ) : (
        <Routes>
          <Route path="login" element={<Login></Login>}></Route>
          <Route path="*" element={<Navigate to={"login"}></Navigate>}></Route>
        </Routes>
      )}
      </Suspense>
    </div>
  );
}

export default App;
