import { useUser } from "../UserProvider"
import { useEffect, useState } from "react";
import { TopBar } from "../chatRoom/TopBar";
import { RoomListContainer } from "../chatRoom/roomList/RoomListContainer";
import { ChatRoomContainer } from "../chatRoom/chatRoom/ChatRoomContainer";
import { UserListContainer } from "../chatRoom/userList/UserListContainer";
import { StickerSelector } from "../chatRoom/chatRoom/StickerSelector";
import ChatInput from "../chatRoom/chatRoom/ChatInput";

export function ChatRoom() {
  return <>
    <div style={{display:"flex", flexDirection:"column", height:"100vh"}}>
      <TopBar/>
      <div style={{display:"flex", flexDirection:"row", height:"calc(100vh - 3rem)"}}>
        <RoomListContainer/>
        <div style={{display:"flex", flexDirection:"column", flexGrow:1, backgroundColor:"lightblue"}}>
          <ChatRoomContainer/>
          <ChatInput/>
        </div>
        <UserListContainer/>
      </div>
    </div>
  </>
}