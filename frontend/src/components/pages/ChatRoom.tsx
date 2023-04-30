import { useUser } from "../UserProvider"
import { TopBar } from "../chatRoom/TopBar";
import { RoomListContainer } from "../chatRoom/roomList/RoomListContainer";
import { ChatRoomContainer } from "../chatRoom/chatRoom/ChatRoomContainer";
import { UserListContainer } from "../chatRoom/userList/UserListContainer";
import ChatInput from "../chatRoom/chatRoom/ChatInput";
import { useSocket } from "../SocketProvider";
import { ChatNoti } from "../chatRoom/chatRoom/ChatNoti";
import { useEffect, useState } from "react";

export function ChatRoom() {
  const { room } = useUser();
  const { isDmRoom, users, notiDm } = useSocket();
  const [showNoti, setShowNoti] = useState<boolean>(false);

  useEffect(()=>{
    if(notiDm) setShowNoti(true);
    setTimeout(()=>{
      setShowNoti(false);
    }, 4000)
  },[notiDm])

  return <>
    <div style={{display:"flex", flexDirection:"column", height:"100vh", position:"relative"}}>
      {/* <TopBar/> */}
      <div style={{display:"flex", flexDirection:"row", height:"100vh"}}>
        <RoomListContainer/>
        <div style={{display:"flex", flexDirection:"column", flexGrow:1, backgroundColor:"lightblue"}}>
          <div>
            {room !== "" && (isDmRoom 
            ? <label style={{fontSize:"14px", paddingLeft:"6px"}}>{(users?.find((u) => u.id === room))?.name ?? 'disconnected'}</label>
            : <label style={{fontSize:"14px", paddingLeft:"6px"}}>ROOM - {room}</label>)}
          </div>
          <ChatRoomContainer/>
          <ChatInput/>
        </div>
        <div style={{
          display: "flex", flexDirection: "column", height: "100vh", backgroundColor: "#1A202C", 
          borderLeft: "10px solid #1A202C", borderRight: "10px solid #1A202C"
        }}>
          <TopBar/>
          <UserListContainer/>
        </div>
      </div>
    </div>
    {notiDm && <ChatNoti message={notiDm} show={showNoti}/>}
  </>
}