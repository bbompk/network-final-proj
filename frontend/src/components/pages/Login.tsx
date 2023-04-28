import { useState } from "react"
import { TextField, Button } from "@mui/material"
import { useUser } from "../UserProvider"
import { useNavigate } from "react-router-dom";

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

  return <>
    <div className="flex items-center justify-center w-screen h-screen">
      <div className="w-1/2 min-w-min max-w-md flex flex-col p-5 rounded bg-white">
        <h3 className="text-xl">Username</h3>
        <TextField 
          autoComplete="off" 
          value={usernameInput} 
          onChange={(e) => {setUsernameInput(e.target.value)}}
        ></TextField>
        <span className="text-red-600">{errorMessage}</span>
        <h3 className="text-xl">Profile Picture</h3>
        <Button variant="contained" onClick={onClick}>Start Chatting!</Button>
      </div>
    </div>
  </>
}