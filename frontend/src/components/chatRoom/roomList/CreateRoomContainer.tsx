import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { useSocket } from "../../SocketProvider";

export function CreateRoomContainer() {
  const [ roomNameInput, setRoomNameInput ] = useState<string>(""); 
  const { createRoom } = useSocket();
  const onClick = ()=>{
    if(roomNameInput==="")return;
    if(!createRoom)return;
    createRoom(roomNameInput);
    setRoomNameInput("");
  }

  return <>
  <div style={{height:"3rem", width:"100%", display:"flex", flexDirection:"row", padding:"2rem 0.5rem", alignItems:"center", marginBottom:"auto"}}>
    <input type="text" id="new-room-name" value={roomNameInput} onChange={e=>{setRoomNameInput(e.target.value)}} placeholder="Add new room . . ." style={{ width:"0", flex:"1 1 auto", borderRadius:"6px", marginRight:"0.5rem", padding:"0.4rem 1rem"}}/>
    <button className="rounded-full bg-slate-700 text-slate-900 w-10 h-10 hover:rounded-lg hover:bg-slate-950 hover:text-slate-400" onClick={onClick}>
      <FontAwesomeIcon icon={faPlus} size="xl" style={{flex:"0 1 auto"}} />
    </button>
  </div>
  </>
}