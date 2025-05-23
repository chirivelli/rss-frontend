import { NavLink } from 'react-router'

function NavBar() {
    return (
        <nav className='bg-slate-900'>
            <div className='mx-auto flex max-w-6xl items-center justify-between p-4'>
                <h1 className='font-serif text-2xl font-bold select-none'>
                    NewsStash
                </h1>

                <div className='flex gap-2'>
                    <NavLink
                        to='/'
                        className={({ isActive }) =>
                            `cursor-pointer rounded px-3 py-1 transition hover:bg-slate-600 ${isActive && 'bg-slate-700'}`
                        }
                    >
                        Home
                    </NavLink>

                    <NavLink
                        to='/subscriptions'
                        className={({ isActive }) =>
                            `cursor-pointer rounded px-3 py-1 transition hover:bg-slate-600 ${isActive && 'bg-slate-700'}`
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
