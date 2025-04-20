import { useEffect, useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import { getArticles, getSortedArticles, getSubscriptions } from '../api.js'
import Article from './Article.jsx'

function Home() {
    const { isLoading, data } = useQuery({
        queryKey: ['newsfeed'],
        queryFn: getSortedArticles,
    })
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
                {!isLoading ? (
                    data
                        .filter(article => inMetaData(article))
                        .map(post => <Article key={post.title} post={post} />)
                ) : (
                    <p className={`mx-auto`}>Loading...</p>
                )}
            </div>
        </div>
    )
}

export default Home
