import { MessageInterface } from "../../../interfaces/MessageInterface";

export function ChatNoti({message, show}: {message: MessageInterface, show:boolean}) {
    return (
        <div className={`fixed z-[2020] bottom-[90px] right-10 rounded-3xl bg-white w-64 h-32 drop-shadow-lg ${show ? 'block': 'hidden'}`}>
            <div className="flex flex-col p-6 gap-2 justify-center">
                <div className="text-md">{`${message.author?.name} says:`}</div>
                <div className="line-clamp-2 overflow-hidden text-gray-800 text-sm">{message.message}</div>
            </div>
        </div>
    )
}