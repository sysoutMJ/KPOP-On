import React from "react";
import "./NavigationBar.css";
import { Link } from "react-router-dom";
const NavigationBar = () => {
  return (
    <div id="navigation-bar-main-container">
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />

      <div id="navigation-bar-background">
        <input type="checkbox" id="navigation-bar-checkbox"></input>

        <label
          for="navigation-bar-checkbox"
          class="navigation-bar-check-button"
        >
          <b>≡</b>
        </label>

        <label id="navigation-bar-title">Kpop-On!</label>
        <ul id="navigation-bar-navigation-choices">
          <li>
            <Link to="/" id="navigation-bar-navigation">
              Artist
            </Link>
          </li>
          <li>
            <Link to="/aespa" id="navigation-bar-navigation">
              Shop
            </Link>
          </li>
          <li>
            <Link to="/Cart" id="navigation-bar-navigation">
              Cart
            </Link>
          </li>
          <li>
            <Link to="/AboutUs" id="navigation-bar-navigation">
              About us
            </Link>
          </li>
          <li>
            <Link to="/ContactUs" id="navigation-bar-navigation">
              Contact us
            </Link>{" "}
          </li>
        </ul>
      </div>
    </div>
  );
};
export default NavigationBar;
