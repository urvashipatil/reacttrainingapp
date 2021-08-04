import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { AppContext } from "./context/app-context";

export default function Header() {
  // console.log("header");
  const { cart } = useContext(AppContext);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const onSearchClick = () => {
    //https://fakestoreapi.com/products/categories'
  };

  useEffect(() => {
    async function getAllcategories() {
      var resp = await axios.get(
        "https://fakestoreapi.com/products/categories"
      );
      console.log(resp.data);
      setCategories(resp.data);
    }
    getAllcategories();
  }, []);
  const onSelectCategory = (e) => {
    setSelectedCategory(e.target.value);
  };
  // useEffect(()=>{
  //   async function getProductsBycategories() {
  //     var resp = await axios.get(
  //       "https://fakestoreapi.com/products/categories"
  //     );
  //     console.log(resp.data);
  //     setCategories(resp.data);
  //   }
  //   getProductsBycategories();
  // },[selectedCategory])
  return (
    <header>
      <div className="d-flex flex-column flex-md-row align-items-center pb-3 mb-4 border-bottom">
        <Link
          to="/"
          className="d-flex align-items-center text-dark text-decoration-none"
        >
          <span className="fs-4">Medly Ecommerce</span>
        </Link>
        <div className="ml-auto">
          {/* <input
            style={{ width: "100vh" }}
            type="text"
            className="form-control"
            placeholder="Search"
            onClick={onSearchClick}
          ></input> */}
          <select
            value={selectedCategory}
            onChange={onSelectCategory}
            className="form-control"
            style={{ width: "100vh" }}
          >
            <option value="">Select Category</option>
            {categories.map((c) => {
              return (
                <option key={c} value={c}>
                  {c}
                </option>
              );
            })}
          </select>
        </div>

        <nav className="d-inline-flex mt-2 mt-md-0 ms-md-auto">
          <a className="me-3 py-2 text-dark text-decoration-none" href="#">
            Features
          </a>
          <a className="me-3 py-2 text-dark text-decoration-none" href="#">
            Enterprise
          </a>
          <a className="me-3 py-2 text-dark text-decoration-none" href="#">
            Support
          </a>
          <Link to="/cart" className="py-2 text-dark text-decoration-none">
            Cart
            {/* {cart.length > 0 && ( */}
            <span className="badge bg-warning">{cart.length}</span>
            {/* )} */}
          </Link>
        </nav>
      </div>

      {/* <div className="pricing-header p-3 pb-md-4 mx-auto text-center">
        <h1 className="display-4 fw-normal">Pricing</h1>
        <p className="fs-5 text-muted">
          Quickly build an effective pricing table for your potential customers
          with this Bootstrap example. It’s built with default Bootstrap
          components and utilities with little customization.
        </p>
      </div> */}
    </header>
  );
}
