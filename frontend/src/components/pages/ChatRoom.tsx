import { useUser } from "../UserProvider"
import { useEffect, useState } from "react";
import { TopBar } from "../chatRoom/TopBar";
import { RoomListContainer } from "../chatRoom/RoomListContainer";
import { ChatRoomContainer } from "../chatRoom/ChatRoomContainer";
import { UserListContainer } from "../chatRoom/UserListContainer";
import { StickerSelector } from "../chatRoom/StickerSelector";

export function ChatRoom() {
  const { username } = useUser();
  useEffect(() => console.log(username))

  return <>
    <div style={{display:"flex", flexDirection:"column", height:"100vh"}}>
      <TopBar/>
      <div style={{display:"flex", flexDirection:"row", flexGrow:1}}>
        <RoomListContainer/>
        <div style={{display:"flex, flexDirection:column", flexGrow:1, backgroundColor:"lightblue"}}>
          <ChatRoomContainer/>
          <StickerSelector onSelect={(sticker: number) => {sticker;}} show={true}/>
        </div>
        <UserListContainer/>
      </div>
    </div>
  </>
}