import { useEffect, useState } from 'react'
import './App.css'
import { io } from 'socket.io-client'

function App() {
  const [pageIndex, setPageIndex] = useState<number>(0);
  // const [count, setCount] = useState(0)
  // useEffect(() => {
  //   const socket = io('http://localhost:2001/', { transports : ['websocket'] })
  // }, [])
  const goToChatRoomPage = () => {
    setPageIndex(1);
  }
    return (
    <>
      <div></div>
    </>
  )
}

export default App
