const SERVER_URL = 'https://rss-backend-532880782069.asia-south1.run.app/'
// const SERVER_URL = 'http://localhost:3000'

// Subscriptions
export const getSubscriptions = async (): Promise<Subscription[]> => {
    const res = await fetch(SERVER_URL + '/subscriptions', {
        method: 'GET',
        headers: { 'X-Username': 'sathwikc' },
    })
    return res.json()
}

export const postSubscription = async (sub: Subscription) => {
    const res = await fetch(SERVER_URL + '/subscriptions', {
        method: 'POST',
        headers: { 'X-Username': 'sathwikc' },
        body: JSON.stringify(sub),
    })
    return res.json()
}

export const deleteSubscription = async (sub: Subscription) => {
    const res = await fetch(SERVER_URL + '/subscriptions', {
        method: 'DELETE',
        headers: { 'X-Username': 'sathwikc' },
        body: JSON.stringify(sub),
    })
    return res.json()
}

// Articles
export const getArticles = async (): Promise<Post[]> => {
    const res = await fetch(SERVER_URL + '/articles', {
        method: 'GET',
        headers: { 'X-Username': 'sathwikc' },
    })
    return res.json()
}
