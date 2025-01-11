import Sidebar from "./Components/Sidebar.jsx";
import MainView from "./Components/MainView.jsx";
import InfoBar from "./Components/InfoBar.jsx";

function App() {

    return (
        <div className={'h-screen flex'}>
            <div className={'h-full w-60 bg-slate-900 text-gray-50'}>
                <Sidebar/>
            </div>
            <div className={'h-full grow bg-slate-800 text-gray-50'}>
                <MainView/>
            </div>
            <div className={'h-full w-60 bg-slate-950 text-gray-50'}>
                <InfoBar/>
            </div>
        </div>
    )
}

export default App
