const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

require('dotenv').config()
app.get('/', (req,res) => {
    res.sendFile('./index.html', { root: __dirname });
})

app.post('/form', (req, res) => {
    console.log(req.body)
})

app.use(express.json());
app.use(express.static('public'));
app.listen(port, () => console.log(`listening on port ${port}!`));
