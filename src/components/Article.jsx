import ArticleTitle from './ArticleTitle.jsx'
import ArticleContent from './ArticleContent.jsx'

export default function Article({ post }) {
    return (
        <div className='flex flex-col gap-1 rounded bg-slate-700 p-4'>
            <ArticleTitle htmlString={post.title} link={post.link} />
            <div className='my-1 flex flex-wrap items-center gap-2'>
                {post.imageLink ? (
                    <img
                        className='size-6 rounded object-cover'
                        src={post.imageLink}
                        alt={post.title}
                    />
                ) : (
                    <span className='text-md w-fit rounded bg-slate-500 px-1'>
                        {post.site}
                    </span>
                )}
                <span className='text-md text-gray-50/80'>
                    {new Date(post.published).toLocaleTimeString('en-US', {
                        weekday: 'short',
                        hour: 'numeric',
                        minute: '2-digit',
                        hour12: true, // Use `false` for 24-hour format
                    })}
                </span>
                <span className='text-md text-gray-50/80'>{post.author}</span>
            </div>

            <ArticleContent htmlString={post.snippet} />
        </div>
    )
}
