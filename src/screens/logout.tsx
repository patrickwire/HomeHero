import * as React from 'react';
import { auth } from 'firebase';
import { Button } from '@material-ui/core';
import { useHistory } from 'react-router-dom';




interface Props{}

export const Logout=()=> {
  
    const history=useHistory()
    return(<div>
        <h4>Erfolgreich abgemeldet</h4>
        <Button onClick={()=>history.push("/")} color="primary">zur Startseite</Button>
    </div>)
}
