import { MessageInterface } from "../../../interfaces/MessageInterface";

export function ChatNoti({message, show}: {message: MessageInterface, show:boolean}) {
    return (
        <div className={`fixed z-50 bottom-10 right-5 rounded-3xl bg-white w-80 h-24 shadow-md transition-all duration-500 ${show ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
            <div className="flex flex-col justify-center h-full p-6">
                <div className="text-md font-bold">{`${message.author?.name} says:`}</div>
                <div className="line-clamp-1 text-gray-800 text-sm">{message.message}</div>
            </div>
        </div>
    )
}