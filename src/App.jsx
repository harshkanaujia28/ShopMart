import React from "react";
import "./App.css";
import Navbar from "./Component/Navbar/Navbar";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Shop from "./Pages/Shop";
import Shopcategory from "./Pages/ShopCategory";
import Footer from "./Component/Footer/Footer";
import mem_banner from "../src/Assets/banner_mens.png";
import women_banner from "../src/Assets/banner_women.png";
import kids_banner from "../src/Assets/banner_kids.png";
import Loginsignup from "./pages/Loginsignup";
import Product from "./Pages/Product"
import Cart from "./Pages/Cart";
export default function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
        <Navbar/>
          <Shop />
        </>
      ),
    },
    {
      path: "/Men",
      element: (
        <>
          <Navbar />
          <Shopcategory banner={mem_banner} category="men" />
          <Footer />
        </>
      ),
    },
    {
      path: "/womens",
      element: (
        <>
          <Navbar />
          <Shopcategory banner={women_banner} category="women" />
          <Footer />
        </>
      ),
    },
    {
      path: "/kids",
      element: (
        <>
          <Navbar />

          <Shopcategory banner={kids_banner} category="kid" />
          <Footer />
        </>
      ),
    },
  
    {
      path: "/Loginsignup",
      element: (
        <>
          <Navbar />
          <Loginsignup />
          <Footer />
        </>
      ),
    },
    {
      path: "/product",
      element: (
        <>
          <Navbar />
          <Product />
          <Footer />
        </>
      ),
    },
    {
      path: "/product/:productId",
      element: (
        <>
          <Navbar />
          {/* <Breadcrums /> */}
          <Product />

          <Footer />
        </>
      ),
    },
    {
      path: "/Cart",
      element: (
        <>
          <Navbar />
       <Cart />

          <Footer />
        </>
      ),
    },
  ]);

  return (
    <>
  
      <RouterProvider router={router} />
    </>
  );
}
