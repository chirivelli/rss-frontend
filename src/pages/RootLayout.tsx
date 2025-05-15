import NavBar from '../components/NavBar'
import { Outlet } from 'react-router'

export default function RootLayout() {
    return (
        <div className='flex h-screen flex-col text-gray-50'>
            <NavBar />
            <div className='grow bg-slate-800'>
                <div className='mx-auto max-w-6xl overflow-x-auto p-4'>
                    <Outlet />
                </div>
            </div>
        </div>
    )
}
