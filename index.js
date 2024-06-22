require('dotenv').config()
const express = require('express')


const app  =  express()

const PORT  =  3000

const userdata = {
    "login": "srj00999",
    "id": 108576373,
    "node_id": "U_kgDOBni-dQ",
    "avatar_url": "https://avatars.githubusercontent.com/u/108576373?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/srj00999",
    "html_url": "https://github.com/srj00999",
    "followers_url": "https://api.github.com/users/srj00999/followers",
    "following_url": "https://api.github.com/users/srj00999/following{/other_user}",
    "gists_url": "https://api.github.com/users/srj00999/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/srj00999/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/srj00999/subscriptions",
    "organizations_url": "https://api.github.com/users/srj00999/orgs",
    "repos_url": "https://api.github.com/users/srj00999/repos",
    "events_url": "https://api.github.com/users/srj00999/events{/privacy}",
    "received_events_url": "https://api.github.com/users/srj00999/received_events",
    "type": "User",
    "site_admin": false,
    "name": "Suraj Yadav",
    "company": null,
    "blog": "",
    "location": null,
    "email": null,
    "hireable": null,
    "bio": "Aspiring Full Stack Developer",
    "twitter_username": "srj00999",
    "public_repos": 20,
    "public_gists": 0,
    "followers": 2,
    "following": 7,
    "created_at": "2022-07-02T11:47:39Z",
    "updated_at": "2024-05-10T10:27:47Z"
  }

app.get('/', (req, res)=>{
    res.send('Hellow World!')
})


app.get('/twitter', (req, res)=>{
    res.send('srj00999')
})

app.get('/login', (req, res)=>{
    res.send('<h1>Please login</h1>')
})

app.get('/chai', (req, res)=>{
    res.send('<h2>chai ur Code</h2>')
})

app.get('/user', (req, res)=>{
    res.json(userdata)
})

app.listen(process.env.PORT, ()=>{
    console.log(`app is running on port ${process.env.PORT}`)
});