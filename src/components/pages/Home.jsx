import { useEffect, useState } from 'react'

function Home() {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        fetch('http://localhost:3000/theverge')
            .then(res => res.text())
            .then(data => {
                console.log('xml')
                const parser = new DOMParser()
                const xmlDoc = parser.parseFromString(data, 'text/xml')
                // const entries = Array.from(xmlDoc.getElementsByTagName('entry'))
                // entries.forEach(entry => {
                //     console.log(entry.textContent)
                // })
                // console.log(entries)
                // setPosts(entries)
            })
    }, [])

    return (
        <div>
            <div className='flex justify-between'>
                <h2 className='font-serif text-3xl'>Home</h2>
            </div>
            <div className='mt-4 flex flex-col gap-4'>
                {/*{posts.map((post, index) => (*/}
                {/*    <div>{post.textContent}</div>*/}
                {/*))}*/}
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