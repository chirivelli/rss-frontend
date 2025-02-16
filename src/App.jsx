import Sidebar from './components/Sidebar.jsx'
import MainView from './components/MainView.jsx'
import { useState } from 'react'

function App() {
    const [activePage, setActivePage] = useState('Home')

    return (
        <div className='flex text-gray-50'>
            <div className={'w-60 bg-slate-900'}>
                <Sidebar setActivePage={setActivePage} />
            </div>
            <div className='grow bg-slate-800'>
                <MainView activePage={activePage} />
            </div>
        </div>
    )
}

export default App
