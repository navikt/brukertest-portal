import express from 'express';

const app = express();
const port = 80;
const router = express.Router()

const serverConfig = {
    host: 'localhost',
    port: 8080
}

const corsConfig = (req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', serverConfig.host);
    res.setHeader('Access-Control-Allow-Credentials', 'true');
    res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE,OPTIONS');
    res.setHeader(
        'Access-Control-Allow-Headers',
        'Origin, Content-Type, X-AUTHENTICATION, X-IP, Content-Type, Accept, Access-Control-Allow-Headers, Authorization, X-Requested-With'
    );
    res.setHeader('Access-Control-Expose-Headers', 'Location');
    return next()
}

app.use(corsConfig)

app.get('/isalive', (req, res) => {
    res.sendStatus(200)
})

app.get('/isready', (req, res) => {
    res.sendStatus(200)
})
router.use(express.static('public'))
router.use('*', (req, res) => {
    res.sendFile('index.html', { root: 'public' })
})

app.listen(port, () => {
    return console.log(`server is listening on ${port}`)
})
