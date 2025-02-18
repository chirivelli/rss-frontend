import Home from './pages/Home.jsx'
import Subscriptions from './pages/Subscriptions.jsx'

function MainView(props) {
    return (
        <div className='p-5'>
            {props.activePage === 'Home' && <Home />}
            {props.activePage === 'Subscriptions' && <Subscriptions />}
        </div>
    )
}

export default MainView
