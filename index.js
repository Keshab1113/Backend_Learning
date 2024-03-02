const express = require('express')
require('dotenv').config()
const app = express()
const port = process.env.PORT

app.get('/', (req, res) => {
    res.send('Hello World!')
})
app.get('/about', (req, res) => {
    res.send('Keshab Das, Web Developer')
})
app.get('/github', (req, res) => {
    res.send('Hello World!')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})