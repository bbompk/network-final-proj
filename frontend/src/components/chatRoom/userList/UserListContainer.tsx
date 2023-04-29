import { avatars_url } from "../../../data/Avatar";
import { useSocket } from "../../SocketProvider"
import { UserInterface } from "../../../interfaces/UserInterface";
import { useUser } from "../../UserProvider";

export function UserListContainer() {
  const { users, checkDm, socket } = useSocket();
  const { room } = useUser();
  const handleClick = (user: UserInterface) => {
    if(checkDm && user.id && user.id !== socket?.id && user.id !== room){
      checkDm(user.id);
    }
  }
  return <>
  <div style={{height:"100%", width:"20%", minWidth:"10rem", maxWidth:"14rem", padding:"14px 9px", backgroundColor:"lightsalmon", flex:"1 1 auto", overflowY:"auto"}}>
    <label style={{fontSize:"14px", paddingLeft:"6px"}}>ONLINE - {users?.length}</label>
    {users?.map((user, idx) => (
        <div key={idx} className="flex items-center py-1 px-1 h-fit w-100 rounded-lg hover:bg-gray-800 hover:bg-opacity-20 hover:cursor-pointer"
        onClick={() => handleClick(user)}>
            <img src={avatars_url[user.avatar ?? 0]} alt="avatar" className="w-[40px] h-[40px] mr-2"/>
            <label style={{textOverflow:"ellipsis"}}>{user.name}</label>
        </div>
    ))}
  </div>
  </>
}