import React, { useState, useEffect } from "react";
import "./Card.css";
import Navbar from "./Navbar";
import { useParams } from "react-router-dom";

import Aespa from "./AespaShopItems.json";
import Lesserafim from "./LesserafimShopItems.json";
import Seventeen from "./SeventeenShopItems.json";
import Treasure from "./TreasureShopItems.json";
import Twice from "./TwiceShopItems.json";

const artistMap = {
    Aespa,
    Lesserafim,
    Seventeen,
    Treasure,
    Twice
};

const Shop = () => {
 
    const { artistName } = useParams();
    const artistItems = artistMap[artistName] || [];

    const [items, setItems] = useState(artistItems);

    const filterRes = (sideBarLinkName) => {
    setItems(
        artistItems.filter(
        (item) => item.category === sideBarLinkName
        )
    );
    };  

    useEffect(() => {
        setItems(artistItems);
    }, [artistName]);
    return (
        <>
        <div className="card-categ-container">
            <Navbar/>

            <div className="card-row">
            <div className="card-col">
                <h1 id="card-artist-title">{artistName}</h1>
            </div>
            </div>

            <div className="card-row">
            <div className="card-col">
                <button className="card-btn" onClick={() => setItems(artistItems)}>
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
                    {items.map((e) => {
                        return(
                            <div className="card-card" key={e.id}>
                                <div className="card-header">
                                    <img src={e.img} alt="" />
                                    </div>

                                    <div className="card-body">
                                    <h2 className="card-title">{e.title}</h2>
                                    <span className="card-price">${e.price}</span>
                                    <button
                                        className="addtocart-btn"
                                        onClick={() => handleClick(e)}
                                    >
                                        Add to Cart
                                    </button>
                                </div>
                            </div>
                    )
                    })}
                </div>
            </div>
            </div>
        </div>
    </>
  );
};

export default Shop;
