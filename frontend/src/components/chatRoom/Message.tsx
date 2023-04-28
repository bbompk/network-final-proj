import { MessageInterface } from "../../interfaces/MessageInterface";
import { stickers_url } from "../../data/Sticker";
import { dateToTimeString } from "../../utils/Utils";

interface Props {
    msg: MessageInterface,
}

export default function Message({ msg } : Props) {
    return (
        <div className={`flex flex-col w-full my-4 gap-2`}>
            <div className="flex w-full px-4 items-center h-fit">
                <span className="text-md font-bold mr-2 ">
                    {msg.author?.name}
                </span>
                <span className="text-[10px] text-gray-500 pt-[5px]">
                    {dateToTimeString(new Date(msg.timestamp ?? 0))}
                </span>
            </div> 
            <div className="flex w-full px-4">
                {
                    msg.isSticker 
                    ? <div className="flex w-full p-2 px-4  bg-gray-400">
                        <img src={stickers_url[msg.sticker ?? 0]} alt="sticker" className="w-[120px] h-[120px]" />
                    </div> 
                    : <div className="flex w-full p-2 px-6  text-sm bg-gray-400">
                        {msg.message}
                    </div>
                }
            </div>
        </div>
    )
}