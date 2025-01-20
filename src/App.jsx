import Sidebar from "./components/Sidebar.jsx";
import MainView from "./components/MainView.jsx";
import InfoBar from "./components/InfoBar.jsx";
import {useState} from "react";

function App() {

    const [activePage, setActivePage] = useState('Home')

    return (
        <div className={'h-screen flex'}>
            <div className={'h-full w-60 bg-slate-900 text-gray-50'}>
                <Sidebar setActivePage={setActivePage}/>
            </div>
            <div className={'h-full grow bg-slate-800 text-gray-50'}>
                <MainView activePage={activePage}/>
            </div>
            <div className={'h-full w-60 bg-slate-950 text-gray-50'}>
                <InfoBar/>
            </div>
        </div>
    )
}

export default App
