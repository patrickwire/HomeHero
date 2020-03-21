import React, { useEffect, useState, useContext } from "react";
import "./onboarding.css";
import { intros } from "../data/intros";
import { Fab } from "@material-ui/core";
import icon_arrow from "../assets/icon_arrow_purple.svg";
import { useHistory } from "react-router-dom";

export const Onboarding = () => {
  const [screen, setScreen] = useState(0);
const history=useHistory()
  const intro = intros[screen];
  return (
    <div className="onboardingScreen">
      <div style={{height:350,flex:1,display:"inline-flex",justifyContent:"center",flexDirection:"column"}}>
        <div className="title">{intro.title}</div>
        <div className="text">{intro.text || ""}</div>
      </div>
      <div style={{ textAlign: "right", paddingTop: 30}}>
        <Fab onClick={()=>{screen<2?setScreen(screen+1):history.push("/register")}} aria-label="add">
          <img src={icon_arrow} />
        </Fab>
      </div>
    </div>
  );
};
