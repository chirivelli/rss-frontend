import { useEffect, useState } from 'react'

function Home() {
    const [articles, setArticles] = useState([])

    useEffect(() => {
        ;(async () => {
            const res = await fetch('http://localhost:3000/articles')
            const json = await res.json()
            setArticles(json)
        })()
    }, [])

    return (
        <div>
            <div className='mx-auto mt-4 flex max-w-6xl flex-col gap-4'>
                {articles.map((article, index) => (
                    <div
                        key={article.title}
                        className='flex flex-col gap-1 rounded bg-slate-700 p-4'
                    >
                        <h1 className='text-xl font-bold'>{article.title}</h1>
                        <p className='w-fit rounded-md bg-slate-500 p-1'>
                            {article.site}
                        </p>
                        <p className='text-lg'>{article.author}</p>
                        <p className='text-gray-200'>{article.snippet}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Home
