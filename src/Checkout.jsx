import React from "react";
import "./Checkout.css";
import Navbar from "./Navbar";
import { useNavigate } from "react-router-dom";

const Checkout = (cart, setCart, handleRemove) => {
  const navigate = useNavigate();

  const thankyouPage = () => {
    navigate("/thankyou");
    resetCart();
  };

  const resetCart = () => {
    setCart([]);
  };

  return (
    <>
      <div id="checkout-main-container">
        <Navbar size={cart.length} />
        <div className="check-out-container">
          <form id="check-out-form">
            <header id="check-out-header">Basic Information</header>
            <div className="check-out-ui">
              <div className="check-out-field">
                <input
                  type="text"
                  className="check-out-input"
                  name="firstname"
                />
                <label id="check-out-label">First Name</label>
              </div>

              <div className="check-out-field">
                <input
                  type="text"
                  className="check-out-input"
                  name="lastname"
                />
                <label id="check-out-label">Last Name</label>
              </div>

              <div className="check-out-field">
                <input
                  type="text"
                  className="check-out-input"
                  name="phonenumber"
                />
                <label id="check-out-label">Phone Number</label>
              </div>

              <div className="check-out-field">
                <input
                  type="text"
                  className="check-out-input"
                  name="emailAdd"
                />
                <label id="check-out-label">Email Address</label>
              </div>

              <div className="check-out-field-3">
                <input type="text" className="check-out-input-3" name="Add" />
                <label id="check-out-label">Address</label>
              </div>

              <div className="check-out-field-2">
                <input type="text" className="check-out-input" name="city" />
                <label id="check-out-label">City</label>
              </div>

              <div className="check-out-field-2">
                <input type="text" className="check-out-input" name="state" />
                <label id="check-out-label">State</label>
              </div>

              <div className="check-out-field-2">
                <input type="text" className="check-out-input" name="zipcode" />
                <label id="check-out-label">Zip Code</label>
              </div>

              <div className="check-out-field">
                <input
                  className="checkout-btn"
                  type="submit"
                  value="Place Order"
                  onClick={thankyouPage}
                />
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Checkout;
