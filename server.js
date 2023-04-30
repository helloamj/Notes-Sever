const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser');
const Note = require('./src/models/Note');
const route = require('./src/routes/Note');
const app = express()

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

mongoose.connect('mongodb+srv://jainkunal129:ls9hzGAy1hTqvMAX@cluster0.u4jilpn.mongodb.net/?retryWrites=true&w=majority').then(() => {
    //Home Route
    app.get('/', (req, res) => {
        const response = { message: "API Works!" };
        res.json(response);
    })

    app.use('/notes',route)
})
const PORT = process.env.PORT || 5000;
app.listen(PORT, (req, res) => {
    console.log('Starting Server...')
})