import { UserProvider } from "../components/UserProvider";
import { ChatRoom } from "../components/pages/ChatRoom";

export default function ChatRoomPage() {
    return (
        <>
            <UserProvider>
                <ChatRoom/>
            </UserProvider>
        </>
    )
}