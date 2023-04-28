import { stickers_url } from "../../data/Sticker";

interface StickerSelectorProps {
    onSelect: (sticker: number) => void,
    show: boolean,
}

export function StickerSelector({ onSelect, show }: StickerSelectorProps) {
    return (
        <div className={`flex flex-row flex-wrap justify-evenly items-center p-2 w-full bg-gray-600 bg-opacity-75 ${show? 'block': 'hidden'}`}>
            {stickers_url.map((sticker, index) => (
                <div key={index} className="flex justify-center p-2 h-fit w-fit rounded-lg hover:bg-gray-800 hover:bg-opacity-90 hover:cursor-pointer">
                    <img src={sticker} alt="sticker" className="w-[60px] h-[60px]" onClick={() => onSelect(index)} />
                </div>
            ))}
        </div>
    )
}