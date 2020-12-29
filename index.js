// Max is the best :)
const express = require('express')
const routes = require('./routes/index')
const mongoose = require('mongoose')
const functions = require('./functions/index')
const app = express()
const u = require('express-fileupload')
app.use(express.urlencoded({ extended: true }))
app.use(u())
Object.keys(routes).forEach((route) => {
    console.log(`[SHAREX-SERVER] '${route}' loaded`)
    app.use('/', routes[route])
});

process.cfg = require('./config.json')
process.f = {}
Object.keys(functions).forEach((g) => {
    process.f[g] = functions[g]
})

process.on('unhandledRejection', (err) => {
    process.f.log(err)
})

app.all('*', (req, res) => {
    res.status(404).send('404: Cannot find that')
})

app.listen(process.cfg.port ? process.cfg.port : 3000, () => {
    console.log(`[SHAREX-SERVER] Webserver running on Port ${process.cfg.port ? process.cfg.port : 3000}`)
})

mongoose.connect(process.cfg.mongoURI, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
}).then(() => {
    console.log(`[SHAREX-SERVER] Connected to MongoDB`)
    process.f.webhook({
        title: 'MongoDB connected',
        color: 0x00FF00
    })
})
