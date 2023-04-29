import { useState } from "react";
import { useSocket } from "../../SocketProvider"
import { CreateRoomContainer } from "./CreateRoomContainer";
import { RoomNameContainer } from "./RoomNameContainer";

export function RoomListContainer() {
  const  [searchRoomInput, setSearchRoomInput ] = useState<string>("");
  const { chatRooms } = useSocket(); 

  const filteredChatRooms = chatRooms?.filter((chatRoom)=>{
    return chatRoom.roomName.startsWith(searchRoomInput);
  })

  return <>
  <div style={{ display:"flex", flexDirection:"column", height:"100%", width:"20%", minWidth:"10rem", maxWidth:"14rem", flex:"1 1 auto", overflowY:"auto"}}>
    <input 
      type="text" 
      id="search-room" 
      value={searchRoomInput} 
      onChange={e=>{setSearchRoomInput(e.target.value)}} 
      placeholder="Search room. . ." 
      style={{ width:"100%", padding:"0.3rem", height:"3rem"}}
    />
    <div 
      style={{ flexGrow:1, display:"flex", flexDirection:"column", overflow:"auto", width:"100%"}}
      className="bg-cyan-200"
      >
    {
      filteredChatRooms && filteredChatRooms.map((chatRoom,index)=>{
        return <div key={index}>
          <RoomNameContainer chatRoom={chatRoom}/>
        </div>
      })
    }
    </div>
    <CreateRoomContainer/>
  </div>
  </>
}