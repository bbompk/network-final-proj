export interface ChatRoomInterface {
    roomName: string;
    users: {
        name: string;
        avatar: string;
    } [];
}