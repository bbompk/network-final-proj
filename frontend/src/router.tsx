import { createBrowserRouter } from 'react-router-dom'
import App from './App.tsx'

const router = createBrowserRouter([
    {
        path: '',
        errorElement: <div>Not Found</div>,
        children: [
            { path: '/', element: <App/>, index: true },
        ]
    },
    { path: '*', element: <div>Not Found</div> }
])

export default router
