import Home from './pages/Home.jsx'
import Subscriptions from './pages/Subscriptions.jsx'

function Main(props) {
    return (
        <main className='grow bg-slate-800 p-5'>
            <div className='mx-auto max-w-6xl'>
                {props.activePage === 'Home' && <Home />}
                {props.activePage === 'Subscriptions' && <Subscriptions />}
            </div>
        </main>
    )
}

export default Main
