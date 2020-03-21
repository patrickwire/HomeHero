import React, { useEffect, useState, useContext } from "react";
import "./Avatar.css";
import asset from "../assets/avatar_preview.svg"
interface Props{
    url:string;
}

export const Avatar=(props:Props)=> {  
return(
    <div  className="avatarFrame"><img src={props.url||asset}/></div>
   );
  }