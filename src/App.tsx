import { createBrowserRouter, RouterProvider } from 'react-router'
import Home from '@/routes/Home'
import RootLayout from '@/routes/RootLayout'
import Subscriptions from '@/routes/Subscriptions'

const router = createBrowserRouter([
    {
        path: '/',
        Component: RootLayout,
        children: [
            { index: true, Component: Home },
            { path: 'subscriptions', Component: Subscriptions },
        ],
    },
])

function App() {
    return <RouterProvider router={router} />
}

export default App
