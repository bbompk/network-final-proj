import { ChatRoomInterface } from "./ChatRoomInterface";
import { MessageInterface } from "./MessageInterface";
import { UserInterface } from "./UserInterface";

export interface SocketContextInterface {
  socket?: string;
  chatRooms?: ChatRoomInterface[];
  users?: UserInterface[];
  messages?: MessageInterface[];
  createRoom?: (roomName:string)=>void;
  joinRoom?: (roomName:string)=>void;
  leaveRoom?: ()=>void;
  sendMessage?:(message:MessageInterface)=>void;
}