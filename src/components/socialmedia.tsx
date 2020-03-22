
import icon_arrow_white from "../assets/icon_arrow_white.svg";
import icon_star_white from "../assets/icon_star_white.svg";
import { Dialog, DialogTitle, DialogActions, Button, DialogContent, DialogContentText, Avatar, Chip, Icon } from "@material-ui/core";
import React from "react";



interface Props {points: number,uid?:string}
export const SocialMediaContainer=(props:Props)=>{
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
        console.log(1);
      setOpen(false);
    };
    // @ts-ignore
    const canShare=navigator.share
    return(
       <div><div className="SocialMediaContainer" onClick={handleClickOpen}>
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
        <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Teile dein Profil mit anderen"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Schicke diesen link einfach an deine freunde oder share in via facebook oder whatsapp.
            <br/><br/><Chip style={{maxWidth:"100%"}}
        onClick={canShare?()=>{
          
                // @ts-ignore
                navigator.share({
                    title: 'Ich mach bei Heldenzeit mit!',
                    text: 'werde auch du ein teil davon',
                    url: "https://"+window.location.host+"/user/"+props.uid
                  }).then(() => {
                    console.log('Thanks for sharing!');
                  })
              }
        :undefined
    }
        label={"https://"+window.location.host+"/user/"+props.uid}
        
        variant="outlined"
      />
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Schließen
          </Button>
          
        </DialogActions>
      </Dialog>
        </div>
    )
}