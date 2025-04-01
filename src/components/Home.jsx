import { useEffect, useState } from 'react'
import ArticleContent from './ArticleContent.jsx'
import ArticleTitle from './ArticleTitle.jsx'
import { getArticles, getSubscriptions } from '../api.js'

function Home() {
    const [articles, setArticles] = useState([])
    const [search, setSearch] = useState('')

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
            <div className='mx-auto flex max-w-6xl flex-col gap-4 p-4'>
                <div className='flex items-stretch justify-end gap-4'>
                    <input
                        type='text'
                        className='grow rounded-md bg-gray-200 px-4 py-2 text-gray-950'
                        value={search}
                        placeholder='Search'
                        onChange={e => setSearch(e.target.value)}
                    />
                </div>
                {articles
                    ?.filter(
                        article =>
                            article.snippet
                                .toLowerCase()
                                .includes(search.toLowerCase()) ||
                            article.site
                                .toLowerCase()
                                .includes(search.toLowerCase()) ||
                            article.author
                                .toLowerCase()
                                .includes(search.toLowerCase()) ||
                            article.title
                                .toLowerCase()
                                .includes(search.toLowerCase()),
                    )
                    .map((article, index) => (
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
