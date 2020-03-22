import React, { Component } from "react";
import { storage } from "firebase";
import { Avatar } from "./Avatar";
import "./UploadAvatar.css";

class ImageUpload extends Component<{onChange:(url:string)=>void}> {
    state = {
        image: null,
        url: "",
        progress: 0
      };

 
  handleUpload = (image:any) => {
   
    const timestamp=""+Date.now()
  
    console.log(image)
    if(image!==null){
        /// @ts-ignore
        const uploadTask = storage().ref(`images/${timestamp+image.name}`).put(image);
       console.log(timestamp+image.name);
        
    uploadTask.on(
      "state_changed",
      snapshot => {
        // progress function ...
        const progress = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        this.setState({ progress });
      },
      error => {
        // Error function ...
        console.log(error);
      },
      () => {
        // complete function ...
        // @ts-ignore
        storage()
          .ref("images")
          // @ts-ignore
          .child(timestamp+image.name)
          .getDownloadURL()
          .then(url => {
            this.setState({ url });
            this.props.onChange(url)
          });
      }
    );
    }
    
  };

  render() {
    return (
      <div className="center">
       <Avatar
          url={this.state.url }
         
        />
        <div className="file-field input-field">
          <div className="btn">
           
            <input className="custom-file-input" type="file"  accept="image/*" onChange={(e:any)=>{
                // @ts-ignore
                if (e.target.files[0]) {
                    // @ts-ignore
                    const image = e.target.files[0];
                 
                    if(image.size<1024*1024){
                        this.setState(() => ({ image }));
                        this.handleUpload(image)
                    }else{
                    alert("sorry, to big( max 1M)")
                    
                    }
                    
                  }
            }} />
          </div>
          <div className="file-path-wrapper">
           
          </div>
        </div>
       
        <br />
        <br />
       
      </div>
    );
  }
}

export default ImageUpload;