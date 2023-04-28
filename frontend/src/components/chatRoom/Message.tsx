import { MessageInterface } from "../../interfaces/MessageInterface";
import { stickers_url } from "../../data/Sticker";
import { avatars_url } from "../../data/Avatar";
import { dateToTimeString } from "../../utils/Utils";

interface Props {
    msg: MessageInterface,
}

export default function Message({ msg } : Props) {
    return (
        <div className="flex flex-row items-start my-4 p-2">
            <div className="p-2">
                <img src={avatars_url[msg.author?.avatar ?? 0]} alt="avatar" className="w-[40px] h-[40px] rounded-full" />
            </div>
            <div className={`flex flex-col w-full gap-y-2 px-2`}>
                <div className="flex w-full items-center h-fit">
                    <span className="text-md font-bold mr-2 ">
                        {msg.author?.name}
                    </span>
                    <span className="text-[10px] text-gray-500 pt-[5px]">
                        {dateToTimeString(new Date(msg.timestamp ?? 0))}
                    </span>
                </div> 
                <div className="flex w-full">
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
        </div>

    )
}