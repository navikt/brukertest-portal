import express from 'express';
import cors from 'cors'

const app = express();
const port = 3000;
const router = express.Router()

app.use(cors)

app.get('/isalive', (req, res) => {
    res.sendStatus(200)
})

app.get('/isready', (req, res) => {
    res.sendStatus(200)
})

router.use('*', (req, res) => {
    res.sendFile('index.html', { root: 'public' })
})

app.listen(port, () => {
    return console.log(`server is listening on ${port}`)
})