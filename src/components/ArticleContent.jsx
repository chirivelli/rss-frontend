import { useState } from 'react'

export default function ArticleContent({ htmlString }) {
    const [enlarge, setEnlarge] = useState(false)
    return (
        <p
            className={`${!enlarge && 'line-clamp-1'} text-gray-200`}
            onClick={() => setEnlarge(prev => !prev)}
            dangerouslySetInnerHTML={{
                __html: htmlString
                    .replaceAll('iframe', 'if')
                    .replaceAll('img', 'pic')
                    .replaceAll('style', 'st'),
            }}
        ></p>
    )
}
