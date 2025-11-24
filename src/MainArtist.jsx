import React from "react";
import "./MainArtist.css";
import NavigationBar from "./NavigationBar";
import { useNavigate } from "react-router-dom";

const MainArtist = () => {
  const navigate = useNavigate();

  const leSserafimClick = () => {
    navigate("LeSserafimPage");
  };
  const aespaClick = () => {
    navigate("AespaPage");
  };

  const seventeenClick = () => {
    navigate("SeventeenPage");
  };

  const twiceClick = () => {
    navigate("TwicePAge");
  };

  const treasureClick = () => {
    navigate("TreasurePage");
  };

  return (
    <div id="main-artist-main-div">
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0"
      ></meta>
      <NavigationBar />

      <div id="main-artist-background">
        <div id="main-artist-gallery">
          <div id="main-artist-content">
            <div id="main-artist-lesserafim" onClick={leSserafimClick}>
              <div id="main-artist-group-name-lesserafim">LE SSERAFIM</div>
            </div>
          </div>

          <div id="main-artist-content">
            <div id="main-artist-aespa" onClick={aespaClick}>
              <div id="main-artist-group-name-aespa">aespa</div>
            </div>
          </div>

          <div id="main-artist-content">
            <div id="main-artist-seventeen" onClick={seventeenClick}>
              <div id="main-artist-group-name-seventeen">SEVENTEEN</div>
            </div>
          </div>

          <div id="main-artist-content">
            <div id="main-artist-twice" onClick={twiceClick}>
              <div id="main-artist-group-name-twice">TWICE</div>
            </div>
          </div>

          <div id="main-artist-content">
            <div id="main-artist-treasure" onClick={treasureClick}>
              <div id="main-artist-group-name-treasure">TREASURE</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default MainArtist;
