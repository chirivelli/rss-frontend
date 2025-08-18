import { useState, useEffect } from 'react'
import { Outlet } from 'react-router'
import NavBar from '@/components/NavBar'
import { createClient, type Session } from '@supabase/supabase-js'
import { Auth } from '@supabase/auth-ui-react'
import { ThemeSupa } from '@supabase/auth-ui-shared'

const supabase = createClient(
    import.meta.env.VITE_SUPABASE_PROJ_URL || '',
    import.meta.env.VITE_SUPABASE_ANON_KEY || '',
)

export default function RootLayout() {
    const [session, setSession] = useState<Session | null>(null)

    useEffect(() => {
        supabase.auth.getSession().then(({ data: { session } }) => {
            setSession(session)
        })

        const {
            data: { subscription },
        } = supabase.auth.onAuthStateChange((_event, session) => {
            setSession(session)
        })

        return () => subscription.unsubscribe()
    }, [])

    if (!session) {
        return (
            <div className='flex h-screen items-center justify-center'>
                <Auth
                    providers={[]}
                    supabaseClient={supabase}
                    appearance={{ theme: ThemeSupa }}
                />
            </div>
        )
    }

    return (
        <div className='flex h-screen flex-col text-gray-50'>
            <NavBar />
            <div className='grow bg-slate-800'>
                <div className='mx-auto max-w-6xl overflow-x-auto p-4'>
                    <Outlet />
                </div>
            </div>
        </div>
    )
}
