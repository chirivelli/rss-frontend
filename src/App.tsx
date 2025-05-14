import { createBrowserRouter, RouterProvider } from 'react-router'
import Layout from './components/Layout'
import Home from './components/Home'
import Subscriptions from './components/Subscriptions'

const router = createBrowserRouter([
    {
        path: '/',
        Component: Layout,
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
