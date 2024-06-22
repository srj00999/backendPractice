require('dotenv').config()
const express = require('express')


const app  =  express()

const PORT  =  3000

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
app.listen(process.env.PORT, ()=>{
    console.log(`app is running on port ${process.env.PORT}`)
});