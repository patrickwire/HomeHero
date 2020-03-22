import React from "react";
import { Dialog, DialogTitle, DialogActions, Button, DialogContent, DialogContentText, Avatar, Chip, Icon } from "@material-ui/core";
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import { TextField } from "@material-ui/core";
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import moment from "moment";


interface Props {
    onChange?:(value:any)=>void;
}
export const NewCard=(props:Props)=>{
    const [open, setOpen] = React.useState(false);
    const [title, setTitle] = React.useState("");
    const [type, setType] = React.useState("health");

    const handleClickOpen = () => {
        setTitle("");
        setType("health");
        setOpen(true);
      };
    
      const handleClose = () => {
          setOpen(false);
      };

      const saveAction = () => {
          const newAction = {
              title: title,
              type: type,
              amount: 0,
              points: 50,
              date: moment().toISOString()
          }
          //@ts-ignore
          props.onChange(newAction);
          setOpen(false);
      }

    return(<div>
    <Fab className="fab" style={{position: 'fixed'}} color="primary" aria-label="add" onClick={handleClickOpen}>
          <AddIcon />
    </Fab>

    <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
              Beschreibe deine Idee in einem Satz
          </DialogContentText>
            <TextField
                error={title.length<3}
                id="outlined-basic"
                label="Deine Idee"
                multiline={true}
                inputProps={{ maxLength: 80 }}
                type="text"
                fullWidth
                onChange={e => setTitle(e.target.value)}
                value={title}
            />
            <FormControl style={{paddingTop: '10px'}} component="fieldset">
                <RadioGroup color="secondary" aria-label="gender" name="gender1" value={type} onChange={e => setType(e.target.value)}>
                    <FormControlLabel value="health" control={<Radio color="primary"/>} label="Gesundheit" />
                    <FormControlLabel value="help" control={<Radio color="primary" />} label="Helfen" />
                    <FormControlLabel value="active" control={<Radio color="primary" />} label="Aktiv bleiben" />
                </RadioGroup>
            </FormControl>
        </DialogContent>

        <DialogActions>
          <Button disabled={title.length<3} onClick={saveAction} color="primary">
            Speichern
          </Button>
        </DialogActions>
      </Dialog>
        
    </div>)

}