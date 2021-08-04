import React, { useState, useEffect, useContext, useCallback } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import CartCount from "./cart-count";
import { AppContext } from "./context/app-context";

export default function ProductListing(props) {
  // const { cart, setCart } = props;
  const { cart, setCart } = useContext(AppContext);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const history = useHistory();

  useEffect(() => {
    async function getProducts() {
      console.log("start fetching data");
      var resp = await axios.get("https://fakestoreapi.com/products");
      console.log(resp.data);

      setProducts(resp.data);
      setLoading(false);
    }
    getProducts();
  }, []);

  const onProductClick = (productId) => {
    history.push("/details/" + productId);
  };

  const onAddToCart = (product) => {
    setCart([...cart, product]);
  };

  const onAddProductClick = () => {
    history.push("/addproduct");
  };

  const onEditClick = (product) => {
    history.push({ pathname: "/editproduct", state: JSON.stringify(product) });
  };

  const isInCart = (productId) => {
    let cartProducts = cart.filter((c) => {
      return c.id == productId;
    });
    return cartProducts.length > 0;
  };

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <button onClick={onAddProductClick}>Add Product</button>
          </div>
        </div>
        <div className="row">
          {loading && <h3>Loading...</h3>}
          {!loading &&
            products.map((p) => {
              return (
                <div key={"product-" + p.id} className="col-md-3">
                  <div className="card mb-4 shadow-sm">
                    <img
                      className="card-img-top"
                      src={p.image}
                      alt="Card image cap"
                      style={{ width: "200px", height: "200px" }}
                      onClick={() => {
                        onProductClick(p.id);
                      }}
                    />

                    <div className="card-body">
                      <p className="card-text">
                        {p.description.substring(0, 100)}
                      </p>
                      <div className="d-flex justify-content-between align-items-center">
                        <h3 className="text-success">${p.price}</h3>
                        {!isInCart(p.id) && (
                          <button
                            type="button"
                            className="btn btn-sm btn-warning"
                            onClick={() => onAddToCart(p)}
                          >
                            Add to Cart
                          </button>
                        )}
                        {isInCart(p.id) && (
                          <button
                            type="button"
                            className="btn btn-sm btn-danger"
                            // onClick={() => onAddToCart(p)}
                          >
                            Delete from Cart
                          </button>
                        )}
                        <button
                          type="button"
                          className="btn btn-sm btn-warning"
                          onClick={() => onEditClick(p)}
                        >
                          edit
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </>
  );
}
