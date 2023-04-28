import { useState } from "react"
import { TextField, Button } from "@mui/material"
import { useUser } from "../UserProvider"
import { useNavigate } from "react-router-dom";

import "../../Login.css";

export function Login() {
  const { setUsername } = useUser();
  const [ usernameInput, setUsernameInput ] = useState<string>("");
  const [errorMessage, setErrorMessage] = useState<string>("")
  const [selectedImage, setSelectedImage] = useState<string>("https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png")
  const navigate = useNavigate();

  const goToChatRoomPage = () => {
    console.log("navigatingg........")
    navigate("/chat");
  }

  const onClick = () => {
    if(usernameInput===""){
      setErrorMessage("Please enter your username!")
      return;
    }
    if(!setUsername)return;
    setUsername(usernameInput)
    console.log("i amk navigatinggggg")
    goToChatRoomPage();
  }

  const selectProfile = () => {
    const fileInput = window.open('', 'fileInput', 'width=400,height=400');
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = 'image/*';
    console.log("I am choosing profile!")
    
    // Displaying a preview image
    input.addEventListener('change', () => {
      const file = input.files && input.files[0];
      if (fileInput && fileInput.document && file) {
        console.log('Selected file:', file);
        const reader = new FileReader();
        reader.onload = (event) => {
          const img = new Image();
          img.src = event.target?.result as string;
          setSelectedImage(img.src)
        };
        reader.readAsDataURL(file);
      }
      fileInput.close();
    });
    fileInput.document.body.appendChild(input);
    input.click();
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <div className="login-logo" onClick={selectProfile}>
          <img
            src={selectedImage}
            alt="logo"
          />
        </div>
        <h2 className="login-title">Login to Your Account</h2>
        <form className="login-form">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            value={usernameInput}
            onChange={(e) => setUsernameInput(e.target.value)}
          />
          <span className="login-error">{errorMessage}</span>
          <Button variant="contained" onClick={onClick}>
          Start Chatting!
          </Button>
        </form>
      </div>
    </div>
  );
}