import React from "react";
import "./LeSserafimPage.css";
import NavigationBar from "./NavigationBar";

import kimGaram from "./images/kim-garam.jfif"
import sakura from "./images/sakura.jfif"
import eunchae from "./images/eunchae.jfif"
import chaewon from "./images/chaewon.jfif"
import kazuha from "./images/kazuha.jfif"
import yunjin from "./images/yunjin.jfif"
import antigragile from "./images/antifragile.png"
import fearless from "./images/fearless.png"

const LeSserafimPage = () => {
  return (
    <div id="lesserafim-main-div">
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0"
      ></meta>

      <NavigationBar />
      <div id="lesserafim-title-background-image" />

      <div id="lesserafim-artist-background">
        <div id="lesserafim-artist-title">LE SSERAFIM</div>
        <div id="lesserafim-artist-sub-title">MEMBERS</div>

        <div id="lesserafim-members-gallery">
          <div id="lesserafim-members-content">
            <img
              src={kimGaram}
              id="lesserafim-members-image"
              alt="garam"
            />
            <p>&#40;Former&#41; Kim Garam</p>
          </div>

          <div id="lesserafim-members-content">
            <img
              src={sakura}
              id="lesserafim-members-image"
              alt="sakura"
            />
            <p>Sakura Miyawaki</p>
          </div>

          <div id="lesserafim-members-content">
            <img
              src={eunchae}
              id="lesserafim-members-image"
              alt="eunchae"
            />
            <p>Hong Eun-chae</p>
          </div>

          <div id="lesserafim-members-content">
            <img
              src={chaewon}
              id="lesserafim-members-image"
              alt="chaewon"
            />
            <p>Kim Chaewon</p>
          </div>

          <div id="lesserafim-members-content">
            <img
              src={kazuha}
              id="lesserafim-members-image"
              alt="kazuha"
            />
            <p>Nakamura Kazuha</p>
          </div>

          <div id="lesserafim-members-content">
            <img
              src={yunjin}
              id="lesserafim-members-image"
              alt="yunjin"
            />
            <p>Huh Yun-jin</p>
          </div>
        </div>

        <div id="lesserafim-artist-sub-title">ALBUMS</div>
        <div id="lesserafim-album-gallery">
          <div id="lesserafim-album-content">
            <img
              src={antigragile}
              id="lesserafim-album-image"
              alt="antifragile"
            />
          </div>

          <div id="lesserafim-album-content">
            <img
              src={fearless}
              id="lesserafim-album-image"
              alt="fearless"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default LeSserafimPage;
