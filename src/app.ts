import express from 'express';

const app = express();
const port = 3000;
app.get('/', (req, res) => {
  res.send('The sedulous hyena ate the antelope!');
});

app.get('/isalive', (req, res) => {
    res.sendStatus(200)
})

app.get('/isready', (req, res) => {
    res.sendStatus(200)
})

app.listen(port, () => {
    return console.log(`server is listening on ${port}`)
})