import { useUser } from "../UserProvider"

export function ChatRoom() {
  const { username } =useUser();
  console.log(username)

  return <>
    Chat Room 
  </>
}