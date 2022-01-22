const express = require('express')
const cors = require('cors')
const url = require('url');

const app = express();
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())

const contactForm = require('./routes/contacForm')

app.use('/', contactForm);

app.get('/', (req, res) => {
    res.send("ACM")
    console.log("ACM");
})

app.listen('3001', () => {
    console.log('Server running on port 3001')
})