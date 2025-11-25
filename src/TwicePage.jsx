import React from "react";
import "./TwicePage.css";
import NavigationBar from "./NavigationBar";

import chaeyoung from "./images/twice_formula_of_love_concept_chaeyoung_4.jpg"
import dahyun from "./images/twice_formula_of_love_concept_dahyun_4.jpg"
import jeongyeon from "./images/twice_formula_of_love_concept_jeongyeon_4.jpg"
import jihyo from "./images/twice_formula_of_love_concept_jihyo_4.jpg"
import mina from "./images/twice_formula_of_love_concept_mina_4.jpg"
import momo from "./images/twice_formula_of_love_concept_momo_4.jpg"
import nayeon from "./images/twice_formula_of_love_concept_nayeon_4.jpg"
import sana from "./images/twice_formula_of_love_concept_sana_4.jpg"
import tzuyu from "./images/twice_formula_of_love_concept_tzuyu_4.jpg"
import twiceTheStoryBegins from"./images/twice-the-story-begins.webp"
import pageTwo from "./images/Page-Two.jpg"
import twiceCoasterLaneOne from "./images/TWICEcoaster-Lane-1.jpg"
import twiceCoasterLaneTwo from "./images/TWICEcoaster-Lane-2.jpg"
import twiceWhasTwice from "./images/TWICE_Whas_TWICE.webp"
import signal from "./images/Signal.jpg"
import twicetagram from "./images/twicetagram.jpg"
import merryHappy from "./images/Merry-Happy.jpg"
import whatIsLove from "./images/What-is-Love.jpg"
import summerNights from "./images/Summer-Nights.jpg"
import yesOrYes from "./images/YES-or-YES.jpg"
import theYearOfYes from "./images/The-Year-of-Yes.jpg"
import fancyYou from "./images/Fancy-You.jpg"
import feelSpecial from "./images/Feel-Special.jpg"
import moreAndMore from "./images/More-and-More.jpeg"
import eyesWideOpen from "./images/Eyes-Wide-Open.webp"
import tasteOfLove from "./images/Taste-Of-Love.jpg"
import formulaOfLove from "./images/Formula-of-love-Twice-Album.jpg"
import betweenOneAndTwo from "./images/Between-1-and-2.png"
import moreAndMoreEnglish from "./images/More-and-More-English.jpg"
import iCantStopMe from "./images/I-Cant_Stop-Me-English.png"
import cryForMe from "./images/Cry_for_Me.png"
import theFeels from "./images/The-Feels.jpg"

