import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import NavigationBar from "./NavigationBar";
import { faBars, faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import CustomizedBadges from "./StyledBadge";
import Badge from "@mui/material/Badge";
import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const Navbar = ({ size, setShow }) => {
  window.addEventListener("scroll", function () {
    const navbar = this.document.querySelector(".navbar");
    navbar.classList.toggle("activte", this.window.screenY > 100);
  });
  const [Mobile, setMobile] = useState(false);

  return (
    <div id="navbar-main-containter">
      <NavigationBar />
      <nav className="navbar">
        <ul
          className={Mobile ? "nav-link-mobile" : "nav-link"}
          onClick={() => setMobile(false)}
        >
          <Link to="/aespa" className="aespa">
            <li>Aespa</li>
          </Link>
          <Link to="/lesserafim" className="lesserafim">
            <li>Le Sserafim</li>
          </Link>
          <Link to="/seventeen" className="seventeen">
            <li>Seventeen</li>
          </Link>
          <Link to="/treasure" className="treasure">
            <li>Treasure</li>
          </Link>
          <Link to="/twice" className="twice">
            <li>Twice</li>
          </Link>
        </ul>

        <Link to="/Cart">
          <div className="right-card">
            {/* <button className="cart-btn" onClick={() => setShow(false)}>
              <BsBagCheck className="shop heIcon" /> Cart (
              <span className="cart-quantity">
                <span>{size}</span>
              </span>
              )
            </button> */}
            {/* <CustomizedBadges size={size} /> */}
            <IconButton size="large" aria-label="cart">
              <StyledBadge badgeContent={size} color="secondary">
                <ShoppingCartIcon />
              </StyledBadge>
            </IconButton>
          </div>
        </Link>

        <button className="mobile-menu-icon" onClick={() => setMobile(!Mobile)}>
          {Mobile ? (
            <FontAwesomeIcon icon={faAngleDown} />
          ) : (
            <FontAwesomeIcon icon={faBars} />
          )}
        </button>
      </nav>
    </div>
  );
};

export default Navbar;

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: -8,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: "0 8px",
  },
}));
