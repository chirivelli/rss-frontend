import { createBrowserRouter, RouterProvider } from 'react-router'
import Home from './pages/Home'
import RootLayout from './pages/RootLayout'
import Subscriptions from './pages/Subscriptions'

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
