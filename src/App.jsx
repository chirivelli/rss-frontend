import Sidebar from './components/Sidebar.jsx'
import MainView from './components/MainView.jsx'
import { useState } from 'react'

function App() {
    const [activePage, setActivePage] = useState('Subscriptions')

    return (
        <div className='flex h-screen text-gray-50'>
            <div className={'h-full w-60 bg-slate-900'}>
                <Sidebar setActivePage={setActivePage} />
            </div>
            <div className='h-full grow bg-slate-800'>
                <MainView activePage={activePage} />
            </div>
            {/*<div className='h-full w-60 bg-slate-950'>*/}
            {/*    <InfoBar />*/}
            {/*</div>*/}
        </div>
    )
}

export default App
