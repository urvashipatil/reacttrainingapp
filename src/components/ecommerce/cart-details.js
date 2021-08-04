import React, { useContext } from "react";
import { AppContext } from "./context/app-context";

export default function CartDetails() {
  const { cart } = useContext(AppContext);
  const getTotal = () => {
    //React.memo here
    let total = 0;
    cart.map((c) => {
      total += c.price;
    });
    return total;
  };
  return (
    <>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Title</th>
            <th scope="col">Price</th>
          </tr>
        </thead>
        <tbody>
          {cart.map((c) => {
            return (
              <tr>
                <th scope="row">{c.id}</th>
                <td>{c.title}</td>
                <td>${c.price}</td>
              </tr>
            );
          })}
          {cart.length > 0 && (
            <tr className="total-row">
              <td></td>
              <td>Total</td>
              <td>${getTotal()}</td>
            </tr>
          )}
          {cart.length == 0 && (
            <tr className="total-row">
              <td colSpan="3">No Items in the cart</td>
            </tr>
          )}
        </tbody>
      </table>
    </>
  );
}
