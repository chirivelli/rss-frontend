import { useContext, useEffect, useState } from 'react'
import { UserContext } from '../App.jsx'

function Subscriptions() {
    const user = useContext(UserContext)

    const [feedName, setFeedName] = useState('')
    const [feedLink, setFeedLink] = useState('')

    return (
        <div className='grow bg-slate-800'>
            <div className='mx-auto max-w-6xl p-4'>
                {/* Input */}
                <div className='flex items-center gap-10'>
                    <input
                        type='text'
                        value={feedName}
                        onChange={e => setFeedName(e.target.value)}
                        placeholder='Sub Name'
                        className='rounded-md border border-gray-200 bg-gray-200 px-4 py-2 text-gray-950 placeholder-gray-500'
                    />
                    <input
                        type='text'
                        value={feedLink}
                        onChange={e => setFeedLink(e.target.value)}
                        placeholder='http://feed.link/rss'
                        className='rounded-md border border-gray-200 bg-gray-200 px-4 py-2 text-gray-950 placeholder-gray-500'
                    />
                    <button
                        className='rounded-md bg-slate-500 px-4 py-2 transition hover:cursor-pointer hover:bg-slate-600/80'
                        onClick={() => {
                            fetch('http://localhost:3000/subscriptions', {
                                method: 'POST',
                                headers: {
                                    'X-Username': 'sathwikc',
                                },
                                body: JSON.stringify({
                                    name: feedName,
                                    link: feedLink,
                                }),
                            })
                                .then(res => res.json())
                                .then(() => {
                                    setSubs(prev => [
                                        ...prev,
                                        { name: feedName, link: feedLink },
                                    ])
                                })
                        }}
                    >
                        + Add
                    </button>
                </div>
                {/* List */}
                <div>
                    <table className='mt-5 w-full'>
                        <tbody>
                            {user?.subscriptions.map((sub, index) => (
                                <tr
                                    className='border-b-1 border-slate-600'
                                    key={index}
                                >
                                    <td className='p-4'>
                                        <svg
                                            xmlns='http://www.w3.org/2000/svg'
                                            fill='none'
                                            viewBox='0 0 24 24'
                                            stroke='currentColor'
                                            className='size-6 cursor-pointer'
                                            onClick={() => {
                                                fetch(
                                                    'http://localhost:3000/subscriptions',
                                                    {
                                                        method: 'DELETE',
                                                        headers: {
                                                            'X-Username':
                                                                'sathwikc',
                                                        },
                                                        body: JSON.stringify(
                                                            sub,
                                                        ),
                                                    },
                                                )
                                                    .then(res => res.json())
                                                    .then(res =>
                                                        console.log(res),
                                                    )
                                                    .then(res => {
                                                        setSubs(
                                                            subs.filter(
                                                                x =>
                                                                    x.link !==
                                                                    sub.link,
                                                            ),
                                                        )
                                                    })
                                            }}
                                        >
                                            <path d='M15 12H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z' />
                                        </svg>
                                    </td>
                                    <td className='p-4'>{sub?.name}</td>
                                    <td className='p-4 text-sm text-blue-400 italic'>
                                        {sub?.link}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Subscriptions
