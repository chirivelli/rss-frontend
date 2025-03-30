import { useEffect, useState } from 'react'
import {
    getSubscriptions,
    postSubscription,
    deleteSubscription,
} from '../api.js'

function Subscriptions() {
    const [subscriptions, setSubscriptions] = useState([])

    const fetchSubscriptions = async () => {
        const data = await getSubscriptions()
        setSubscriptions(data)
    }

    const formAction = async sub => {
        await postSubscription(sub)
        await fetchSubscriptions()
    }

    const handleClick = async sub => {
        await deleteSubscription(sub)
        await fetchSubscriptions()
    }

    useEffect(() => {
        fetchSubscriptions()
    }, [])

    return (
        <div className='grow bg-slate-800'>
            <div className='mx-auto max-w-6xl overflow-x-auto p-4'>
                <form action={formAction}>
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
                                        Add
                                    </button>
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {subscriptions.map(sub => (
                                <tr
                                    className='border-t-1 border-slate-600'
                                    key={sub._id}
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
                                            onClick={() => handleClick(sub)}
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
