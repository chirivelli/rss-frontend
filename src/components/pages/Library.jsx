import { useState } from 'react'

function Library() {
    const [subs, setSubs] = useState([
        {
            name: 'TheVerge',
            description: 'The Verge is about technology and how it ...',
            lastUpdate: 'TheVerge',
            category: 'Tech + Culture',
            feedLink: 'https://www.theverge.com/rss/index.xml',
        },
        {
            name: 'CNET',
            description: 'Our Expertise. For more than 25 years, CNET  ...',
            lastUpdate: 'CNET',
            category: 'Smart Home',
            feedLink: 'https://www.cnet.com/rss/index.xml',
        },
        {
            name: 'Engadget',
            description: 'Find the latest technology news and expert tech ...',
            lastUpdate: 'Engadget',
            category: 'Tech',
            feedLink: 'https://www.engadget.com/rss/index.xml',
        },
        {
            name: 'TechCrunch',
            description: 'Transportation · Waymo just popped up on the ...',
            lastUpdate: 'TechCrunch',
            category: 'Startup',
            feedLink: 'https://www.techcrunch.com/rss/index.xml',
        },
    ])
    return (
        <div>
            <div>
                <h2 className='font-serif text-2xl'>Subscriptions</h2>
                <table className='mt-5 w-full'>
                    <tr className='border-b-[1px] border-slate-600 bg-slate-700'>
                        <td className='p-4'>Delete</td>
                        <td className='p-4'>Name</td>
                        <td className='p-4'>Description</td>
                        <td className='p-4'>Category</td>
                        <td className='p-4'>Last Update</td>
                        <td className='p-4'>Feed Link</td>
                    </tr>
                    {subs.map((sub, i) => (
                        <tr
                            className='border-b-[1px] border-slate-600 bg-slate-600/40'
                            key={i}
                        >
                            <td className='p-4'>
                                <svg
                                    xmlns='http://www.w3.org/2000/svg'
                                    fill='none'
                                    viewBox='0 0 24 24'
                                    stroke-width='1.5'
                                    stroke='currentColor'
                                    className='size-6'
                                >
                                    <path
                                        stroke-linecap='round'
                                        stroke-linejoin='round'
                                        d='M15 12H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z'
                                    />
                                </svg>
                            </td>
                            <td className='p-4'>{sub.name}</td>
                            <td className='p-4'>{sub.description}</td>
                            <td className='p-4'>
                                <span className='rounded-lg bg-slate-400 p-1 text-sm text-slate-800'>
                                    {sub.category}
                                </span>
                            </td>
                            <td className='p-4'>{sub.lastUpdate}</td>
                            <td className='p-4 text-sm text-blue-400 italic'>
                                {sub.feedLink}
                            </td>
                        </tr>
                    ))}
                </table>
            </div>
        </div>
    )
}

export default Library
