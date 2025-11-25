import React from "react";
import "./TreasurePage.css";
import NavigationBar from "./NavigationBar";

import doyoung from "./images/doyoung.jpeg"
import choi from "./images/choi.jpeg"
import jeongwoo from "./images/jeongwoo.jpeg"
import yedam from "./images/yedam.jpeg"
import junghwan from "./images/junghwan.jpeg"
import asahi from "./images/asahi.jpeg"
import yoshi from "./images/yoshi.jpeg"
import jaehyuk from "./images/jaehyuk.jpeg"
import junkyu from "./images/junkyu.jpeg"
import jihoon from "./images/jihoon.jpeg"
import choiHyunSuk from "./images/choi hyun suk.jpeg"
import haruto from "./images/haruto.jpeg"
import goingCrazy from "./images/going-crazy.jpg"
import firstStep from "./images/first-step.jpg"
import firstStepChapterTwo from "./images/first-step-chapter-two.jpg"
import firstStepChapterThree from "./images/first-step-chapter-three.png"
import firstStepTreasureEffect from "./images/first-step-treasure-effect.png"
import secondStep from "./images/second-step.webp"
import hello from "./images/hello.jpg"
import beautiful from "./images/beautiful.png"

const TreasurePage = () => {
  return (
    <div id="treasure-main-div">
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0"
      ></meta>
      <NavigationBar />
      <div id="treasure-title-background-image" />

      <div id="treasure-artist-background">
        <div id="treasure-artist-title">TREASURE</div>
        <div id="treasure-artist-sub-title">MEMBERS</div>
        <div id="treasure-members-gallery">
          <div id="treasure-members-content">
            <img
              src= {doyoung}
              id="treasure-members-image"
              alt="doyoung"
            />
            <p>Kim Doyoung</p>
          </div>

          <div id="treasure-members-content">
            <img
              src= {choi}
              id="treasure-members-image"
              alt="choi"
            />
            <p>&#40;Former&#41; Takata Mashiho</p>
          </div>

          <div id="treasure-members-content">
            <img
              src= {jeongwoo}
              id="treasure-members-image"
              alt="jeongwoo"
            />
            <p>Park Jeongwoo</p>
          </div>

          <div id="treasure-members-content">
            <img
              src= {yedam}
              id="treasure-members-image"
              alt="yedam"
            />
            <p>Bang Yedam</p>
          </div>

          <div id="treasure-members-content">
            <img
              src= {junghwan}
              id="treasure-members-image"
              alt="junghwan"
            />
            <p>So Junghwan</p>
          </div>

          <div id="treasure-members-content">
            <img
              src= {asahi}
              id="treasure-members-image"
              alt="asahi"
            />
            <p>Hamada Asahi</p>
          </div>

          <div id="treasure-members-content">
            <img
              src= {yoshi}
              id="treasure-members-image"
              alt="yoshi"
            />
            <p>Kanemoto Yoshinori</p>
          </div>

          <div id="treasure-members-content">
            <img
              src= {jaehyuk}
              id="treasure-members-image"
              alt="jaehyuk"
            />
            <p>Yoon Jaehyuk</p>
          </div>

          <div id="treasure-members-content">
            <img
              src= {junkyu}
              id="treasure-members-image"
              alt="junkyu"
            />
            <p>Kim Jun Kyu</p>
          </div>

          <div id="treasure-members-content">
            <img
              src= {jihoon}
              id="treasure-members-image"
              alt="jihoon"
            />
            <p>Park Ji Hoon</p>
          </div>

          <div id="treasure-members-content">
            <img
              src= {choiHyunSuk}
              id="treasure-members-image"
              alt="choihyunsuk"
            />
            <p>Choi Hyun Suk</p>
          </div>

          <div id="treasure-members-content">
            <img
              src= {haruto}
              id="treasure-members-image"
              alt="haruto"
            />
            <p>Watanabe Haruto</p>
          </div>
        </div>
        <div id="treasure-artist-sub-title">ALBUMS</div>
        <div id="treasure-album-gallery">
          <div id="treasure-album-content">
            <img
              src= {goingCrazy}
              id="treasure-album-image"
              alt="goingcrazy"
            />
          </div>

          <div id="treasure-album-content">
            <img
              src= {firstStep}
              id="treasure-album-image"
              alt="firststep"
            />
          </div>

          <div id="treasure-album-content">
            <img
              src= {firstStepChapterTwo}
              id="treasure-album-image"
              alt="firststepchaptertwo"
            />
          </div>

          <div id="treasure-album-content">
            <img
              src= {firstStepChapterThree}
              id="treasure-album-image"
              alt="firststepchapterthree"
            />
          </div>

          <div id="treasure-album-content">
            <img
              src= {firstStepTreasureEffect}
              id="treasure-album-image"
              alt="firststeptreasureeffect"
            />
          </div>

          <div id="treasure-album-content">
            <img
              src= {secondStep}
              id="treasure-album-image"
              alt="secondstep"
            />
          </div>

          <div id="treasure-album-content">
            <img
              src= {hello}
              id="treasure-album-image"
              alt="hello"
            />
          </div>
        </div>
        <div id="treasure-artist-sub-title">SINGLE's</div>
        <div id="treasure-singles-gallery">
          <div id="treasure-album-content">
            <img
              src= {beautiful}
              id="treasure-album-image"
              alt="beautiful"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default TreasurePage;
