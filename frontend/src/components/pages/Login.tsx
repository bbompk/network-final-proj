import { useState } from "react"
import { Button, Modal, Box, Grid, IconButton } from "@mui/material";
import { useUser } from "../UserProvider"
import { useNavigate } from "react-router-dom";
import { avatars_url } from "../../data/Avatar";

import "./Login.css";

export function Login() {
  const { changeUsername } = useUser();
  const [openModal, setOpenModal] = useState(false);
  const [usernameInput, setUsernameInput ] = useState<string>("");
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
    if(!changeUsername)return;
    changeUsername(usernameInput)
    console.log("i amk navigatinggggg")
    goToChatRoomPage();
  }

  const handleOpenModal = () => {
    setOpenModal(true);
  };
  
  const handleCloseModal = () => {
    setOpenModal(false);
  };

  const handleSelectProfileImage = (image: string) => {
    setSelectedImage(image);
    handleCloseModal();
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <div className="login-logo" onClick={handleOpenModal}>
          <img
            src={selectedImage}
            alt="logo"
          />
        </div>
        <Modal open={openModal} onClose={handleCloseModal}>
          <Box sx={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", width: 400, bgcolor: "background.paper", borderRadius: "10px", boxShadow: 24, p: 4 }}>
            <h2 className="login-title">Choose Profile Picture</h2>
            <Grid container spacing={2}>
              {avatars_url.map((image) => (
                <Grid item xs={6} key={image}>
                  <IconButton onClick={() => handleSelectProfileImage(image)}>
                    <img src={image} alt={image} style={{ width: "100%", height: "auto" }} />
                  </IconButton>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Modal>
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