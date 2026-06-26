require('dotenv').config()
console.log(process.env)
const express = require('express')
const app = express()
const port = 4000

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/twitter', (req, res) => {
    res.send('shreyadotcom')
})

app.get('/login', (req, res) => {
    res.send('<h1>please login at shreya singh')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