const TwicePage = () => {
  return (
    <div id="twice-main-div">
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0"
      ></meta>
      <NavigationBar />
      <div id="twice-title-background-image" />

      <div id="twice-artist-background">
        <div id="twice-artist-title">TWICE</div>
        <div id="twice-artist-sub-title">MEMBERS</div>
        <div id="twice-members-gallery">
          <div id="twice-members-content">
            <img
              src={chaeyoung}
              id="twice-members-image"
              alt="chaeyoung"
            />
            <p>Son Chae-young</p>
          </div>
          <div id="twice-members-content">
            <img
              src={dahyun}
              id="twice-members-image"
              alt="dahyun"
            />
            <p>Kim Da Hyun</p>
          </div>

          <div id="twice-members-content">
            <img
              src={jeongyeon}
              id="twice-members-image"
              alt="jeongyeon"
            />
            <p>Yoo Jeong-yeon</p>
          </div>

          <div id="twice-members-content">
            <img
              src={jihyo}
              id="twice-members-image"
              alt="jihyo"
            />
            <p>Park Jihyo</p>
          </div>

          <div id="twice-members-content">
            <img
              src={mina}
              id="twice-members-image"
              alt="mina"
            />
            <p>Mina Miyoi</p>
          </div>

          <div id="twice-members-content">
            <img
              src={momo}
              id="twice-members-image"
              alt="momo"
            />
            <p>Momo Hirai</p>
          </div>

          <div id="twice-members-content">
            <img
              src={nayeon}
              id="twice-members-image"
              alt="nayeon"
            />
            <p>Im Na-yeon</p>
          </div>

          <div id="twice-members-content">
            <img
              src={sana}
              id="twice-members-image"
              alt="sana"
            />
            <p>Sana Minatozaki</p>
          </div>

          <div id="twice-members-content">
            <img
              src={tzuyu}
              id="twice-members-image"
              alt="tzuyu"
            />
            <p>Chou Tzu-yu</p>
          </div>
        </div>

        <div id="twice-artist-sub-title">ALBUMS</div>
        <div id="twice-album-gallery">
          <div id="twice-album-content">
            <img
              src={twiceTheStoryBegins}
              id="twice-album-image"
              alt="thestorybegins"
            />
          </div>
          <div id="twice-album-content">
            <img
              src={pageTwo}
              id="twice-album-image"
              alt="pagetwo"
            />
          </div>
          <div id="twice-album-content">
            <img
              src={twiceCoasterLaneOne}
              id="twice-album-image"
              alt="coasterlane1"
            />
          </div>
          <div id="twice-album-content">
            <img
              src={twiceCoasterLaneTwo}
              id="twice-album-image"
              alt="coasterlane2"
            />
          </div>
          <div id="twice-album-content">
            <img
              src={twiceWhasTwice}
              id="twice-album-image"
              alt="whas"
            />
          </div>
          <div id="twice-album-content">
            <img
              src={signal}
              id="twice-album-image"
              alt="signal"
            />
          </div>
          <div id="twice-album-content">
            <img
              src={twicetagram}
              id="twice-album-image"
              alt="twicetagram"
            />
          </div>
          <div id="twice-album-content">
            <img
              src={merryHappy}
              id="twice-album-image"
              alt="merryhappy"
            />
          </div>
          <div id="twice-album-content">
            <img
              src={whatIsLove}
              id="twice-album-image"
              alt="whatislove"
            />
          </div>
          <div id="twice-album-content">
            <img
              src={summerNights}
              id="twice-album-image"
              alt="summernights"
            />
          </div>
          <div id="twice-album-content">
            <img
              src={yesOrYes}
              id="twice-album-image"
              alt="yesoryes"
            />
          </div>
          <div id="twice-album-content">
            <img
              src={theYearOfYes}
              id="twice-album-image"
              alt="theyearofyes"
            />
          </div>
          <div id="twice-album-content">
            <img
              src={fancyYou}
              id="twice-album-image"
              alt="fancyyou"
            />
          </div>
          <div id="twice-album-content">
            <img
              src={feelSpecial}
              id="twice-album-image"
              alt="feelspecial"
            />
          </div>
          <div id="twice-album-content">
            <img
              src={moreAndMore}
              id="twice-album-image"
              alt="moreandmore"
            />
          </div>
          <div id="twice-album-content">
            <img
              src={eyesWideOpen}
              id="twice-album-image"
              alt="eyeswideopen"
            />
          </div>
          <div id="twice-album-content">
            <img
              src={tasteOfLove}
              id="twice-album-image"
              alt="tasteoflove"
            />
          </div>
          <div id="twice-album-content">
            <img
              src={formulaOfLove}
              id="twice-album-image"
              alt="formulaoflove"
            />
          </div>
          <div id="twice-album-content">
            <img
              src={betweenOneAndTwo}
              id="twice-album-image"
              alt="between1and2"
            />
          </div>
        </div>

        <div id="twice-artist-sub-title">SINGLE's</div>
        <div id="twice-singles-gallery">
          <div id="twice-album-content">
            <img
              src={moreAndMore}
              id="twice-album-image"
              alt="moreandmoreenglish"
            />
          </div>
          <div id="twice-album-content">
            <img
              src={iCantStopMe}
              id="twice-album-image"
              alt="icantstopmeenglish"
            />
          </div>
          <div id="twice-album-content">
            <img
              src={cryForMe}
              id="twice-album-image"
              alt="cryforme"
            />
          </div>
          <div id="twice-album-content">
            <img
              src={theFeels}
              id="twice-album-image"
              alt="thefeels"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default TwicePage;
