import NavBar from './components/NavBar.jsx'
import { Outlet } from 'react-router'
import { createContext, useEffect, useState } from 'react'

export const FeedContext = createContext()

function App() {
    const [articles, setArticles] = useState([])

    useEffect(() => {
        fetch('http://localhost:3000/articles', {
            method: 'GET',
            headers: { 'X-Username': 'sathwikc' },
        })
            .then(res => res.json())
            .then(res => setArticles(res))
    }, [])

    return (
        <FeedContext value={articles}>
            <div className='flex h-screen flex-col text-gray-50'>
                <NavBar />
                <Outlet />
            </div>
        </FeedContext>
    )
}

export default App
