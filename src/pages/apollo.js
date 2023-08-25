import "../Apollo.css";
import * as React from "react";
import logo from "../apollo.png";
import Primary from "../components/primaryButton";
import Slider from "../components/slider";
import v1 from "../apollo05/01.mp4";
import v2 from "../apollo05/02.mp4";
import v3 from "../apollo05/03.mp4";
import v4 from "../apollo05/04.mp4";
import v5 from "../apollo05/05.mp4";
import v6 from "../apollo05/06.mp4";
import v7 from "../apollo05/07.mp4";
import v8 from "../apollo05/08.mp4";
import v9 from "../apollo05/09.mp4";
import v10 from "../apollo05/10.mp4";
import v11 from "../apollo05/11.mp4";
import v12 from "../apollo05/12.mp4";
import v13 from "../apollo05/13.mp4";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleRight } from "@fortawesome/free-regular-svg-icons";
import { faShuffle } from "@fortawesome/free-solid-svg-icons";

function Apollo() {
  const playVid = (e) => {
    let currVid = e.target;
    let audioLevel = parseFloat(document.getElementsByClassName("volumePercent")[0].innerHTML) / 100;
    if (currVid.id === "playing") {
      e.target.pause();
      currVid.id = "paused";
    } else {
        e.target.volume = audioLevel;
      e.target.play();
      currVid.id = "playing";
      
    }
  };

  const vids = [v1, v2, v3, v4, v5, v6, v7, v8, v9, v10, v11, v12, v13];

  var vidNum = 0;

  const newVid = () => {
    const currVid = document.getElementsByClassName("vid")[0];
    currVid.id = "paused";
    if (vidNum + 1 === vids.length) {
      vidNum = 0;
    } else {
      vidNum++;
    }
    currVid.setAttribute("src", vids[vidNum]);
  };

  const shfl = () => {
    const currVid = document.getElementsByClassName("vid")[0];
    currVid.id = "paused";
    vidNum = parseInt(Math.floor(Math.random() * vids.length), 10);
    console.log(vidNum);
    currVid.setAttribute("src", vids[vidNum]);
  };

  var butWidth = "100px";
  if (window.screen.width < 500) {
    butWidth = "288px";
  }

  return (
    <div>
      <h1>Apollo 05</h1>
      <div id="vidHolder">
        <video
          src={v1}
          className="vid"
          id="paused"
          onClick={(e) => {
            playVid(e);
          }}
        />
      </div>
      <Primary
        label={<FontAwesomeIcon icon={faArrowAltCircleRight} size="2x" />}
        width={butWidth}
        id="nxt"
        func={() => {
          newVid();
        }}
      />
      <Primary
        label={<FontAwesomeIcon icon={faShuffle} size="2x" />}
        width="100px"
        id="sfl"
        func={() => {
          shfl();
        }}
      />
      <Slider />
      <div id="a2">
        <img src={logo} id="logo" alt="" />
      </div>
    </div>
  );
}

export default Apollo;
