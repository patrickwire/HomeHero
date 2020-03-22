import React from "react";
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

import { Button } from "@material-ui/core";


interface Props {
    type: any;
    counter: any;
    title: any;
    points: any;
    children?:JSX.Element;
    onChange?:(value:string)=>void;
}

function pad(number: any, length: any) {
    if(!number) number = 0;
    var str = '' + number;
    while (str.length < length) {
        str = '0' + str;
    }
    return str;
}

export const ActionCard=(props:Props)=>{
    if(props.type == 'help'){
        return(
            <div className="ActionCardHelp">
                <span className="HeaderHelp">HELFEN</span>
                <span className="PointsHelp">{props.points}</span>
                <img className="ActionCardStar" style={{height: '24px'}}src={icon_star_red}></img>
                <span className="DescriptionHelp">{props.title}</span>
                <span className="CounterHelp">{pad(props.counter,4)}</span>
                <img className="ActionCardIcon" src={icon_social}></img>
                <div className="ButtonHelp" style={{zIndex:1000,display:props.onChange?"block":"none"}} onClick={() => {
                // @ts-ignore
                props.onChange("1")
                }}>
                    <span style={{marginLeft: '16px'}}>HEUTE ERLEDIGT</span>
                    <img className="CheckArrow" src={icon_arrow_red}></img>
                </div>
            </div>
        )
    }
    else if(props.type == 'active'){
        return(
            <div className="ActionCardActive">
            <span className="HeaderActive">AKTIV BLEIBEN</span>
            <span className="PointsActive">{props.points}</span>
            <img className="ActionCardStar" style={{height: '24px'}}src={icon_star_orange}></img>
            <span className="DescriptionHelp">{props.title}</span>
            <span className="CounterActive">{pad(props.counter,4)}</span>
            <img className="ActionCardIcon" src={icon_behavior}></img>
            <div className="ButtonActive" style={{zIndex:1000,display:props.onChange?"block":"none"}} onClick={() => {
            // @ts-ignore
            props.onChange("1")
            }}>
                <span style={{marginLeft: '16px'}}>HEUTE ERLEDIGT</span>
                <img className="CheckArrow" src={icon_arrow_orange}></img>
            </div>
        </div>
        )
    }
    else {
        return(
            <div className="ActionCardHealth">
            <span className="HeaderHealth">GESUNDHEIT</span>
            <span className="PointsHealth">{props.points}</span>
            <img className="ActionCardStar" style={{height: '24px'}}src={icon_star_blue}></img>
            <span className="DescriptionHealth">{props.title}</span>
            <span className="CounterHealth">{pad(props.counter,4)}</span>
            <img className="ActionCardIcon" src={icon_hygiene}></img>
            <div className="ButtonHealth" style={{zIndex:1000,display:props.onChange?"block":"none"}} onClick={() => {
            // @ts-ignore
            props.onChange("1")
            }}>
                <span style={{marginLeft: '16px'}}>HEUTE ERLEDIGT</span>
                <img className="CheckArrow" src={icon_arrow_blue}></img>
            </div>
        </div>
        )
    }

}