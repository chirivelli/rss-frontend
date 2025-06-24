import { getUser } from '@/lib/api'
import { useQuery } from '@tanstack/react-query'

export default function Account() {
    const { data } = useQuery({
        queryKey: ['user'],
        queryFn: getUser,
    })

    console.log(data)

    return (
        <div className='grid gap-4 rounded bg-slate-700 p-4'>
            <div className='grid grid-cols-[200px_1fr] items-center'>
                <label className='font-semibold text-slate-200'>Email</label>
                <input
                    className='rounded bg-slate-600 px-2 py-1'
                    disabled
                    value={'sathwikchirivelli@gmail.com'}
                />
            </div>

            <div className='grid grid-cols-[200px_1fr] items-center'>
                <label className='font-semibold text-slate-200'>Name</label>
                <input
                    className='rounded bg-slate-600 px-2 py-1'
                    disabled
                    value={'Sathwik Chirivelli'}
                />
            </div>

            <div className='grid grid-cols-[200px_1fr] items-center'>
                <label className='font-semibold text-slate-200'>Username</label>
                <input
                    className='rounded bg-slate-600 px-2 py-1'
                    disabled
                    value={data?.username}
                />
            </div>
        </div>
    )
}
