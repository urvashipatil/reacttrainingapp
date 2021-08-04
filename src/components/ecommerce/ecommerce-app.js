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
import EditProduct from "./edit-product";
import { AppContextProvider } from "./context/app-context";

export default function EcommerceApp() {
  // const [cart, setCart] = useState([]); //{ id: 1, title: "asasas", price: 1000 }
  return (
    <div className="container py-3">
      <main>
        <Router>
          <Route path="/login">
            <CartCount></CartCount>
          </Route>
          <AppContextProvider>
            <Header></Header>
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
              <ProductListing></ProductListing>
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
                <ProductDetails></ProductDetails>
              </PrivateRoute>
            </Route>
            <Route path="/cart">
              <CartDetails></CartDetails>
            </Route>
            <PrivateRoute>
              <Route path="/addproduct">
                <AddProduct></AddProduct>
              </Route>
            </PrivateRoute>
            <PrivateRoute>
              <Route path="/editproduct">
                <EditProduct></EditProduct>
              </Route>
            </PrivateRoute>
          </AppContextProvider>
        </Router>
      </main>
    </div>
  );
}
