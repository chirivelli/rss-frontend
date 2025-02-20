import { useEffect, useState } from 'react'

function Subscriptions() {
    const [subs, setSubs] = useState([])
    const [subName, setSubName] = useState('')
    const [feedLink, setFeedLink] = useState('')

    useEffect(() => {
        fetch('http://localhost:3000/subscriptions/sathwikc')
            .then(res => res.json())
            .then(data => {
                console.log('json')
                console.log(data)
                setSubs(data)
            })
    }, [])

    return (
        <div>
            <div className='flex items-center gap-10'>
                <input
                    type='text'
                    value={subName}
                    onChange={e => setSubName(e.target.value)}
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
                        // fetch('http://localhost:3000/subscriptions', {
                        //     method: 'POST',
                        //     headers: {
                        //         'Content-Type': 'application/json',
                        //     },
                        //     body: JSON.stringify({
                        //         user_id: 1,
                        //         name: subName,
                        //         feed_link: feedLink,
                        //     }),
                        // })
                        //     .then(r => r.text())
                        //     .then(data => console.log(data))
                    }}
                >
                    + Add
                </button>
            </div>
            <div>
                <table className='mt-5 w-full'>
                    <tbody>
                        {subs.map((sub, i) => (
                            <tr className='border-b-1 border-slate-600' key={i}>
                                <td className='p-4'>
                                    <svg
                                        xmlns='http://www.w3.org/2000/svg'
                                        fill='none'
                                        viewBox='0 0 24 24'
                                        stroke='currentColor'
                                        className='size-6'
                                    >
                                        <path d='M15 12H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z' />
                                    </svg>
                                </td>
                                <td className='p-4'>{sub?.name}</td>
                                <td className='p-4 text-sm text-blue-400 italic'>
                                    {sub?.feed_link}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Subscriptions
