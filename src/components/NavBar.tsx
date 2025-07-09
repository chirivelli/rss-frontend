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
                        <svg
                            xmlns='http://www.w3.org/2000/svg'
                            fill='none'
                            viewBox='0 0 24 24'
                            strokeWidth={1.5}
                            stroke='currentColor'
                            className='size-6'
                        >
                            <path
                                strokeLinecap='round'
                                strokeLinejoin='round'
                                d='M12.75 19.5v-.75a7.5 7.5 0 0 0-7.5-7.5H4.5m0-6.75h.75c7.87 0 14.25 6.38 14.25 14.25v.75M6 18.75a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z'
                            />
                        </svg>
                    </NavLink>

                    <NavLink
                        to='/subscriptions'
                        className={({ isActive }) =>
                            `cursor-pointer rounded px-3 py-1 transition hover:bg-slate-600 ${isActive && 'bg-slate-700'}`
                        }
                    >
                        <svg
                            xmlns='http://www.w3.org/2000/svg'
                            fill='none'
                            viewBox='0 0 24 24'
                            strokeWidth={1.5}
                            stroke='currentColor'
                            className='size-6'
                        >
                            <path
                                strokeLinecap='round'
                                strokeLinejoin='round'
                                d='M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z'
                            />
                        </svg>
                    </NavLink>

                    {/* <NavLink
                        to='account'
                        className={({ isActive }) =>
                            `cursor-pointer rounded px-3 py-1 transition hover:bg-slate-600 ${isActive && 'bg-slate-700'}`
                        }
                    >
                        <svg
                            xmlns='http://www.w3.org/2000/svg'
                            fill='none'
                            viewBox='0 0 24 24'
                            strokeWidth={1.5}
                            stroke='currentColor'
                            className='size-6'
                        >
                            <path
                                strokeLinecap='round'
                                strokeLinejoin='round'
                                d='M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z'
                            />
                        </svg>
                    </NavLink> */}
                </div>
            </div>
        </nav>
    )
}

export default NavBar
