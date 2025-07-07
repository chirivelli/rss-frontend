import { createRoot } from 'react-dom/client'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import './index.css'
import App from '@/App'
import { ClerkProvider } from '@clerk/clerk-react'

const queryClient = new QueryClient()

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

if (!PUBLISHABLE_KEY) {
    throw new Error('Missing Publishable Key')
}

createRoot(document.getElementById('root')!).render(
    <ClerkProvider publishableKey={PUBLISHABLE_KEY} afterSignOutUrl='/'>
        <QueryClientProvider client={queryClient}>
            <App />
        </QueryClientProvider>
    </ClerkProvider>,
)
