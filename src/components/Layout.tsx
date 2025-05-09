import NavBar from './NavBar.js'
import { Outlet } from 'react-router'

export default function Layout() {
    return (
        <div className='flex h-screen flex-col text-gray-50'>
            <NavBar />
            <Outlet />
        </div>
    )
}
