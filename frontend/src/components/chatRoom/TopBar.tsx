import { useUser } from "../UserProvider"
import { avatars_url } from "../../data/Avatar";

export function TopBar(){
  const { username, avatarIndex } = useUser();
  return <>
    <div style={{display:"flex", justifyContent:"flex-end", alignItems:"center", minWidth:"40rem", backgroundColor:"royalblue", height:"3rem",padding:"0.5rem"}}>
      {username}
      <div className="p-2">
        <img src={avatars_url[avatarIndex||0]} alt="avatar" className="w-[40px] h-[40px] rounded-full" />
      </div>
    </div>
  </>
}