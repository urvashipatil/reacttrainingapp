import React, { useEffect, useState } from "react";
import axios from "axios";

export default function PostList() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getProducts() {
      console.log("start fetching data");
      var resp = await axios.get("https://fakestoreapi.com/products");
      // console.log("response", resp);
      console.log(resp.data);

      // var resp = await fetch("https://fakestoreapi.com/products");
      // var data = await resp.json();
      // console.log("response", data);
      //setProducts(data);

      setProducts(resp.data);
      setLoading(false);
    }
    getProducts();
  }, []);

  return (
    <>
      {loading && (
        <div className="loading" data-testid="loading">
          loading...
        </div>
      )}
      <div className="row pb-3">
        {products.map((p) => {
          return (
            <div key={`p-${p.id}`} className="col-sm-3">
              <div
                data-testid={p.id}
                className="card w-100  "
                style={{ height: "100%" }}
              >
                <img
                  className="card-img-top"
                  src={p.image}
                  alt="Card image cap"
                  style={{ width: "100px", height: "100px" }}
                />
                <div className="card-body">
                  <h5 className="card-title">{p.title.substring(0, 50)}</h5>
                  <p className="card-text">{p.description.substring(0, 50)}</p>
                  {/* <p className="card-text">
                  <small className="text-muted">Last updated 3 mins ago</small>
                </p> */}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
