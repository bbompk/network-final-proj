import { createContext, useContext, useState } from "react";
import { UserContextInterface } from "../interfaces/UserContextInterface";

const UserContext = createContext<UserContextInterface>({});

interface Props {
  children: React.ReactElement
}

export const UserProvider = ({ children }: Props) => {
  const [username, setUsername] = useState<string>("");
  const [room, setRoom] = useState<string>("");

  return (
    <UserContext.Provider value={{username, setUsername, room, setRoom}}>
      {children}
    </UserContext.Provider>
  )
}

export const useUser = () => useContext(UserContext);