import NavBar from './components/NavBar.jsx'
import { Outlet } from 'react-router'
import { createContext, useEffect, useState } from 'react'

export const UserContext = createContext()
export const FeedContext = createContext()

function App() {
    const [user, setUser] = useState()
    const [articles, setArticles] = useState([])

    useEffect(() => {
        fetch('http://localhost:3000/users', {
            method: 'GET',
            headers: {
                'X-Username': 'sathwikc',
            },
        })
            .then(res => res.json())
            .then(res => setUser(res))

        fetch('http://localhost:3000/articles', {
            method: 'GET',
            headers: {
                'X-Username': 'sathwikc',
            },
        })
            .then(res => res.json())
            .then(res => setArticles(res))
    }, [])

    return (
        <UserContext.Provider value={{ user, setUser }}>
            <FeedContext.Provider value={articles}>
                <div className='flex h-screen flex-col text-gray-50'>
                    <NavBar />
                    <Outlet />
                </div>
            </FeedContext.Provider>
        </UserContext.Provider>
    )
}

export default App
