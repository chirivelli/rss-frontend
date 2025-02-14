import { useEffect, useState } from 'react'

function Home() {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        fetch('http://localhost:3000/subscriptions/0')
            .then(res => res.text())
            .then(data => {
                console.log('xml')
                const parser = new DOMParser()
                const xmlDoc = parser.parseFromString(data, 'text/xml')
                console.log(xmlDoc)
                let titles = Array.from(xmlDoc.getElementsByTagName('title'))
                titles = titles.slice(1)
                setPosts(titles)
            })
    }, [])

    return (
        <div>
            <div className='flex justify-between'>
                <h2 className='font-serif text-3xl'>Home</h2>
            </div>
            <div className='mt-4 flex flex-col gap-4 divide-y divide-gray-500'>
                {posts.map((post, index) => (
                    <h3 key={index} className='text-xl font-bold text-gray-200'>
                        {post.textContent}{' '}
                    </h3>
                ))}
            </div>
        </div>
    )
}

export default Home

// {posts.map((post, index) => (
//     <div
//         key={index}
//         className='rounded-xs bg-slate-500/60 p-2 hover:bg-slate-500/90'
//     >
//         <h3 className='text-2xl'>{post.title}</h3>
//         <p className='text-gray-100/70'>{post.content}</p>
//     </div>
// ))}