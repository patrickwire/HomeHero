import React, { useEffect, useState, useContext } from "react";
import "./Avatar.css";
interface Props{
    url:string;
}

export const Avatar=(props:Props)=> {  
return(
    <div  className="avatarFrame"><img src={props.url}/></div>
   );
  }