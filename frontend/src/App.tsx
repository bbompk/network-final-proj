import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { io } from 'socket.io-client'

import { LoginPage } from './Page/LoginPage'
import { ChatRoomPage } from './Page/ChatRoomPage'

import { UserProvider, useUser } from './components/UserProvider'

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
    <UserProvider>
      {
        pageIndex===0 
        ? <LoginPage goToChatRoomPage={goToChatRoomPage}/>
        : <ChatRoomPage/>
      }
    </UserProvider>
    </>
  )
}

export default App
