import { createContext, useContext, useState, useEffect } from "react";

import { useUser } from "./UserProvider";
import { SocketContextInterface } from "../interfaces/SocketContextInterface";
import { ChatRoomInterface } from "../interfaces/ChatRoomInterface";
import { io } from "socket.io-client";

const SocketContext = createContext<SocketContextInterface>({});

interface Props {
  children: React.ReactElement
}

export const SocketProvider = ({ children }: Props) => {
  const { username } = useUser();
  const [ socket, setSocket] = useState<any>(null);
  const [ chatRooms, setChatRooms] = useState<ChatRoomInterface[]>([]);
  
  useEffect(() => {
    console.log(username)
    if(!username)return;
    const s = io("http://localhost:2001", { transports: ["websocket"] });
    s.connect();
    console.log(s);
    setSocket(s);

    // catch ready event from server
    s.on("ready", ({chatRooms, mySocketId}:{chatRooms:ChatRoomInterface[], mySocketId:string}) => {
      setChatRooms(chatRooms)
    });

    return ()=>{
      s.disconnect();
      s.off("ready");
    }
  }, [username])

  return (
    <SocketContext.Provider value={{socket, chatRooms}}>
      {children}
    </SocketContext.Provider>
  )
}

export const useSocket = () => useContext(SocketContext);