/* eslint-disable @typescript-eslint/no-var-requires */
const express = require('express')
const app = express()
const port = 8080
const path = require('path')

// Setter static folder

app.use(express.static(path.join(__dirname, 'build')))

// app.get('/', (req, res) => {
//     res.send('Hello World!')
// })

app.get('/isalive', (req, res) => {
    res.sendStatus(200)
})

app.get('/isready', (req, res) => {
    res.sendStatus(200)
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})
