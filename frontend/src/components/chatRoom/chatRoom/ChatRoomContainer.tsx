import Message from "./Message"
import { useSocket } from "../../SocketProvider"

export function ChatRoomContainer() {
  const { messages } = useSocket();
  return <>
  <div style={{minWidth:"20rem", flex:"1 1 auto", backgroundColor:"lightblue", overflowY:"auto"}}>
    {messages?.map((msg, idx) => (
        <Message key={idx} msg={msg}/>
    ))}
  </div>
  </>
}