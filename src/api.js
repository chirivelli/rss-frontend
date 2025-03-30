import { SERVER_URL } from './env'

// Subscriptions
export const getSubscriptions = async () => {
    const res = await fetch(SERVER_URL + '/subscriptions', {
        method: 'GET',
        headers: { 'X-Username': 'sathwikc' },
    })
    return await res.json()
}

export const postSubscription = async sub => {
    const res = await fetch(SERVER_URL + '/subscriptions', {
        method: 'POST',
        headers: { 'X-Username': 'sathwikc' },
        body: JSON.stringify(Object.fromEntries(sub)),
    })
    return await res.json()
}

export const deleteSubscription = async sub => {
    const res = await fetch(SERVER_URL + '/subscriptions', {
        method: 'DELETE',
        headers: { 'X-Username': 'sathwikc' },
        body: JSON.stringify(sub),
    })
    return await res.json()
}

// Articles
export const getArticles = async feedLink => {
    const res = await fetch(SERVER_URL + '/articles', {
        method: 'GET',
        headers: { 'X-FeedLink': feedLink },
    })
    return await res.json()
}
