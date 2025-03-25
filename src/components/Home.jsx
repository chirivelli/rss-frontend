import { useEffect, useState } from 'react'
import ArticleContent from './ArticleContent.jsx'
import ArticleTitle from './ArticleTitle.jsx'

function Home() {
    const [articles, setArticles] = useState([])

    useEffect(() => {
        fetch('http://localhost:3000/articles', {
            method: 'GET',
            headers: { 'X-Username': 'sathwikc' },
        })
            .then(res => res.json())
            .then(res => setArticles(res))
    }, [])

    return (
        <div className='grow bg-slate-800'>
            <div className='mx-auto flex max-w-6xl flex-col gap-4 p-4'>
                {articles?.map((article, index) => (
                    <div
                        key={index}
                        className='flex flex-col gap-1 rounded bg-slate-700 p-4'
                    >
                        <ArticleTitle
                            htmlString={article.title}
                            link={article.link}
                        />
                        <p className='text-lg text-gray-100/80'>
                            {article.author}, {article.site}
                        </p>

                        <ArticleContent htmlString={article.snippet} />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Home
