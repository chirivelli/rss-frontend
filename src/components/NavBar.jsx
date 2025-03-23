import { NavLink } from 'react-router'

function NavBar() {
    return (
        <nav className='bg-slate-900 p-4'>
            <div className='mx-auto flex max-w-6xl items-center justify-between'>
                <h1 className='font-serif text-2xl font-bold select-none'>
                    RSS Reader
                </h1>

                <div className='flex gap-2'>
                    <NavLink
                        to='/'
                        className={({ isActive }) =>
                            `cursor-pointer rounded px-4 py-2 transition hover:bg-slate-600 ${isActive && 'bg-slate-700'}`
                        }
                    >
                        Home
                    </NavLink>

                    <NavLink
                        to='/subscriptions'
                        className={({ isActive }) =>
                            `cursor-pointer rounded px-4 py-2 transition hover:bg-slate-600 ${isActive && 'bg-slate-700'}`
                        }
                    >
                        Subscriptions
                    </NavLink>
                </div>
            </div>
        </nav>
    )
}

export default NavBar
