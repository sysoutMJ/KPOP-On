import React, { useEffect, useState } from "react";
import "./Cart.css";
import Navbar from "./Navbar";
// import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
const Cart = ({ cart, setCart, handleChange }) => {
  const [price, setPrice] = useState(0);

  const handleRemove = (id) => {
    const arr = cart.filter((values) => values.id !== id);
    setCart(arr);
    handlePrice();
  };

  const handlePrice = () => {
    let ans = 0;
    cart.map((values) => (ans += values.amount * values.price));
    setPrice(ans);
  };

  useEffect(() => {
    handlePrice();
  });

  return (
    <div id="cart-main-container">
      <Navbar size={cart.length} />
      <article>
        {cart.map((values) => (
          <div className="cart_box" key={values.id}>
            <div className="cart_img">
              <img src={values.img} alt="" />
              <p>{values.title}</p>
            </div>

            <div id="cart-value-buttons">
              <button onClick={() => handleChange(values, 1)}>&#43;</button>
              <button>{values.amount}</button>
              <button onClick={() => handleChange(values, -1)}>&#8722;</button>
            </div>

            <div id="cart-price">
              <span>{values.price}</span>
              <button onClick={() => handleRemove(values.id)}>Remove</button>
            </div>
          </div>
        ))}

        <div className="total">
          <span id="total-head">Total: </span>
          <span id="total-price"> $ {price.toFixed(2)}</span>
        </div>

        <div className="checkout">
          <Link to="/checkout">
            <button id="checkout-button">Check out</button>
          </Link>
        </div>
      </article>
    </div>
  );
};

export default Cart;
