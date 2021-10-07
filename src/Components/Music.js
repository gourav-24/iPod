/* This component renders list of pages on Music page */
/* Styling is similar to Home page so taken from Home.css */
import "./Home.css";
import React from "react";
function Music(props) {
  console.log("props.index of Music list ", props.index);
  return (
    <div className="home-image">
      <div className="lsit-Container">
        <div>
          <h1>Music</h1>
        </div>
        <div
          className={`${
            props.index === 0 ? "list-elem list-elem-hover" : "list-elem"
          }`}
        >
          All Songs <span> &gt; </span>
        </div>
        <div
          className={`${
            props.index === 1 ? "list-elem list-elem-hover" : "list-elem"
          }`}
        >
          Artists <span> &gt; </span>
        </div>
        <div
          className={`${
            props.index === 2 ? "list-elem list-elem-hover" : "list-elem"
          }`}
        >
          Albums <span> &gt; </span>
        </div>
      </div>
    </div>
  );
}

export default Music;
