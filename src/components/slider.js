import * as React from "react";
import Primary from "./primaryButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVolumeUp, faVolumeDown} from "@fortawesome/free-solid-svg-icons"

const Slider = () => {
    const [filled, setFilled] = React.useState(50);
    

  return (
  <div>
    <div className="volumeBar">
        <div style={{
            height: "100%",
            width: `${filled}%`,
            backgroundColor: "#4a52e3",
            transition: "width 0.5s",
            zIndex: "-3"
        }}></div>
        <span className="volumePercent">{filled}%</span>
    </div>
    <Primary label={<FontAwesomeIcon icon={faVolumeUp}/>} width="50px" id="u" func={()=> {
        if(filled >= 95) {
            setFilled(100);
        } else {
            setFilled(filled + 5);
        }
        const vid = document.getElementsByClassName("vid")[0];
        vid.volume = (filled / 100);
    }}/>
    <Primary label={<FontAwesomeIcon icon={faVolumeDown}/>} width="50px" id="d" func={()=> {
        if(filled <= 5) {
            setFilled(0);
        } else {
            setFilled(filled - 5);
        }
    }}/>
    
  </div>
  );
};

export default Slider;
