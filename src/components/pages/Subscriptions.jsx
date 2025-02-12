import { useEffect, useState } from 'react'

function Subscriptions() {
    const [subs, setSubs] = useState([
        {
            name: 'Test Name',
            category: 'Tech Category',
            feedLink: 'https://www.test.com/rss/index.xml',
        },
    ])

    useEffect(() => {
        fetch('http://localhost:3000/subscriptions')
            .then(res => res.json())
            .then(data => {
                console.log('json')
                console.log(data)
                setSubs(data)
            })
    }, [])

    return (
        <div>
            <div className='flex justify-between'>
                <h2 className='font-serif text-3xl'>Subscriptions</h2>
                <button className='rounded-md bg-slate-500 px-4 py-2 transition hover:cursor-pointer hover:bg-slate-600/80'>
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
                                <td className='p-4'>
                                    <span className='rounded-lg bg-slate-400 p-1 text-sm text-slate-800'>
                                        {sub?.category}
                                    </span>
                                </td>
                                <td className='p-4 text-sm text-blue-400 italic'>
                                    {sub?.feedLink}
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
