import Home from './pages/Home.jsx'
import Library from './pages/Library.jsx'
import Search from './pages/Search.jsx'
import Trash from './pages/Trash.jsx'
import Settings from './pages/Settings.jsx'
import Account from './pages/Account.jsx'

function MainView(props) {
    return (
        <div className='p-5'>
            {props.activePage === 'Home' && <Home />}
            {props.activePage === 'Library' && <Library />}
            {props.activePage === 'Search' && <Search />}
            {props.activePage === 'Trash' && <Trash />}
            {props.activePage === 'Settings' && <Settings />}
            {props.activePage === 'Account' && <Account />}
        </div>
    )
}

export default MainView
