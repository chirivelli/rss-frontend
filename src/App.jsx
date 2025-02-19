import NavBar from './components/NavBar.jsx'
import Main from './components/Main.jsx'
import { useState } from 'react'

function App() {
    const [activePage, setActivePage] = useState('Home')

    return (
        <div className='flex h-screen flex-col text-gray-50'>
            <NavBar activePage={activePage} setActivePage={setActivePage} />

            <Main activePage={activePage} />
        </div>
    )
}

export default App
