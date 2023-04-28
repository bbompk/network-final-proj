import { createContext, useContext, useState, useEffect } from "react";
import { UserContextInterface } from "../interfaces/UserContextInterface";

const UserContext = createContext<UserContextInterface>({});

interface Props {
  children: React.ReactElement
}

export const UserProvider = ({ children }: Props) => {
  const [username, setUsername] = useState<string>("");
  const [room, setRoom] = useState<string>("");

  useEffect(()=>{
    if(sessionStorage.getItem('username') !== null){
      setUsername(JSON.parse(sessionStorage.getItem('username')!));
    }
    if(sessionStorage.getItem('room') !== null){
      setRoom(JSON.parse(sessionStorage.getItem('room')!));
    }
  },[])

  function changeUsername(newName:string) {
    setUsername(newName);
    sessionStorage.setItem('username', newName)
  }

  function changeRoom(newRoom:string) {
    setRoom(newRoom);
    sessionStorage.setItem('room', newRoom)
  }

  return (
    <UserContext.Provider value={{username, changeUsername, room, changeRoom}}>
      {children}
    </UserContext.Provider>
  )
}

export const useUser = () => useContext(UserContext);