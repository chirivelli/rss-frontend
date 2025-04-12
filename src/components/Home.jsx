import { useEffect, useState } from 'react'
import ArticleContent from './ArticleContent.jsx'
import ArticleTitle from './ArticleTitle.jsx'
import { getArticles, getSubscriptions } from '../api.js'

function Home() {
    const [articles, setArticles] = useState([])
    const [search, setSearch] = useState('')

    const inMetaData = article => {
        let inSnippet = article.snippet
            .toLowerCase()
            .includes(search.toLowerCase())
        let inSite = article.site.toLowerCase().includes(search.toLowerCase())
        let inAuthor = (article.author ?? '')
            .toLowerCase()
            .includes(search.toLowerCase())
        let inTitle = article.title.toLowerCase().includes(search.toLowerCase())
        return inSnippet || inSite || inAuthor || inTitle
    }

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
                    ?.filter(article => inMetaData(article))
                    .map((article, index) => (
                        <div
                            key={index}
                            className='flex flex-col gap-1 rounded bg-slate-700 p-4'
                        >
                            <ArticleTitle
                                htmlString={article.title}
                                link={article.link}
                            />
                            <div className='flex flex-wrap items-center gap-2'>
                                {article.imageLink ? (
                                    <img
                                        className='size-6 rounded object-cover'
                                        src={article.imageLink}
                                        alt={article.title}
                                    />
                                ) : (
                                    <span className='text-md w-fit rounded bg-slate-500 px-1'>
                                        {article.site}
                                    </span>
                                )}
                                <span className='text-md text-gray-50/80'>
                                    {article.author}
                                </span>
                                <span className='text-md text-gray-50/80'>
                                    {new Date(
                                        article.published,
                                    ).toLocaleTimeString('en-US', {
                                        hour: 'numeric',
                                        minute: '2-digit',
                                        hour12: true, // Use `false` for 24-hour format
                                    })}
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
