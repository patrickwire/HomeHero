import React from "react";
import "./ActionCard.css";
import icon_behavior from "../assets/icon_behavior.svg";
import icon_social from "../assets/icon_social.svg";
import icon_hygiene from "../assets/icon_hygiene.svg";

import icon_star_red from "../assets/icon_star_red.svg";
import icon_star_orange from "../assets/icon_star_orange.svg";
import icon_star_blue from "../assets/icon_star_blue.svg";

import icon_plus_red from "../assets/icon_plus_red.svg";
import icon_plus_yellow from "../assets/icon_plus_yellow.svg";
import icon_plus_blue from "../assets/icon_plus_blue.svg";

import avatar_preview from "../assets/avatar_preview.svg"

interface Props {
    type: string;
    onChange:(value:string)=>void;
}

function pad(number: any, length: any) {
    var str = '' + number;
    while (str.length < length) {
        str = '0' + str;
    }
    return str;
}

export const CommunityActionCard=(props:Props)=>{
    if(props.type == 'help'){
        return(
        <div style={{marginTop: '20px'}} className="ActionCardHelp">
            <img className="ActionCardUserPic" style={{borderColor: 'rgba(231,57,76,0.80)'}} src={avatar_preview}></img>
            <span className="ActionCardUserName" style={{color: '#65000B'}}>ANNELIESE</span>
            <span className="HeaderHelpCommunity" style={{color: '#E7394C'}}>HELFEN</span>
            <span className="DescriptionHelpCommunity" style={{color: '#65000B'}}>Das ist eine Helfen Karte und sie hat zwei Zeilen.</span>
            <span className="CounterHelp">{pad(815,4)}</span>
            <img className="ActionCardIcon" src={icon_social}></img>
            <div className="ButtonHelp" style={{zIndex:1000}} onClick={() => {
                props.onChange("1");
            }}>
                <span style={{marginLeft: '16px'}}>HINZUFÜGEN</span>
                <img className="CheckArrow" src={icon_plus_red}></img>
          </div>
        </div>
        )
    }
    else if(props.type == 'active'){
        return(
            <div  style={{marginTop: '20px'}} className="ActionCardActive">
                <img className="ActionCardUserPic" style={{borderColor: 'rgba(253,183,82,0.80)'}} src={avatar_preview}></img>
                <span className="ActionCardUserName" style={{color: '#6D2C00'}}>ANNELIESE</span>
                <span className="HeaderHelpCommunity" style={{color: '#FDB752'}}>AKTIV BLEIBEN</span>
                <span className="DescriptionHelpCommunity" style={{color: '#6D2C00'}}>Das ist eine Aktiv Bleiben Karte und sie hat zwei Zeilen.</span>
                <span className="CounterActive">{pad(815,4)}</span>
                <img className="ActionCardIcon" src={icon_behavior}></img>
                <div className="ButtonActive" onClick={() => {
                    props.onChange("1");
                }}>
                <span style={{marginLeft: '16px'}}>HINZUFÜGEN</span>
                <img className="CheckArrow" src={icon_plus_yellow}></img>
            </div>
        </div>
        )
    }
    else {
        return(
            <div style={{marginTop: '20px'}} className="ActionCardHealth">
                <img className="ActionCardUserPic" style={{borderColor: 'rgba(65,218,232,0.80)'}} src={avatar_preview}></img>
                <span className="ActionCardUserName" style={{color: '#00565E'}}>ANNELIESE</span>
                <span className="HeaderHelpCommunity" style={{color: '#41DAE8'}}>GESUNDHEIT</span>
                <span className="DescriptionHelpCommunity" style={{color: '#00565E'}}>Das ist eine Gesundheit Karte und sie hat zwei Zeilen.</span>
                <span className="CounterHealth">{pad(815,4)}</span>
                <img className="ActionCardIcon" src={icon_hygiene}></img>
                <div className="ButtonHealth" style={{zIndex:1000}} onClick={() => {
                    props.onChange("1");
                }}>
                    <span style={{marginLeft: '16px'}}>HINZUFÜGEN</span>
                    <img className="CheckArrow" src={icon_plus_blue}></img>
                </div>
            </div>
        )
    }



}