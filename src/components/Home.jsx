import { useEffect, useState } from 'react'
import ArticleContent from './ArticleContent.jsx'
import ArticleTitle from './ArticleTitle.jsx'
import { getArticles, getSubscriptions } from '../api.js'

function Home() {
    const [articles, setArticles] = useState([])

    useEffect(() => {
        async function fetchArticles() {
            const subscriptions = await getSubscriptions()
            for (let sub of subscriptions) {
                const data = await getArticles(sub.link)
                setArticles(prev => [...prev, ...data])
            }
        }

        fetchArticles()
    }, [])

    return (
        <div className='grow bg-slate-800'>
            mino <div></div>
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
                        <div className='flex items-center gap-2'>
                            <span className='w-fit rounded bg-slate-500 px-2 py-1'>
                                {article.site}
                            </span>
                            <span className='text-lg text-gray-50/80'>
                                {article.author}
                            </span>
                        </div>

                        <ArticleContent htmlString={article.snippet} />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Home
