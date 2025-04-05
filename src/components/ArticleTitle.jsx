export default function ArticleTitle({ htmlString, link }) {
    return (
        <a
            className='line-clamp-2 text-lg font-bold hover:text-blue-100 hover:underline'
            href={link}
            dangerouslySetInnerHTML={{ __html: htmlString }}
        ></a>
    )
}
