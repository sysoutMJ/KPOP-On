import "./LeSserafimPage.css";
import NavigationBar from "./NavigationBar";
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
              src={require("./images/kim-garam.jfif")}
              id="lesserafim-members-image"
              alt="garam"
            />
            <p>&#40;Former&#41; Kim Garam</p>
          </div>

          <div id="lesserafim-members-content">
            <img
              src={require("./images/sakura.jfif")}
              id="lesserafim-members-image"
              alt="sakura"
            />
            <p>Sakura Miyawaki</p>
          </div>

          <div id="lesserafim-members-content">
            <img
              src={require("./images/eunchae.jfif")}
              id="lesserafim-members-image"
              alt="eunchae"
            />
            <p>Hong Eun-chae</p>
          </div>

          <div id="lesserafim-members-content">
            <img
              src={require("./images/chaewon.jfif")}
              id="lesserafim-members-image"
              alt="chaewon"
            />
            <p>Kim Chaewon</p>
          </div>

          <div id="lesserafim-members-content">
            <img
              src={require("./images/kazuha.jfif")}
              id="lesserafim-members-image"
              alt="kazuha"
            />
            <p>Nakamura Kazuha</p>
          </div>

          <div id="lesserafim-members-content">
            <img
              src={require("./images/yunjin.jfif")}
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
              src={require("./images/antifragile.png")}
              id="lesserafim-album-image"
              alt="antifragile"
            />
          </div>

          <div id="lesserafim-album-content">
            <img
              src={require("./images/fearless.png")}
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
