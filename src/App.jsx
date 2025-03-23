import NavBar from './components/NavBar.jsx'
import { Outlet } from 'react-router'

function App() {
    return (
        <div className='flex h-screen flex-col text-gray-50'>
            <NavBar />

            <Outlet />
        </div>
    )
}

export default App
