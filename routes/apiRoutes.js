const express = require('express')
const m = require('../models/index')
const router = express.Router()

router.get('/err/:id', async (req, res) => {
    const find = await m.err.findOne({_id: req.params.id})
    if (!find) res.status(404).send('404: Error report not found')
    res.send(`200, Error report: ${find.e}`)
})

router.delete('/err/:id', async (req, res) => {
    const a = req.header('Authentication')
    if (!a || a !== process.cfg.token) return res.status(401).send('401: No/Incorrect authentication header')
    const find = await m.err.findOne({_id: req.params.id})
    if (!find) res.status(404).send('404: Error report not found')
    try {
        m.err.deleteOne({_id: req.params.id})
        res.send('204: Error report deleted')
    } catch (err) {
        const s = new m.err({_id: process.f.genID(15, m.err),e: err.message})
        s.save()
        process.f.log(err, s._id)
        return res.send('500: Internal server error. See report here: /err/' + s._id)
    }
})

module.exports = router
