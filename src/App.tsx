import { createBrowserRouter, RouterProvider } from 'react-router'
import Home from '@/routes/Home'
import RootLayout from '@/routes/RootLayout'
import Subscriptions from '@/routes/Subscriptions'
import Account from '@/routes/Account'

const router = createBrowserRouter([
    {
        path: '/',
        Component: RootLayout,
        errorElement: <div>Error loading page</div>,
        children: [
            { index: true, Component: Home },
            { path: 'subscriptions', Component: Subscriptions },
            { path: 'account', Component: Account },
        ],
    },
])

function App() {
    return <RouterProvider router={router} />
}

export default App
