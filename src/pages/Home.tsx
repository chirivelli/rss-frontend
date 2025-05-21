import { useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import { getArticles } from '../lib/api'
import Article from '../components/Article'

function Home() {
    const { isLoading, data } = useQuery({
        queryKey: ['newsfeed'],
        queryFn: getArticles,
    })
    const [search, setSearch] = useState('')

    const inMetaData = (article: Post) => {
        const inSnippet = (article.snippet ?? '')
            .toLowerCase()
            .includes(search.toLowerCase())
        if (inSnippet) return true
        const inSite = (article.site ?? '')
            .toLowerCase()
            .includes(search.toLowerCase())
        if (inSite) return true
        const inAuthor = (article.author ?? '')
            .toLowerCase()
            .includes(search.toLowerCase())
        if (inAuthor) return true
        const inTitle = (article.title ?? '')
            .toLowerCase()
            .includes(search.toLowerCase())
        if (inTitle) return true
        return inSnippet || inSite || inAuthor || inTitle
    }

    return (
        <div className='flex flex-col gap-4'>
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
                    .filter((article: Post) => inMetaData(article))
                    .map((post: Post) => (
                        <Article key={post.title} post={post} />
                    ))
            ) : (
                <p className={`mx-auto`}>Loading...</p>
            )}
        </div>
    )
}

export default Home
