import React, { useState } from "react";
import "./Card.css";
import Navbar from "./Navbar";
import TwiceItems from "./TwiceItems";

const Twice = ({ cart, handleClick }) => {
  const [data, setData] = useState(TwiceItems);

  const filterRes = (categItem) => {
    const result = TwiceItems.filter((curDate) => {
      return curDate.category === categItem;
    });
    setData(result);
  };

  return (
    <>
      <div className="card-categ-container">
        <Navbar size={cart.length} />
        <div className="card-row">
          <div className="card-col">
            <h1 id="card-artist-title">Twice</h1>
          </div>
        </div>

        <div className="card-row">
          <div className="card-col">
            <button className="card-btn" onClick={() => setData(TwiceItems)}>
              All
            </button>
            <button className="card-btn" onClick={() => filterRes("Album")}>
              Album
            </button>
            <button className="card-btn" onClick={() => filterRes("Merch")}>
              Merch
            </button>
          </div>

          <div className="card-col">
            <div className="card-cards">
              {data.map((values) => {
                const { id, title, price, img } = values;
                return (
                  <div className="card-card" key={id}>
                    <div className="card-header">
                      <img src={img} alt="" />
                    </div>

                    <div className="card-body">
                      <h2 className="card-title">{title}</h2>
                      <span className="card-price">${price}</span>
                      <button
                        className="addtocart-btn"
                        onClick={() => handleClick(values)}
                      >
                        Add to Cart
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Twice;
