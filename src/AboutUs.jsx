import React from "react";
import "./about us.css";
// import picture from '../src/album.jfif';
import NavigationBar from "./NavigationBar";
import AboutUsAlbumImage from "./images/album.jpg";

const AboutUs = () => {
  return (
    <div class="about-us-section">
      <NavigationBar />
      <div class="about-us-container">
        <div class="about-us-content-section">
          <div class="about-us-content">
            <div>
              <h1 id="about-us-title">About Us</h1>
            </div>
            <h3 id="about-us-sub-title">안녕하세요 케이팝온입니다!</h3>
            <h3 id="about-us-sub-title">Hello we are k-pop on!</h3>
            <p id="about-us-description">
              KPOP On! was founded to make K-Pop merch accessible nationwide.
              K-Pop is continuously increasing in terms of popularity. With
              that, it has been extremely challenging to buy merchandise from
              the artists we love. Hence why, we implemented a system / website
              that is able to satisfy the requests of KPOP Pinoys. We are
              partners who work with Asian manufacturers to provide the amazing
              merch of 5 artists.
            </p>
          </div>
        </div>
        <div class="about-us-image-section">
          <img src={AboutUsAlbumImage} alt="" />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
