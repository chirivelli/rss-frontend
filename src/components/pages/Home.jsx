import { useEffect, useState } from 'react'

function Home() {
    const [articles, setArticles] = useState([])

    useEffect(() => {
        // fetch('http://localhost:3000/entries/sathwikc')
        //     .then(res => res.json())
        //     .then(data => console.log(data))
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
                            {article.site.split(' ').at(0)}
                        </p>
                        <p className='text-gray-200'>{article.description}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Home
