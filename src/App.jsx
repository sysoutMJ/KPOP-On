import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, { useState, useEffect } from "react";
import MainArtist from "./MainArtist";
import ContactUs from "./Contactus";
import AboutUs from "./AboutUs";
import Aespa from "./Aespa";
import Lesserafim from "./Lesserafim";
import Seventeen from "./Seventeen";
import Twice from "./Twice";
import Treasure from "./Treasure";
import Cart from "./Cart";
import Checkout from "./Checkout";
import Thankyou from "./Thankyou";

import Artist from "./Artist"
function App() {
  const [cart, setCart] = useState([]);

  const handleClick = (values) => {
    if (cart.indexOf(values) !== -1) return;
    setCart([...cart, values]);
  };

  const handleChange = (values, d) => {
    const ind = cart.indexOf(values);
    const arr = cart;
    arr[ind].amount += d;

    if (arr[ind].amount === 0) arr[ind].amount = 1;
    setCart([...arr]);
  };

  useEffect(() => {
    console.log("cart change");
  }, [cart]);

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<MainArtist />} />
          <Route path="/Artist" element={<Artist />} />
          <Route
            path="/Cart"
            element={
              <Cart cart={cart} setCart={setCart} handleChange={handleChange} />
            }
          />
          <Route path="/ContactUs" element={<ContactUs />} />
          <Route path="/AboutUs" element={<AboutUs />} />
          <Route path="/checkout" element={<Checkout cart={cart} />} />
          <Route path="/thankyou" element={<Thankyou />} />
          {/* for shops */}
          <Route
            path="/lesserafim"
            element={<Lesserafim cart={cart} handleClick={handleClick} />}
          />
          <Route
            path="/aespa"
            element={<Aespa cart={cart} handleClick={handleClick} />}
          />
          <Route
            path="/seventeen"
            element={<Seventeen cart={cart} handleClick={handleClick} />}
          />
          <Route
            path="/twice"
            element={<Twice cart={cart} handleClick={handleClick} />}
          />
          <Route
            path="/treasure"
            element={<Treasure cart={cart} handleClick={handleClick} />}
          />
        </Routes>
      </Router>
      {/* <Aespa /> */}
    </>
  );
}

export default App;
