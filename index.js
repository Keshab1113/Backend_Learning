const express = require('express')
require('dotenv').config()
const app = express()
const port = process.env.PORT

const githubdata = {
    "login": "Keshab1113",
    "id": 110785343,
    "node_id": "U_kgDOBppzPw",
    "avatar_url": "https://avatars.githubusercontent.com/u/110785343?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/Keshab1113",
    "html_url": "https://github.com/Keshab1113",
    "followers_url": "https://api.github.com/users/Keshab1113/followers",
    "following_url": "https://api.github.com/users/Keshab1113/following{/other_user}",
    "gists_url": "https://api.github.com/users/Keshab1113/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/Keshab1113/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/Keshab1113/subscriptions",
    "organizations_url": "https://api.github.com/users/Keshab1113/orgs",
    "repos_url": "https://api.github.com/users/Keshab1113/repos",
    "events_url": "https://api.github.com/users/Keshab1113/events{/privacy}",
    "received_events_url": "https://api.github.com/users/Keshab1113/received_events",
    "type": "User",
    "site_admin": false,
    "name": "Keshab Das",
    "company": null,
    "blog": "",
    "location": "Jalpaiguri",
    "email": null,
    "hireable": null,
    "bio": "Web Developer & Competitive Programmer  ||  IT Undergraduate@JGEC'25.\r\n\r\nCurrently learning MERN stack Development.",
    "twitter_username": null,
    "public_repos": 48,
    "public_gists": 0,
    "followers": 15,
    "following": 30,
    "created_at": "2022-08-07T18:51:22Z",
    "updated_at": "2024-02-14T20:47:29Z"
}

app.get('/', (req, res) => {
    res.send('Hello World!')
})
app.get('/about', (req, res) => {
    res.send('Keshab Das, Web Developer')
})
app.get('/github', (req, res) => {
    res.json(githubdata)
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})