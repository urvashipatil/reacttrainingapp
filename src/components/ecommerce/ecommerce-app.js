import React, { useState } from "react";
import Header from "./header";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import ProductDetails from "./product-details";
import ProductListing from "./product-listing";
import "./ecommerce.css";
import CartDetails from "./cart-details";
import AddProduct from "./add-product";
import PrivateRoute from "../private-route";
import CartCount from "./cart-count";

export default function EcommerceApp() {
  const [cart, setCart] = useState([]); //{ id: 1, title: "asasas", price: 1000 }
  return (
    <div className="container py-3">
      <main>
        <Router>
          <Header cart={cart}></Header>
          <Route
            path="/"
            exact
            // component={(props) => (
            //   <ProductListing
            //     cart={cart}
            //     setCart={setCart}
            //     {...props}
            //   ></ProductListing>
            // )}
          >
            <ProductListing cart={cart} setCart={setCart}></ProductListing>
          </Route>
          <Route
            path="/details/:id"
            // component={(props) => (
            //   <ProductDetails
            //     cart={cart}
            //     setCart={setCart}
            //     {...props}
            //   ></ProductDetails>
            // )}
          >
            <PrivateRoute>
              <ProductDetails cart={cart} setCart={setCart}></ProductDetails>
            </PrivateRoute>
          </Route>
          <Route path="/cart">
            <CartDetails cart={cart} setCart={setCart}></CartDetails>
          </Route>
          <PrivateRoute>
            <Route path="/addproduct">
              <AddProduct></AddProduct>
            </Route>
          </PrivateRoute>
          <Route path="/login">
            <CartCount></CartCount>
          </Route>
        </Router>
      </main>
    </div>
  );
}
