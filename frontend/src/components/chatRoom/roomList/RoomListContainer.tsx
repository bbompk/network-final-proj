import { useSocket } from "../../SocketProvider"

export function RoomListContainer() {
  const { chatRooms } = useSocket(); 
  return <>
  <div style={{display:"flex", flexDirection:"column", height:"100%", width:"20%", minWidth:"10rem", maxWidth:"14rem", backgroundColor:"coral", flex:"1 1 auto", overflowY:"auto"}}>
    {
      chatRooms && chatRooms.map((chatRoom)=>{
        return <>{chatRoom.roomName}</>
      })
    }

  </div>
  </>
}