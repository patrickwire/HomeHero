import React, { Component } from "react";
import { storage } from "firebase";


class ImageUpload extends Component<{onChange:(url:string)=>void}> {
    state = {
        image: null,
        url: "",
        progress: 0
      };

 
  handleUpload = () => {
    const { image } = this.state;
    if(image!==null){
        /// @ts-ignore
        const uploadTask = storage().ref(`images/${image.name}`).put(image);
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
          .child(image.name)
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
          <br/>
          <h2 className="green-text">React Firebase Image Uploader</h2>
          <br/>
          <br/>
        <div className="row">
          <progress value={this.state.progress} max="100" className="progress" />
        </div>
        <br />
        <br />
        <br />
        <div className="file-field input-field">
          <div className="btn">
            <span>File</span>
            <input type="file"  accept="image/*" onChange={(e:any)=>{
                // @ts-ignore
                if (e.target.files[0]) {
                    // @ts-ignore
                    const image = e.target.files[0];
                 
                    if(image.size<1024*1024){
                        this.setState(() => ({ image }));
                    }else{
                    alert("sorry, to big( max 1M)")
                    
                    }
                    
                  }
            }} />
          </div>
          <div className="file-path-wrapper">
            <input className="file-path validate" type="text" />
          </div>
        </div>
        <button
          onClick={this.handleUpload}
          className="waves-effect waves-light btn"
        >
          Upload
        </button>
        <br />
        <br />
        <img
          src={this.state.url || "https://via.placeholder.com/400x300"}
          alt="Uploaded Images"
          height="300"
          width="400"
        />
      </div>
    );
  }
}

export default ImageUpload;