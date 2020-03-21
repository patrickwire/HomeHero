import React from "react";

import icon_star_purple from "../assets/icon_star_purple.svg";

import { Avatar } from "./Avatar";

interface Props {avatar:string,username:string, points:number}
export const ProfileContainer=(props:Props)=>{
    return(<div className="ProfileContainer">
    <div className="ProfilePic">
      <Avatar url={props.avatar} />
      <div className="User">
        <div className="Username">{props.username !== "" && props.username}</div>
        <div className="Userpoints">
          <b>{props.points}</b>
          <img
            style={{ height: "32px", paddingLeft: "7px" }}
            src={icon_star_purple}
          ></img>
        </div>
        <div className="Descriptor">STERNE</div>
      </div>
    </div>
  </div>)
}