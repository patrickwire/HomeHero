import React, { useEffect, useState, useContext } from "react";
import "./onboarding.css";
import { intros } from "../data/intros";
import { Fab, Button } from "@material-ui/core";
import icon_arrow from "../assets/icon_arrow_purple.svg";
import logo from "../assets/logo_vertical.svg";
import { useHistory } from "react-router-dom";

export const Onboarding = () => {
  const [screen, setScreen] = useState(-1);
  const history = useHistory();
  if (screen < 0) {
    return (
      <div className="onboardingScreen">
        <div
          style={{
            height: 350,
            flex: 1,
            display: "inline-flex",
            justifyContent: "center",
            flexDirection: "column"
          }}
        >
          <img src={logo} style={{width:"100%"}}/>
      </div>
      <div style={{ textAlign: "right", paddingTop: 30 }}>
        <Fab
          onClick={() => {
            screen < 2 ? setScreen(screen + 1) : history.push("/register");
          }}
          aria-label="add"
        >
          <img src={icon_arrow} />
        </Fab>
      </div>
      </div>
    );
  }
  const intro = intros[screen];
  return (
    <div className="onboardingScreen">
      <div
        style={{
          height: 350,
          flex: 1,
          display: "inline-flex",
          justifyContent: "center",
          flexDirection: "column"
        }}
      >
        <div className="title">{intro.title}</div>
        <div className="text">{intro.text || ""}</div>
      </div>
      <div style={{ textAlign: "right", paddingTop: 30 }}>
        <Fab
          onClick={() => {
            screen < 2 ? setScreen(screen + 1) : history.push("/register");
          }}
          aria-label="add"
        >
          <img src={icon_arrow} />
        </Fab>
      </div>
    </div>
  );
};
