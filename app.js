const express = require('express');
const app = express()
const port = 3000
const logger = require('./middleware/logger');
const morgan = require('morgan')

const home = require('./routes/home')

app.use(morgan('combined'))

app.get('/', (req, res) => res.send('Hello World!'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))