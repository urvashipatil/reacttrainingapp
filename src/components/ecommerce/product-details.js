import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { AppContext } from "./context/app-context";

export default function ProductDetails(props) {
  // console.log(props);
  const { id: productId } = useParams();

  // const productId = 1;
  // props.match.params.id;
  const { cart, setCart } = useContext(AppContext);
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    async function getProduct() {
      var resp = await axios.get(
        "https://fakestoreapi.com/products/" + productId
      );
      // console.log("response", resp);
      console.log(resp.data);
      setProduct(resp.data);
      setLoading(false);
    }
    getProduct();
  }, [productId]);
  const onAddToCart = (product) => {
    setCart([...cart, product]);
  };

  return (
    <div className="row">
      {loading && <h3>Loading...</h3>}
      {!loading && (
        <>
          <div className="col-sm">
            <img
              src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
              style={{ width: "300px", height: "300px" }}
            ></img>
          </div>
          <div className="col-sm-9">
            <h3>{product.title}</h3>
            <p className="lead">{product.description}</p>
            <span className="badge bg-secondary">{product.category}</span>
            <div>Start Rating component</div>
            <h3 className="text-success">${product.price}</h3>
            <button
              type="button"
              className="btn btn-sm btn-warning"
              onClick={() => onAddToCart(product)}
            >
              Add to Cart
            </button>
            <span className="ml-3">
              <Link to="/">Back</Link>
            </span>
          </div>
        </>
      )}
    </div>
  );
}
