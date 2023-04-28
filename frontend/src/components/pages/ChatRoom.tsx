import { useUser } from "../UserProvider"
import { useNavigate } from "react-router-dom";

export function ChatRoom() {
  const { username } = useUser();
  const navigate = useNavigate();
  
  return <>
    Chat Room 
  </>
}