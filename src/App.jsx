import Sidebar from "./Components/Sidebar.jsx";
import MainView from "./Components/MainView.jsx";

function App() {

    return (
        <div className={'h-screen flex'}>
            <div className={'h-full w-60 bg-slate-900 text-gray-50'}>
                <Sidebar/>
            </div>
            <div className={'h-full grow bg-slate-800 text-gray-50'}>
                <MainView/>
            </div>
        </div>
    )
}

export default App
