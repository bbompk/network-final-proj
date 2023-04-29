import { ChatRoomInterface } from "./ChatRoomInterface";

export interface SocketContextInterface {
  socket?: string;
  chatRooms?: ChatRoomInterface[];
}