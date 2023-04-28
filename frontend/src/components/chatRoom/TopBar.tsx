import { useUser } from "../UserProvider"

export function TopBar(){
  const { username } = useUser();
  return <>
    <div style={{display:"flex", justifyContent:"flex-end", alignItems:"center", minWidth:"40rem", backgroundColor:"royalblue", height:"3rem",padding:"0.5rem"}}>
      {username}
    </div>
  </>
}