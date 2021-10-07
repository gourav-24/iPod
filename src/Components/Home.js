/* This component renders list of pages on iPod.js/ Home page */
import "./Home.css";
import React from "react";
function Home(props) {
  return (
    <div className="home-image">
      <div className="lsit-Container">
        <div>
          <h1>iPod.js</h1>
        </div>
        <div
          className={`${
            props.index === 0 ? "list-elem list-elem-hover" : "list-elem"
          }`}
        >
          Cover Flow <span> &gt; </span>
        </div>
        <div
          className={`${
            props.index === 1 ? "list-elem list-elem-hover" : "list-elem"
          }`}
        >
          Music <span> &gt; </span>
        </div>
        <div
          className={`${
            props.index === 2 ? "list-elem list-elem-hover" : "list-elem"
          }`}
        >
          Games <span> &gt; </span>
        </div>
        <div
          className={`${
            props.index === 3 ? "list-elem list-elem-hover" : "list-elem"
          }`}
        >
          Settings <span> &gt; </span>
        </div>
      </div>
    </div>
  );
}

export default Home;
