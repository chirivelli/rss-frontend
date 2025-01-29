import { useState } from 'react'

function Home() {
    const [posts, setPosts] = useState([
        { title: 'Post 1', content: 'lorem ipsum' },
        { title: 'Post 2', content: 'lorem ipsum' },
        { title: 'Post 3', content: 'lorem ipsum' },
        { title: 'Post 4', content: 'lorem ipsum' },
        { title: 'Post 5', content: 'lorem ipsum' },
    ])
    return (
        <div>
            <div className='flex justify-end'>
                <button
                    className='rounded-sm bg-slate-400 px-4 py-2'
                    type='button'
                    onClick={e =>
                        setPosts([
                            ...posts,
                            {
                                title: `Post ${posts.length + 1}`,
                                content: 'lorem ipsum',
                            },
                        ])
                    }
                >
                    + Add
                </button>
            </div>
            <div className='mt-4 flex flex-col gap-4'>
                {posts.map((post, index) => (
                    <div
                        key={index}
                        className='rounded-xs bg-slate-500/60 p-2 hover:bg-slate-500/90'
                    >
                        <h3 className='text-2xl'>{post.title}</h3>
                        <p className='text-gray-100/70'>{post.content}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Home
