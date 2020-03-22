import  React, { useState, useEffect } from 'react';
import { PointBars } from '../components/PointBars';
import { ProfileContainer } from '../components/ProfielContainer';
import { SocialMediaContainer } from '../components/socialmedia';
import { ActionCard } from '../components/ActionCard';
import { useParams } from 'react-router-dom';
import { firestore } from 'firebase';
import { UserData } from '../interfaces/userData';

interface Props {}

export const Profile = (props: Props) => {
    const [username, setUsername] = useState("");
    const [avatar, setAvatar] = useState("");
    const [actions, setAction] = useState([]);
    const [stars, setStars] = useState(0);
    const [active, setActive] = useState(0);
    const [help, setHelp] = useState(0);
    const [health, setHealth] = useState(0);
    const {uid}=useParams();
    useEffect(() => {
        console.log(uid);
        
          firestore()
            .collection("users")
            .doc(uid)
            .get()
            .then(snapshot => {
              if (snapshot && snapshot.exists) {
                const data = snapshot.data() as UserData;
                console.log(data);
                
                setUsername(data.username.toUpperCase());
                setAvatar(data.avatar);
                // @ts-ignore
                setAction(data.actions||[]);
                // @ts-ignore
              
              }else{
                setUsername("NUTZER EXISTIERT NICHT")
              }
            });
        
      }, []);
    // @ts-ignore
 const renderActions=(actions:Action[]):JSX.Element[]=>{
    return actions.map((action,idx)=>
    <div key={idx}>
      <ActionCard   type={action.type} title={action.title} counter={action.amount} points={action.points}      
     />
      </div>)
   }
return(
    <div>
        <PointBars active={active} health={health} help={help} />
        <ProfileContainer username={username} avatar={avatar} points={stars}/>

        <SocialMediaContainer points={stars}/>

        <div className="TaskList">

          {renderActions(actions)}
       
        </div>
    </div>
);

}