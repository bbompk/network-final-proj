import { useUser } from "../UserProvider"
import { useEffect, useState } from "react";
import { TopBar } from "../chatRoom/TopBar";
import { RoomListContainer } from "../chatRoom/roomList/RoomListContainer";
import { ChatRoomContainer } from "../chatRoom/chatRoom/ChatRoomContainer";
import { UserListContainer } from "../chatRoom/userList/UserListContainer";
import { StickerSelector } from "../chatRoom/chatRoom/StickerSelector";
import { io } from "socket.io-client";
import { ChatRoomInterface } from "../../interfaces/ChatRoomInterface";

export function ChatRoom() {
  const { username, avatarIndex } = useUser();
  const [socket, setSocket] = useState<any>(null);

  useEffect(() => {
    console.log(username);
    console.log(avatarIndex);
    const s = io("http://localhost:2001", { transports: ["websocket"] });

    s.on("ready", ({chatRooms, mySocketId}:{chatRooms:ChatRoomInterface[], mySocketId:string}) => {
      console.log(chatRooms);
    });

    setSocket(s);
  }, [username])

  return <>
    <div style={{display:"flex", flexDirection:"column", height:"100vh"}}>
      <TopBar/>
      <div style={{display:"flex", flexDirection:"row", height:"calc(100vh - 3rem)"}}>
        <RoomListContainer/>
        <div style={{display:"flex", flexDirection:"column", flexGrow:1, backgroundColor:"lightblue"}}>
          <ChatRoomContainer/>
          <StickerSelector onSelect={(sticker: number) => {console.log(sticker);}} show={true}/>
        </div>
        <UserListContainer/>
      </div>
    </div>
  </>
}