import { ChatRoomInterface } from "../../../interfaces/ChatRoomInterface";
import { useSocket } from "../../SocketProvider";

export function RoomNameContainer({chatRoom}:{chatRoom:ChatRoomInterface}) {
  const { joinRoom } = useSocket();
  const onClick = ()=>{
    if(!joinRoom)return;
    joinRoom(chatRoom.roomName)
  }
  return <>
    <button 
      className="bg-cyan-200 hover:bg-cyan-300 hover:cursor-pointer"
      style={{display:"inline-block", height:"3rem", minWidth:"100%", padding:"0.5rem", alignItems:"center", fontSize:"1.2rem", fontWeight:"bold" }}
      onClick={onClick}
      >
      {chatRoom.roomName}
    </button>
  </>
}