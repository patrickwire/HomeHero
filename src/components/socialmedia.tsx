import React from "react";
import icon_arrow_white from "../assets/icon_arrow_white.svg";
import icon_star_white from "../assets/icon_star_white.svg";


interface Props {points: number}
export const SocialMediaContainer=(props:Props)=>{
    return(
        <div className="SocialMediaContainer">
            <div className="Share">
                <div style={{fontWeight: 500, fontSize: '20px'}}>TEILE DEINEN ERFOLG</div>
                <div style={{opacity: 0.5}}>Motiviere andere und share deine Profil auf Social Media.</div>
            </div>
            
            <img style={{float: 'right', paddingTop: '20px', paddingRight: '20px'}} src={icon_arrow_white}></img>
            <div className="SharePoints">
                 {props.points}
                <img style={{ height: "16px" }} src={icon_star_white}></img>
            </div>
        </div>
    )
}