import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router'
import './index.css'
import App from './App.jsx'
import Home from './components/Home.jsx'
import Subscriptions from './components/Subscriptions.jsx'

createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        <Routes>
            <Route path={'/'} element={<App />}>
                <Route path={'/'} element={<Home />} />
                <Route path={'subscriptions'} element={<Subscriptions />} />
            </Route>
        </Routes>
    </BrowserRouter>,
)
