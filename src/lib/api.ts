const SERVER_URL = 'https://rss-backend-532880782069.asia-south1.run.app/'

// Users
export const getUsers = async () => {
    const res = await fetch(SERVER_URL + '/users', {
        method: 'GET',
        headers: { 'X-Username': 'sathwikc' },
    })
    return await res.json()
}

// Subscriptions
export const getSubscriptions = async () => {
    const res = await fetch(SERVER_URL + '/subscriptions', {
        method: 'GET',
        headers: { 'X-Username': 'sathwikc' },
    })
    return await res.json()
}

export const postSubscription = async (sub: Subscription) => {
    const res = await fetch(SERVER_URL + '/subscriptions', {
        method: 'POST',
        headers: { 'X-Username': 'sathwikc' },
        body: JSON.stringify(sub),
    })
    return await res.json()
}

export const deleteSubscription = async (sub: Subscription) => {
    const res = await fetch(SERVER_URL + '/subscriptions', {
        method: 'DELETE',
        headers: { 'X-Username': 'sathwikc' },
        body: JSON.stringify(sub),
    })
    return await res.json()
}

// Articles
export const getArticles = async () => {
    const res = await fetch(SERVER_URL + '/articles', {
        method: 'GET',
        headers: { 'X-Username': 'sathwikc' },
    })
    return await res.json()
}
