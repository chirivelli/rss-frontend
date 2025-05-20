import { useQuery } from '@tanstack/react-query'
import {
    getSubscriptions,
    postSubscription,
    deleteSubscription,
} from '../lib/api'

function Subscriptions() {
    const { isLoading, data } = useQuery({
        queryKey: ['subscriptions'],
        queryFn: getSubscriptions,
    })

    const formAction = async (formData: FormData) => {
        const name = formData.get('name') as string
        const link = formData.get('link') as string

        if (!name || !link) return

        await postSubscription({ name, link })
    }

    const handleClick = async (sub: Subscription) => {
        await deleteSubscription(sub)
    }

    return (
        <form action={formAction}>
            {!isLoading ? (
                <table className='w-full rounded-md bg-slate-700'>
                    <thead>
                        <tr>
                            <th className='p-4 text-left font-normal'>
                                <input
                                    type='text'
                                    name='name'
                                    placeholder='Feed Name'
                                    className='rounded-md bg-slate-200 px-4 py-2 text-gray-950'
                                />
                            </th>
                            <th className='p-4 text-left font-normal'>
                                <input
                                    type='url'
                                    name='link'
                                    placeholder='https://feed.link/rss'
                                    className='rounded-md bg-slate-200 px-4 py-2 text-gray-950'
                                />
                            </th>
                            <th className='p-4 text-left font-normal'>
                                <button className='rounded-md bg-slate-500 px-4 py-2 transition hover:cursor-pointer hover:bg-slate-600/80'>
                                    Add
                                </button>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {(data ?? []).map(sub => (
                            <tr
                                className='border-t-1 border-slate-600'
                                key={sub.link}
                            >
                                <td className='p-4'>{sub?.name}</td>
                                <td className='p-4 text-sm text-blue-400 italic'>
                                    {sub?.link}
                                </td>
                                <td className='p-4'>
                                    <svg
                                        xmlns='http://www.w3.org/2000/svg'
                                        fill='none'
                                        viewBox='0 0 24 24'
                                        stroke='currentColor'
                                        className='size-6 cursor-pointer'
                                        onClick={() => handleClick(sub)}
                                    >
                                        <path d='M15 12H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z' />
                                    </svg>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            ) : (
                <p className={`mx-auto`}>Loading...</p>
            )}
        </form>
    )
}

export default Subscriptions
