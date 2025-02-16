import { useEffect } from 'react'

function Home() {
    useEffect(() => {
        fetch('http://localhost:3000/subscriptions/0')
            .then(res => res.text())
            .then(data => {
                const parser = new DOMParser()
                const xmlDoc = parser.parseFromString(data, 'text/xml')
                console.log(xmlDoc)
            })
    }, [])

    return (
        <div>
            <h2 className='font-serif text-3xl'>Home</h2>
            <div className='mt-4 flex flex-col gap-4 divide-y divide-gray-500'></div>
        </div>
    )
}

export default Home
