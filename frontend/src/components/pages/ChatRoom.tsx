import { useUser } from "../UserProvider"
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { TopBar } from "../chatRoom/TopBar";
import { RoomListContainer } from "../chatRoom/RoomListContainer";
import { ChatRoomContainer } from "../chatRoom/ChatRoomContainer";
import { UserListContainer } from "../chatRoom/UserListContainer";

export function ChatRoom() {
  const { username } = useUser();
  useEffect(() => console.log(username))

  return <>
    <div style={{display:"flex", flexDirection:"column", height:"100vh"}}>
      <TopBar/>
      <div style={{display:"flex", flexDirection:"row", flexGrow:1}}>
        <RoomListContainer/>
        <ChatRoomContainer/>
        <UserListContainer/>
      </div>
    </div>
  </>
}