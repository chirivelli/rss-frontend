function NavBar(props) {
    return (
        <nav className='bg-slate-900 p-4'>
            <div className='mx-auto flex max-w-6xl items-center justify-between'>
                <h1 className='font-serif text-2xl font-bold select-none'>
                    RSS Reader
                </h1>

                <ol className='flex gap-2'>
                    <li
                        className={`cursor-pointer rounded-sm px-4 py-2 transition hover:bg-slate-600 ${props.activePage === 'Home' && 'bg-slate-700'}`}
                        onClick={() => props.setActivePage('Home')}
                    >
                        Home
                    </li>
                    <li
                        className={`cursor-pointer rounded-sm px-4 py-2 transition hover:bg-slate-600 ${props.activePage === 'Subscriptions' && 'bg-slate-700'}`}
                        onClick={() => props.setActivePage('Subscriptions')}
                    >
                        Subscriptions
                    </li>
                </ol>
            </div>
        </nav>
    )
}

export default NavBar
