import React from "react";
import banner_orange from "../assets/banner_orange.svg";
import banner_blue from "../assets/banner_blue.svg";
import banner_red from "../assets/banner_red.svg";
import icon_star_white from "../assets/icon_star_white.svg";
import icon_star_purple from "../assets/icon_star_purple.svg";

interface Props{

}

export const PointBars=(props:Props)=>{
    return(<div className="SVGContainer">
    <div className="Social">
      <img src={banner_red}></img>
      <div className="PointContainer">
        <div className="Points">
          <b>9.999</b>
        </div>
        <div className="Nameline">AKTIV</div>
      </div>
      <div className="Star">
        <img style={{ height: "16px" }} src={icon_star_white}></img>
      </div>
    </div>
    <div className="Hygiene">
      <img src={banner_blue}></img>
      <div className="PointContainer">
        <div className="Points">
          <b>9.999</b>
        </div>
        <div className="Nameline">GESUNDHEIT</div>
      </div>
      <div className="Star">
        <img style={{ height: "16px" }} src={icon_star_white}></img>
      </div>
    </div>
    <div className="Behavior">
      <img src={banner_orange}></img>
      <div className="PointContainer">
        <div className="Points">
          <b>9.999</b>
        </div>
        <div className="Nameline">HELFEN</div>
      </div>
      <div className="Star">
        <img style={{ height: "16px" }} src={icon_star_white}></img>
      </div>
    </div>
    </div>)
}