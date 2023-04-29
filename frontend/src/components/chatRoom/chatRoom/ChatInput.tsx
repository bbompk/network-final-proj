import { StickerSelector } from "./StickerSelector"
import { useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSmile, faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { useUser } from "../../UserProvider";
import { useSocket } from "../../SocketProvider"
import { MessageInterface } from "../../../interfaces/MessageInterface";

export default function ChatInput () {
    const { username, avatarIndex, room } = useUser();
    const [showStickerSelector, setShowStickerSelector] = useState(false);
    const { sendMessage } = useSocket();

    const handleSendMsg = () => {
        const msg = (document.getElementById("input-message") as HTMLTextAreaElement).value;
        if(msg.trim() === "") return;
        const msgObj: MessageInterface = {
            author: {
                name: username,
                avatar: avatarIndex
            },
            message: msg,
            isSticker: false,
            sticker: -1,
        }
        console.log(msgObj);
        console.log('sending msg to room ' + room);
        if(sendMessage) sendMessage(msgObj);
        (document.getElementById("input-message") as HTMLTextAreaElement).value = "";
    }

    const handleSendSticker = (sticker: number) => {
        const msgObj: MessageInterface = {
            author: {
                name: username,
                avatar: avatarIndex
            },
            isSticker: true,
            sticker: sticker,
        }
        console.log(msgObj);
        console.log('sending sticker to room ' + room);
        if(sendMessage) sendMessage(msgObj);
        setShowStickerSelector(false);
    }


    return (<div>
        <StickerSelector onSelect={handleSendSticker} show={showStickerSelector} className="realtive"/>
        <div className="flex flex-row gap-6 justify-center w-full p-4 pb-6 bg-gray-600">
            <textarea 
            id="input-message" rows={1} 
            className="flex  flex-grow w-ull p-2 rounded-md bg-gray-300" 
            onKeyDown={(e) => {
                if(e.key === 'Enter' && !e.shiftKey) {
                    e.preventDefault();
                    handleSendMsg()
                }
            }}
            />
            <button onClick={handleSendMsg}> 
                <FontAwesomeIcon icon={faPaperPlane} className="text-2xl text-gray-400 hover:text-gray-700 hover:cursor-pointer" />
            </button>
            <button onClick={() => setShowStickerSelector(!showStickerSelector)}>
                <FontAwesomeIcon icon={faSmile} className="text-2xl text-gray-400 hover:text-gray-700 hover:cursor-pointer" />
            </button>
        </div>
    </div>)
}