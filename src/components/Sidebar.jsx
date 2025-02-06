function Sidebar(props) {
    const pages = [
        { name: 'Home' },
        { name: 'Subscriptions' },
        { name: 'Search' },
        { name: 'Trash' },
        { name: 'Settings' },
        { name: 'Account' },
    ]
    return (
        <div className='flex h-full flex-col p-5'>
            <h1 className='font-serif text-xl font-bold select-none'>
                RSS Reader
            </h1>

            <div className='mt-4 flex grow flex-col justify-between'>
                <div className='flex flex-col gap-4'>
                    {pages.map(page => (
                        <div
                            className='flex cursor-pointer gap-1 rounded-sm p-2 hover:bg-slate-700'
                            onClick={() => props.setActivePage(page.name)}
                        >
                            {page.icon}
                            <h1 className='select-none'>{page.name}</h1>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Sidebar
