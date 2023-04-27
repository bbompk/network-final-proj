import { useUser } from "../components/UserProvider"

export function ChatRoomPage() {
  const { username } =useUser();
  console.log(username)

  return <>
    Chat Room 
  </>
}