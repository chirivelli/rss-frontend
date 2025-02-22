import Home from './pages/Home.jsx'
import Subscriptions from './pages/Subscriptions.jsx'
import Account from './pages/Account.jsx'
import { useEffect, useState } from 'react'

function Main(props) {
    const [user, setUser] = useState()

    useEffect(() => {
        fetch('http://localhost:3000/users', {
            method: 'GET',
            headers: {
                'X-Username': 'sathwikc',
            },
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setUser(data)
            })
    }, [])

    return (
        <main className='grow bg-slate-800 p-5'>
            <div className='mx-auto max-w-6xl'>
                {props.activePage === 'Home' && <Home user={user} />}
                {props.activePage === 'Subscriptions' && (
                    <Subscriptions user={user} />
                )}
                {props.activePage === 'Account' && <Account user={user} />}
            </div>
        </main>
    )
}

export default Main
