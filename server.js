const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser');
const Note = require('./src/models/Note');
const route = require('./src/routes/Note');
const app = express()

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
//'mongodb+srv://jainkunal129:ls9hzGAy1hTqvMAX@cluster0.u4jilpn.mongodb.net/?retryWrites=true&w=majority'
mongoose.connect(process.env.SYS_URL).then(() => {
    //Home Route
    app.get('/', (req, res) => {
        const response = { message: "API Works!" };
        res.json(response);
    })

    app.use('/notes',route)
})
app.listen(process.env.SYS_PORT || 3000)
