import React from "react";
import "./AespaPage.css";
import NavigationBar from "./NavigationBar";
const AespaPage = () => {
  return (
    <div id="aespa-main-div">
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0"
      ></meta>
      <NavigationBar />
      <div id="aespa-title-background-image" />

      <div id="aespa-artist-background">
        <div id="aespa-artist-title">aespa</div>
        <div id="aespa-artist-sub-title">MEMBERS</div>

        <div id="aespa-members-gallery">
          <div id="aespa-members-content">
            <img
              src={require("./images/karina.jpg")}
              id="aespa-members-image"
              alt="karina"
            />
            <p>Yoo Ji-min</p>
            <p>&#40;Karina&#41;</p>
          </div>

          <div id="aespa-members-content">
            <img
              src={require("./images/giselle.jpg")}
              id="aespa-members-image"
              alt="giselle"
            />
            <p>Aeri Uchinaga</p>
            <p>&#40;Giselle&#41;</p>
          </div>

          <div id="aespa-members-content">
            <img
              src={require("./images/winter.jpg")}
              id="aespa-members-image"
              alt="winter"
            />
            <p>Kim Min-jeong</p>
            <p>&#40;Winter&#41;</p>
          </div>

          <div id="aespa-members-content">
            <img
              src={require("./images/ningning.jpg")}
              id="aespa-members-image"
              alt="ningning"
            />
            <p>Ning Yi Zhuo</p>
            <p>&#40;Ningning&#41;</p>
          </div>
        </div>

        <div id="aespa-artist-sub-title">ALBUMS</div>
        <div id="aespa-album-gallery">
          <div id="aespa-album-content">
            <img
              src={require("./images/savage.png")}
              id="aespa-album-image"
              alt="savage"
            />
          </div>

          <div id="aespa-album-content">
            <img
              src={require("./images/girls.webp")}
              id="aespa-album-image"
              alt="girls"
            />
          </div>
        </div>

        <div id="aespa-artist-sub-title">SINGLE's</div>
        <div id="aespa-singles-gallery">
          <div id="aespa-album-content">
            <img
              src={require("./images/black-mamba.png")}
              id="aespa-album-image"
              alt="blackmamba"
            />
          </div>

          <div id="aespa-album-content">
            <img
              src={require("./images/forever.webp")}
              id="aespa-album-image"
              alt="forever"
            />
          </div>

          <div id="aespa-album-content">
            <img
              src={require("./images/next-level.jpg")}
              id="aespa-album-image"
              alt="next level"
            />
          </div>

          <div id="aespa-album-content">
            <img
              src={require("./images/dreams-come-true.jpg")}
              id="aespa-album-image"
              alt="dreamscometrue"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default AespaPage;
