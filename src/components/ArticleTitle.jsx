export default function ArticleTitle({ htmlString, link, title }) {
    return (
        <a
            className='text-xl font-bold hover:text-blue-100 hover:underline'
            href={link}
            dangerouslySetInnerHTML={{ __html: htmlString }}
        ></a>
    )
}
