import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, { useState, useEffect } from "react";
import MainArtist from "./MainArtist";
import ContactUs from "./Contactus";
import AboutUs from "./AboutUs";
// import Aespa from "./Aespa";
// import Lesserafim from "./Lesserafim";
// import Seventeen from "./Seventeen";
// import Twice from "./Twice";
// import Treasure from "./Treasure";
import Cart from "./Cart";
import Checkout from "./Checkout";
import Thankyou from "./Thankyou";
import Shop from "./Shop";

import Artist from "./Artist"


function App() {
  const [cart, setCart] = useState([]);

  // prev is previous state
  // [...prev, item] creates a new array that contains everything in prev, plus item at the end
  const addToCart = (item) => {
    setCart(prev => [...prev, item]);
  }

  const removeFromCart = (id) => {
    setCart(prev => prev.filter(i => i.id !== id));
  };

  // What it does:
  //    - If this item is already in the cart, don’t add it again
  //    - This prevents duplicate items to be added into cart

  // indexOf() checks if the exact same object reference exists in cart
  // const handleClick = (values) => {
  //   // values is object being passed based on my analyzation from the other .jsx
  //   // values is {id, title, price, img} 
  //   // object reference is the “address” of an object in memory.
  //   // values is not primitive.
  //   // If the exact same object reference exists. -1 here means the item does not exist.
  //   // then return. do nothing. Else, create another array and add it at the end. 

  //   // so in cart, indexof checks each. If the memory address of each of the checked 
  //   // values(the item) matches the memory addresses that exists in the cart. Do nothing.
  //   // Else, if the memory address of the passed values(the item) does not exist in the addreess
  //   // that are in the cart. Create new array and add it.
  //   if (cart.indexOf(values) !== -1) return;
  //   setCart([...cart, values]);
    
  // };
    const handleClick = (item) => {
      setCart(prev => {
        if (prev.find(i => i.id === item.id)) return prev;
        return [...prev, { ...item, amount: 1 }];
      });
    };


  // This function is for increasing and decreasing the item quantity
  // const handleChange = (values, d) => {
  //   // Finds the item index in the cart.
  //   const ind = cart.indexOf(values);

  //   const arr = cart;
  //   arr[ind].amount += d;

  //   if (arr[ind].amount === 0) arr[ind].amount = 1;
  //   setCart([...arr]);
  // };

  const handleChange = (item, delta) => {
    setCart(prev =>
      prev.map(cartItem =>
        cartItem.id === item.id
          ? { ...cartItem, amount: Math.max(1, cartItem.amount + delta) }
          : cartItem
      )
    );
  };
  useEffect(() => {
    console.log("Cart Refreshed");
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
          {/* <Route
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
          /> */}
          <Route
            path="/shop"
            element={<Shop  cart={cart} handleClick={handleClick}/>}
          />
          <Route
            path="/shop/:artistName"
            element={<Shop  cart={cart} handleClick={handleClick}/>}
          />
          {/* <Route
            path="/treasure"
            element={<Treasure cart={cart} handleClick={handleClick} />}
          /> */}
        </Routes>
      </Router>
      {/* <Aespa /> */}
    </>
  );
}

export default App;
