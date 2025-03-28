export default function ArticleContent({ htmlString }) {
    return (
        <p
            className='line-clamp-1 text-gray-200'
            dangerouslySetInnerHTML={{
                __html: htmlString
                    .replaceAll('iframe', 'if')
                    .replaceAll('style', 'st'),
            }}
        ></p>
    )
}
