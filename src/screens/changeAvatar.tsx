import ImageUpload from "../components/UploadAvatar"
import React, { useEffect, useContext } from "react";
import { Button } from "@material-ui/core";
import { firestore } from "firebase";
import { AuthContext } from "../App";
import { useHistory } from "react-router-dom";

export const ChangeAvatar=()=>{
    const [avatar, setAvatar] = React.useState("");
    const [uid, setUid] = React.useState("");
    const userAuth = useContext(AuthContext);
    const history=useHistory()
    useEffect(() => {
        if (userAuth.uid) {
            setUid(userAuth.uid);
        }
      }, [userAuth]);
    return (<div>
           <ImageUpload onChange={(url)=>setAvatar(url)}/>
           <Button disabled={avatar==""}  variant="contained" color="primary"  onClick={()=>{
               firestore()
               .collection("users")
               .doc(userAuth.uid).update({avatar}).then(()=>{
                   history.push("/")
               })

           }}>Übernehmen</Button>

    </div>)
}