import "./App.css";
import React, { useEffect, useState } from "react";
import ZingTouch from "zingtouch";
import Home from "./Components/Home";
import Games from "./Components/Games";
import Settings from "./Components/Settings";
import Music from "./Components/Music";
import Genric from "./Components/Genric";
import MusicPlayer from "./Components/MusicPlayer";

function App() {
  /* useState is used to store currentpage, previous page and index of iterator on music and Home page */
  var [data, setData] = useState({
    homeIndex: 0,
    musicIndex: 0,
    prevPage: "Home",
    currentPage: "Home",
  });

  /* useEffect is used to setup Zingtouch library and add rotate listner  */
  useEffect(() => {
    var containerElement = document.getElementById("iPod-buttons");
    //console.log(" element fetched>>>", containerElement);
    var zt = new ZingTouch.Region(containerElement);
    //console.log("zt>>> ", zt);
    zt.bind(containerElement, "rotate", function (eve) {
      //console.log("inside binding fn");
      //console.log("eve>>>> ", eve);
      //console.log("eve detail>  >>> ", eve.detail);
      if (eve.detail.angle > 15) {
        var newIn = 0;
        var newMusicIndex = 0;
        if (data.currentPage === "Home") {
          newIn = (data.homeIndex + 1) % 4;
        } else if (data.currentPage === "Music") {
          newMusicIndex = (data.musicIndex + 1) % 3;
        }

        //console.log("mod>> ", newIn);
        //console.log("music mod>> ", newMusicIndex);
        /* change index accordning to rotate event */
        setData({
          // Data set 1
          homeIndex: newIn,
          musicIndex: newMusicIndex,
          prevPage: data.prevPage,
          currentPage: data.currentPage,
        });
        //console.log(data.homeIndex);
      }
    });
  });

  /* on button click following method is called to go to next page and maintain previous page   */
  function changePage() {
    var toPage = "Home";
    var pageList = ["Cover Flow", "Music", "Games", "Setting"];
    var musicPageList = ["All Songs", "Artist", "Albums"];
    //console.log("currentPage>>>>, ", data.currentPage);
    if (data.currentPage === "Home") {
      toPage = pageList[data.homeIndex];
      //console.log("toPage>>>>, ", toPage);
    } else if (data.currentPage === "Music") {
      toPage = musicPageList[data.musicIndex];
      //console.log("Music page>> ", toPage);
    }

    var currentPage = toPage;
    var prevPage = data.currentPage;
    setData({
      // Data set 2
      homeIndex: data.homeIndex,
      musicIndex: data.musicIndex,
      prevPage,
      currentPage,
    });
  }

  /* This method is called when MENUE is pressed it moves back to previous stage */
  function changeToPrevPage() {
    console.log("Going back> ");
    var currentPage = data.prevPage;
    var prevPage = "Home";
    console.log("to page> ", currentPage);

    if (currentPage === "Music") {
      data.prevPage = "Home";
    }

    setData({
      homeIndex: 0,
      musicIndex: 0,
      prevPage,
      currentPage,
    });
  }

  /* Following Swith Case pass the Page Component to be rendered on screen dynamically depending on current page value in our Data state */
  var page;
  switch (data.currentPage) {
    case "Home":
      page = <Home index={data.homeIndex} />;
      break;
    case "Games":
      page = <Games />;
      break;
    case "Setting":
      page = <Settings />;
      break;
    case "Music":
      page = <Music index={data.musicIndex} />;
      break;
    case "All Songs":
      page = <MusicPlayer />;
      break;
    default:
      page = <Genric name={data.currentPage} />;
      break;
  }

  //console.log("final index>>> ", data.homeIndex);
  return (
    <div className="App">
      <div className="iPod-Body">
        {/* iPod Screen */}
        <div className="ipod-Screen">{page}</div>

        {/* iPod Buttons */}
        <div id="iPod-buttons">
          {/* MENU button */}
          <div className="menu-button" onClick={changeToPrevPage}>
            MENU
          </div>

          {/* Centre buttons (left forward, centre ring to enter, right forward) */}
          <div className="centre-button">
            {/* left forward */}
            <div className="arrow">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30px"
                height="30px"
                fill="currentColor"
                class="bi bi-skip-backward-fill"
                viewBox="0 0 16 16"
              >
                <path d="M.5 3.5A.5.5 0 0 0 0 4v8a.5.5 0 0 0 1 0V8.753l6.267 3.636c.54.313 1.233-.066 1.233-.697v-2.94l6.267 3.636c.54.314 1.233-.065 1.233-.696V4.308c0-.63-.693-1.01-1.233-.696L8.5 7.248v-2.94c0-.63-.692-1.01-1.233-.696L1 7.248V4a.5.5 0 0 0-.5-.5z" />
              </svg>
            </div>

            {/* centre ring to enter */}
            <div className="iPod-ring" onClick={changePage}></div>

            {/* Right forward */}
            <div className="arrow">
              <i class="bi bi-skip-forward-fill"></i>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30px"
                height="30px"
                fill="currentColor"
                class="bi bi-skip-forward-fill"
                viewBox="0 0 16 16"
              >
                <path d="M15.5 3.5a.5.5 0 0 1 .5.5v8a.5.5 0 0 1-1 0V8.753l-6.267 3.636c-.54.313-1.233-.066-1.233-.697v-2.94l-6.267 3.636C.693 12.703 0 12.324 0 11.693V4.308c0-.63.693-1.01 1.233-.696L7.5 7.248v-2.94c0-.63.693-1.01 1.233-.696L15 7.248V4a.5.5 0 0 1 .5-.5z" />
              </svg>
            </div>
          </div>

          {/* play-pause button */}
          <div className="play-pause">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              fill="currentColor"
              class="bi bi-play-fill"
              viewBox="0 0 16 16"
            >
              <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z" />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              fill="currentColor"
              class="bi bi-pause-fill"
              viewBox="0 0 16 16"
            >
              <path d="M5.5 3.5A1.5 1.5 0 0 1 7 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5zm5 0A1.5 1.5 0 0 1 12 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5z" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
