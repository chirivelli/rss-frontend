import { BrowserRouter, Route, Routes } from 'react-router'
import Layout from './components/Layout.jsx'
import Home from './components/Home.jsx'
import Subscriptions from './components/Subscriptions.jsx'

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path='subscriptions' element={<Subscriptions />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default App
