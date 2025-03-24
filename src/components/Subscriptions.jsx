import { useEffect, useState } from 'react'

function Subscriptions() {
    const [user, setUser] = useState()

    const updateUser = async () => {
        const res = await fetch('http://localhost:3000/users', {
            method: 'GET',
            headers: { 'X-Username': 'sathwikc' },
        })
        const data = await res.json()
        setUser(data)
        return data
    }

    const handleDelete = async sub => {
        await fetch('http://localhost:3000/subscriptions', {
            method: 'DELETE',
            headers: { 'X-Username': 'sathwikc' },
            body: JSON.stringify(sub),
        })
        await updateUser()
    }

    const handleSubmit = async formData => {
        await fetch('http://localhost:3000/subscriptions', {
            method: 'POST',
            headers: { 'X-Username': 'sathwikc' },
            body: JSON.stringify(Object.fromEntries(formData)),
        })
        await updateUser()
    }

    useEffect(() => {
        updateUser().then(user => console.log(user))
    }, [])

    return (
        <div className='grow bg-slate-800'>
            <div className='mx-auto max-w-6xl p-4'>
                <form action={handleSubmit}>
                    <table className='w-full rounded-md bg-slate-700'>
                        <thead>
                            <tr>
                                <th className='p-4 text-left font-normal'>
                                    <input
                                        type='text'
                                        name='name'
                                        placeholder='Feed Name'
                                        className='rounded-md bg-slate-200 px-4 py-2 text-gray-950'
                                    />
                                </th>
                                <th className='p-4 text-left font-normal'>
                                    <input
                                        type='url'
                                        name='link'
                                        placeholder='https://feed.link/rss'
                                        className='rounded-md bg-slate-200 px-4 py-2 text-gray-950'
                                    />
                                </th>
                                <th className='p-4 text-left font-normal'>
                                    <button className='rounded-md bg-slate-500 px-4 py-2 transition hover:cursor-pointer hover:bg-slate-600/80'>
                                        + Add
                                    </button>
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {user?.subscriptions.map((sub, index) => (
                                <tr
                                    className='border-t-1 border-slate-600'
                                    key={index}
                                >
                                    <td className='p-4'>{sub?.name}</td>
                                    <td className='p-4 text-sm text-blue-400 italic'>
                                        {sub?.link}
                                    </td>
                                    <td className='p-4'>
                                        <svg
                                            xmlns='http://www.w3.org/2000/svg'
                                            fill='none'
                                            viewBox='0 0 24 24'
                                            stroke='currentColor'
                                            className='size-6 cursor-pointer'
                                            onClick={() => handleDelete(sub)}
                                        >
                                            <path d='M15 12H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z' />
                                        </svg>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </form>
            </div>
        </div>
    )
}

export default Subscriptions
