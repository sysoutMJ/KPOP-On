import React from "react";
import { useState } from "react"
import { useLocation } from "react-router-dom";
import "./ArtistPage.css";
import NavigationBar from "./NavigationBar";

import ArtistsContents from "./ArtistsContents.json"

const AristHeadImageStyle = (groupBackgroundImage) => ({
  backgroundImage: `linear-gradient(
      to bottom,
      rgba(26, 26, 26, 0),
      rgb(26, 26, 26)
    ), url(${groupBackgroundImage})`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  backgroundPosition: "47% 27%",
  padding: "17%",
});

const MembersGalleryContainer = ({memberImage, memberName, memberAltValue}) => {
    return(
          <div id="members-content-card">
            <img
              src={memberImage}
              id="members-image"
              alt= {memberAltValue}
            />
            <p>{memberName}</p>
          </div>
    )
};

const AlbumSinglesCard = ({cardImagePath, cardImageAltValue}) => {
    return(
          <div id="album-content-card">
            <img
              src={cardImagePath}
              id="album-image"
              alt={cardImageAltValue}
            />
          </div>
    )
}

const ArtistPage = () => {

    const { state } = useLocation();

    const {artistName, groupBackgroundImage, members, albums, singles} = state || {};

    console.log(groupBackgroundImage)
    console.log(members)
    console.log(albums)
    console.log(singles)

    return(
        <div id="artist">
        <NavigationBar/>

            <div id="artist-head-image"
            style={AristHeadImageStyle(groupBackgroundImage)}
            ></div>

            <div id="artist-background">
                <div id="artist-title">{artistName}</div> {/* To be edit for props later*/}
                <div id="artist-member-sub-title">MEMBERS</div> {/* To be edit for props later*/}

                <div id="artist-members-gallery-container">

                    {Object.values(members).map((m) => (
                    <MembersGalleryContainer
                        key={m.name}
                        memberImage={m.imagePath}
                        memberName={m.name}
                        memberAltValue={m.altValue}
                    />
                    ))}
                </div>

                <div id="artist-album-sub-title">ALBUMS</div>
                
                <div id="artist-albums-gallery-container">

                    {Object.values(albums).map((m) => (
                        <AlbumSinglesCard
                            key={m.albumName}
                            cardImagePath={m.albumImagePath}
                            cardImageAltValue={m.altValue}
                        />
                    ))}
                </div>
                
                {singles ? (
                  <div>
                  <div id="artists-singles-sub-title">SINGLES</div>

                  <div id="artist-singles-gallery-container">
                    {Object.values(singles).map((m) => (
                        <AlbumSinglesCard
                            key={m.singleName}
                            cardImagePath={m.singleImagePath}
                            cardImageAltValue={m.singleAltValue}
                        />
                    ))}

                  </div>
                  </div>
                ) : (
                  <></>
                )}                  
                

            </div>
        </div>
    )
}

export default ArtistPage;
