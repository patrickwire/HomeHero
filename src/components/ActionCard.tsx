import React, { useState } from "react";
import "./ActionCard.css";
import icon_behavior from "../assets/icon_behavior.svg";
import icon_social from "../assets/icon_social.svg";
import icon_hygiene from "../assets/icon_hygiene.svg";

import icon_star_red from "../assets/icon_star_red.svg";
import icon_star_orange from "../assets/icon_star_orange.svg";
import icon_star_blue from "../assets/icon_star_blue.svg";

import icon_arrow_red from "../assets/icon_arrow_red.svg";
import icon_arrow_orange from "../assets/icon_arrow_orange.svg";
import icon_arrow_blue from "../assets/icon_arrow_blue.svg";

import { Button, Fade } from "@material-ui/core";

interface Props {
  type: any;
  counter: any;
  title: any;
  points: any;
  enabled: any;
  children?: JSX.Element;
  onChange?: (value: string) => void;
}

function pad(number: any, length: any) {
  if (!number) number = 0;
  var str = "" + number;
  while (str.length < length) {
    str = "0" + str;
  }
  return str;
}

export const ActionCard = (props: Props) => {
  const [fade, setFade] = useState(true);
  const renderBackcard = (color: string, layer: number) => {
    return (
      <div
        className="shadow"
        style={{
          width: 380,
          height: 164,
          position: "absolute",
          background: color,
          borderRadius: 32,
          zIndex: -1 * layer,
          left: -8 * layer,
          top: 8 * layer
        }}
      ></div>
    );
  };
  if (props.type == "help") {
    const backcards = [];
    const bca = props.counter > 4 ? 4 : props.counter;
    for (let index = 0; index < bca; index++) {
      backcards.push(renderBackcard("#E7394C", index + 1));
    }
    return (
      <div className="ActionCardHelp" style={{ marginBottom: bca * 8 + 15 }}>
        {backcards}
        <span className="HeaderHelp">HELFEN</span>
        <span className="PointsHelp">{props.points}</span>
        <img
          className="ActionCardStar"
          style={{ height: "24px" }}
          src={icon_star_red}
        ></img>
        <span className="DescriptionHelp">{props.title}</span>
        <Fade in={fade}>
          <span className="CounterHelp">{pad(props.counter, 4)}</span>
        </Fade>
        <img className="ActionCardIcon" src={icon_social}></img>
        <div
          className={props.enabled?'ButtonHelp':'ButtonDisabled'}
          style={{ zIndex: 1000, display: props.onChange ? "block" : "none" }}
          onClick={() => {
            setFade(false);

            setTimeout(() => {
              // @ts-ignore
              props.onChange("1");
            }, 500);
            setTimeout(() => {
              setFade(true);
            }, 1000);
          }}
        >
          <span style={{ marginLeft: "16px", color: "#E7394C" }}>HEUTE ERLEDIGT</span>
          <img hidden={!props.enabled} className="CheckArrow" src={icon_arrow_red}></img>
        </div>
      </div>
    );
  } else if (props.type == "active") {
    const backcards = [];
    const bca = props.counter > 4 ? 4 : props.counter;
    for (let index = 0; index < bca; index++) {
      backcards.push(renderBackcard("#FDB752", index + 1));
    }
    return (
      <div className="ActionCardActive" style={{ marginBottom: bca * 8 + 15 }}>
        {backcards}
        <span className="HeaderActive">AKTIV BLEIBEN</span>
        <span className="PointsActive">{props.points}</span>
        <img
          className="ActionCardStar"
          style={{ height: "24px" }}
          src={icon_star_orange}
        ></img>
        <span className="DescriptionHelp">{props.title}</span>
        <Fade in={fade}>
          <span className="CounterHelp">{pad(props.counter, 4)}</span>
        </Fade>
        <img className="ActionCardIcon" src={icon_behavior}></img>
        <div
          className={!props.enabled?'ButtonDisabled':'ButtonActive'}
          style={{ zIndex: 1000, display: props.onChange ? "block" : "none" }}
          onClick={() => {
            setFade(false);

            setTimeout(() => {
              // @ts-ignore
              props.onChange("1");
            }, 500);
            setTimeout(() => {
              setFade(true);
            }, 1000);
          }}
        >
          <span style={{ marginLeft: "16px", color: "#FDB752" }}>HEUTE ERLEDIGT</span>
          <img hidden={!props.enabled} className="CheckArrow" src={icon_arrow_orange}></img>
        </div>
      </div>
    );
  } else {
    const backcards = [];
    const bca = props.counter > 4 ? 4 : props.counter;
    for (let index = 0; index < bca; index++) {
      backcards.push(renderBackcard("#41DAE8", index + 1));
    }
    return (
      <div className="ActionCardHealth" style={{ marginBottom: bca * 8 + 15 }}>
        {backcards}
        <span className="HeaderHealth">GESUNDHEIT</span>
        <span className="PointsHealth">{props.points}</span>
        <img
          className="ActionCardStar"
          style={{ height: "24px" }}
          src={icon_star_blue}
        ></img>
        <span className="DescriptionHealth">{props.title}</span>
        <Fade in={fade}>
          <span className="CounterHealth">{pad(props.counter, 4)}</span>
        </Fade>
        <img className="ActionCardIcon" src={icon_hygiene}></img>
        <div
          className={!props.enabled?'ButtonDisabled':'ButtonHealth'}
          style={{ zIndex: 1000, display: props.onChange ? "block" : "none" }}
          onClick={() => {
            setFade(false);

            setTimeout(() => {
              // @ts-ignore
              props.onChange("1");
            }, 500);
            setTimeout(() => {
              setFade(true);
            }, 1000);
          }}
        >
          <span style={{ marginLeft: "16px", color: '#41DAE8' }}>HEUTE ERLEDIGT</span>
          <img hidden={!props.enabled} className="CheckArrow" src={icon_arrow_blue}></img>
        </div>
      </div>
    );
  }
};
