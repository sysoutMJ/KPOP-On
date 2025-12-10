import React from "react";
import "./MainArtist.css";
import NavigationBar from "./NavigationBar";
import { useNavigate } from "react-router-dom";
import ArtistsContents from "./ArtistsContents.json"

const ArtistCardImageStyle = (backgroundImage) => ({
  backgroundImage: `
    linear-gradient(
      to bottom,
      rgba(255,255,255,0),
      rgb(0,0,0)
    ), url(${backgroundImage})
  `,
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  backgroundPosition: "35% 35%",
  width: "950px",
  height: "650px",
  textAlign: "center",
  borderTopLeftRadius: "20px",
  borderTopRightRadius: "20px",
  margin: "0 auto",
  display: "block",
  color: "white",
  fontFamily: '"Work Sans", sans-serif',
  fontSize: "150%"
});

const ArtistCards = ({artistName, onClickButtonFunction, artistBackgroundImage}) => {
    return (
            <div id="main-artist-content">
              <div style={ArtistCardImageStyle(artistBackgroundImage)} onClick={onClickButtonFunction}>
                <div id="main-artist-group-name">{artistName}</div>
              </div>
            </div>
    );
  }

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

        
        <ArtistCards artistName={"LE SSERAFIM"}
        onClickButtonFunction={leSserafimClick}
        artistBackgroundImage="/images/lesserafim-main.webp"/>

        <ArtistCards artistName={"AESPA"} 
        onClickButtonFunction={aespaClick}
        artistBackgroundImage="/images/aespa-main.jfif"/>

        <ArtistCards artistName={"SEVENTEEN"}
        onClickButtonFunction={seventeenClick}
        artistBackgroundImage="/images/seventeen-main.jpg"/>

        <ArtistCards artistName={"TWICE"}
        onClickButtonFunction={twiceClick}
        artistBackgroundImage="/images/twice-main.jpg"/>

        <ArtistCards artistName={"TREASURE"}
        onClickButtonFunction={treasureClick}
        artistBackgroundImage="/images/treasure-main.jfif"/>
        
        </div>
      </div>
    </div>
  );
};
export default MainArtist;