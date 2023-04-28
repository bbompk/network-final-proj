import { useState } from "react"
import { TextField, Button } from "@mui/material"
import { useUser } from "../UserProvider"
import { useNavigate } from "react-router-dom";

import "../../Login.css";

export function Login() {
  const { setUsername } = useUser();
  const [ usernameInput, setUsernameInput ] = useState<string>("");
  const [errorMessage, setErrorMessage] = useState<string>("")
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

  return (
    <div className="login-page">
      <div className="login-container">
        <img
          className="login-logo"
          src="https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png"
          alt="logo"
        />
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