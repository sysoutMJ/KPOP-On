import "./SeventeenPage.css";
import NavigationBar from "./NavigationBar";
const SeventeenPage = () => {
  return (
    <div id="seventeen-main-div">
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0"
      ></meta>
      <NavigationBar />
      <div id="seventeen-title-background-image" />

      <div id="seventeen-artist-background">
        <div id="seventeen-artist-title">SEVENTEEN</div>
        <div id="seventeen-artist-sub-title">MEMBERS</div>
        <div id="seventeen-members-gallery">
          <div id="seventeen-members-content">
            <img
              src={require("./images/seventeen_face_the_sun_teaser_1_Dino.jpg")}
              id="seventeen-members-image"
              alt="dino"
            />
            <p>Lee Chan</p>
          </div>

          <div id="seventeen-members-content">
            <img
              src={require("./images/seventeen_face_the_sun_teaser_1_DK.jpg")}
              id="seventeen-members-image"
              alt="dk"
            />
            <p>Lee Seok-min</p>
          </div>

          <div id="seventeen-members-content">
            <img
              src={require("./images/seventeen_face_the_sun_teaser_1_Hoshi.jpg")}
              id="seventeen-members-image"
              alt="hoshi"
            />
            <p>Kwon Soon-young</p>
          </div>

          <div id="seventeen-members-content">
            <img
              src={require("./images/seventeen_face_the_sun_teaser_1_Jeonghan.jpg")}
              id="seventeen-members-image"
              alt="jeonghan"
            />
            <p>Yoon Jeonghan</p>
          </div>

          <div id="seventeen-members-content">
            <img
              src={require("./images/seventeen_face_the_sun_teaser_1_Joshua.jpg")}
              id="seventeen-members-image"
              alt="joshua"
            />
            <p>Joshua Hong</p>
          </div>

          <div id="seventeen-members-content">
            <img
              src={require("./images/seventeen_face_the_sun_teaser_1_Jun.jpg")}
              id="seventeen-members-image"
              alt="jun"
            />
            <p>Wen Junhui</p>
          </div>

          <div id="seventeen-members-content">
            <img
              src={require("./images/seventeen_face_the_sun_teaser_1_Mingyu.jpg")}
              id="seventeen-members-image"
              alt="mingyu"
            />
            <p>Kim Mingyu</p>
          </div>

          <div id="seventeen-members-content">
            <img
              src={require("./images/seventeen_face_the_sun_teaser_1_Scoups.jpg")}
              id="seventeen-members-image"
              alt="scoups"
            />
            <p>Choi Seung Cheol</p>
          </div>

          <div id="seventeen-members-content">
            <img
              src={require("./images/seventeen_face_the_sun_teaser_1_Seungkwan.jpg")}
              id="seventeen-members-image"
              alt="seungkwan"
            />
            <p>Boo Seung-kwan</p>
          </div>

          <div id="seventeen-members-content">
            <img
              src={require("./images/seventeen_face_the_sun_teaser_1_The8.jpg")}
              id="seventeen-members-image"
              alt="the8"
            />
            <p>Xu Minghao</p>
          </div>

          <div id="seventeen-members-content">
            <img
              src={require("./images/seventeen_face_the_sun_teaser_1_Vernon.jpg")}
              id="seventeen-members-image"
              alt="vernon"
            />
            <p>Hansol Vernon Chwe</p>
          </div>

          <div id="seventeen-members-content">
            <img
              src={require("./images/seventeen_face_the_sun_teaser_1_Wonwoo.jpg")}
              id="seventeen-members-image"
              alt="wonwoo"
            />
            <p>Jeon Won-woo</p>
          </div>

          <div id="seventeen-members-content">
            <img
              src={require("./images/seventeen_face_the_sun_teaser_1_Woozi.jpg")}
              id="seventeen-members-image"
              alt="woozi"
            />
            <p>Lee Ji-hoon</p>
          </div>
        </div>

        {/* 
        
        
        
        
        
        */}

        <div id="seventeen-artist-sub-title">ALBUMS</div>
        <div id="seventeen-album-gallery">
          <div id="seventeen-album-content">
            <img
              src={require("./images/17-Carat.jfif")}
              id="seventeen-album-image"
              alt="17carat"
            />
          </div>

          <div id="seventeen-album-content">
            <img
              src={require("./images/Boys-Be.png")}
              id="seventeen-album-image"
              alt="boysbe"
            />
          </div>

          <div id="seventeen-album-content">
            <img
              src={require("./images/Love-Letter.png")}
              id="seventeen-album-image"
              alt="loveletter"
            />
          </div>

          <div id="seventeen-album-content">
            <img
              src={require("./images/Going-Seventeen.png")}
              id="seventeen-album-image"
              alt="goingseventeen"
            />
          </div>

          <div id="seventeen-album-content">
            <img
              src={require("./images/Al1.png")}
              id="seventeen-album-image"
              alt=""
              about="all1"
            />
          </div>

          <div id="seventeen-album-content">
            <img
              src={require("./images/Teen-Age.png")}
              id="seventeen-album-image"
              alt="teenage"
            />
          </div>

          <div id="seventeen-album-content">
            <img
              src={require("./images/You-Make-My-Day.jpeg")}
              id="seventeen-album-image"
              alt="youmakemyday"
            />
          </div>

          <div id="seventeen-album-content">
            <img
              src={require("./images/you-made-my-dawn.webp")}
              id="seventeen-album-image"
              alt="youmademydawn"
            />
          </div>

          <div id="seventeen-album-content">
            <img
              src={require("./images/An-Ode.png")}
              id="seventeen-album-image"
              alt="anode"
            />
          </div>

          <div id="seventeen-album-content">
            <img
              src={require("./images/heng-garae.jfif")}
              id="seventeen-album-image"
              alt="henggarae"
            />
          </div>

          <div id="seventeen-album-content">
            <img
              src={require("./images/your-choice.jfif")}
              id="seventeen-album-image"
              alt="yourchoice"
            />
          </div>

          <div id="seventeen-album-content">
            <img
              src={require("./images/attacca.webp")}
              id="seventeen-album-image"
              alt="attacca"
            />
          </div>

          <div id="seventeen-album-content">
            <img
              src={require("./images/darling.webp")}
              id="seventeen-album-image"
              alt="darling"
            />
          </div>

          <div id="seventeen-album-content">
            <img
              src={require("./images/face-the-sun.jfif")}
              id="seventeen-album-image"
              alt="facethesun"
            />
          </div>
        </div>

        {/* 
        
        
        */}

        <div id="seventeen-artist-sub-title">SINGLE's</div>
        <div id="seventeen-singles-gallery">
          <div id="seventeen-album-content">
            <img
              src={require("./images/hit.jpg")}
              id="seventeen-album-image"
              alt="hit"
            />
          </div>

          <div id="seventeen-album-content">
            <img
              src={require("./images/not-alone.webp")}
              id="seventeen-album-image"
              alt="notalone"
            />
          </div>

          <div id="seventeen-album-content">
            <img
              src={require("./images/world-svt.jfif")}
              id="seventeen-album-image"
              alt="worldsvt"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default SeventeenPage;
