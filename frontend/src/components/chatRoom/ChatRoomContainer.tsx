import Message from "./Message"

export function ChatRoomContainer() {
  return <>
  <div style={{height:"100%", minWidth:"20rem", flexGrow:1, backgroundColor:"lightblue"}}>
    <Message msg={{author:{name:"Tourist", avatar:1}, timestamp:new Date(), message:"Occaecat culpa enim elit esse fugiat occaecat laboris. Anim dolore elit velit occaecat. Commodo Lorem ipsum nostrud cupidatat dolor occaecat aliquip dolore reprehenderit voluptate est consectetur ex nisi. Eiusmod adipisicing Lorem sint nulla."}}/>
    <Message msg={{author:{name:"Guide", avatar:2}, timestamp:new Date(), isSticker:true, sticker:1}}/>
  </div>
  </>
}