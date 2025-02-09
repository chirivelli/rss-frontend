function Home() {
    // useEffect(() => {
    //     fetch('https://www.theverge.com/rss/index.xml', {
    //         method: 'GET',
    //         headers: {},
    //     }).then(res => console.log(res))
    // }, [])

    return (
        <div>
            <div className='flex justify-between'>
                <h2 className='font-serif text-3xl'>Home</h2>
            </div>
            <div className='mt-4 flex flex-col gap-4'>
                {/*{posts.map((post, index) => (*/}
                {/*    <div*/}
                {/*        key={index}*/}
                {/*        className='rounded-xs bg-slate-500/60 p-2 hover:bg-slate-500/90'*/}
                {/*    >*/}
                {/*        <h3 className='text-2xl'>{post.title}</h3>*/}
                {/*        <p className='text-gray-100/70'>{post.content}</p>*/}
                {/*    </div>*/}
                {/*))}*/}
            </div>
        </div>
    )
}

export default Home
