import React from "react";
import "./MainArtist.css";
import NavigationBar from "./NavigationBar";
import { useNavigate } from "react-router-dom";
import ArtistsContents from "./ArtistsContents.json"

const MainArtist = () => {
  const navigate = useNavigate();

  const leSserafimClick = () => {
      navigate("Artist", {
        state:{
          artistName: "LESSERAFIM",
          groupBackgroundImage: ArtistsContents.Lesserafim.backgroundImagePath,
          members: ArtistsContents.Lesserafim.members,
          albums: ArtistsContents.Lesserafim.albums,
        }
      }
    );
  };
  const aespaClick = () => {
      navigate("Artist", {
        state:{
          artistName: "AESPA",
          groupBackgroundImage: ArtistsContents.Aespa.backgroundImagePath,
          members: ArtistsContents.Aespa.members,
          albums: ArtistsContents.Aespa.albums,
          singles: ArtistsContents.Aespa.singles
        }
      }
    );
  };

  const seventeenClick = () => {
      navigate("Artist", {
        state:{
          artistName: "SEVENTEEN",
          groupBackgroundImage: ArtistsContents.Seventeen.backgroundImagePath,
          members: ArtistsContents.Seventeen.members,
          albums: ArtistsContents.Seventeen.albums,
          singles: ArtistsContents.Seventeen.singles
        }
      }
    );
  };

  const twiceClick = () => {
      navigate("Artist", {
        state:{
          artistName: "TWICE",
          groupBackgroundImage: ArtistsContents.Twice.backgroundImagePath,
          members: ArtistsContents.Twice.members,
          albums: ArtistsContents.Twice.albums,
          singles: ArtistsContents.Twice.singles
        }
      }
    );
  };

  const treasureClick = () => {
      navigate("Artist", {
        state:{
          artistName: "TREASURE",
          groupBackgroundImage: ArtistsContents.Treasure.backgroundImagePath,
          members: ArtistsContents.Treasure.members,
          albums: ArtistsContents.Treasure.albums,
          singles: ArtistsContents.Treasure.singles
        }
      }
    );
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
