import { useUser } from "../UserProvider"
import { useEffect, useState } from "react";
import { TopBar } from "../chatRoom/TopBar";
import { RoomListContainer } from "../chatRoom/RoomListContainer";
import { ChatRoomContainer } from "../chatRoom/ChatRoomContainer";
import { UserListContainer } from "../chatRoom/UserListContainer";
import { StickerSelector } from "../chatRoom/StickerSelector";
import { io } from "socket.io-client";

export function ChatRoom() {
  const { username } = useUser();
  const [socket, setSocket] = useState<any>(null);

  useEffect(() => {
    console.log(username);
    const s = io("http://localhost:2001", { transports: ["websocket"] });
    s.on("ready", () => {
      console.log("connected");
    });

    setSocket(s);
  }, [])

  return <>
    <div style={{display:"flex", flexDirection:"column", height:"100vh"}}>
      <TopBar/>
      <div style={{display:"flex", flexDirection:"row", flexGrow:1}}>
        <RoomListContainer/>
        <div style={{display:"flex, flexDirection:column", flexGrow:1, backgroundColor:"lightblue"}}>
          <ChatRoomContainer/>
          <StickerSelector onSelect={(sticker: number) => {console.log(sticker);}} show={true}/>
        </div>
        <UserListContainer/>
      </div>
    </div>
  </>
}