import { useEffect, useState } from 'react'

function Home() {
    const [articles, setArticles] = useState([])

    useEffect(() => {
        async function fetchItems() {
            const res = await fetch('http://localhost:3000/entries/sathwikc')
            const sites = await res.json()
            for (const site of sites) {
                const parser = new DOMParser()
                const xmlDoc = parser.parseFromString(site?.xml, 'text/xml')
                console.log(xmlDoc)
                const atomItems = xmlDoc.getElementsByTagName('item')
                const list = []
                for (const atomItem of atomItems) {
                    let extractedDesc =
                        atomItem.querySelector('description').textContent
                    if (extractedDesc.includes('<p>')) {
                        const htmlDoc = parser.parseFromString(
                            extractedDesc,
                            'text/xml',
                        )
                        extractedDesc = htmlDoc.querySelector('p').textContent
                    }
                    const article = {
                        title: atomItem.querySelector('title').textContent,
                        description: extractedDesc,
                        site: xmlDoc.querySelector('title').textContent,
                        pubDate: atomItem.querySelector('pubDate').textContent,
                    }
                    list.push(article)
                }
                setArticles(prev => [...prev, ...list])
            }
        }

        fetchItems()
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
