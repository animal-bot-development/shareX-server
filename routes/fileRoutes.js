const express = require('express')
const m = require('../models/index')
const router = express.Router()

router.get('/u/:ID', async (req, res) => {
    const find = await m.f.findOne({_id: req.params.ID})
    if (!find) return res.status(404).send('404: Image not found')
    res.header('Content-Type', find.m).send(find.i)
})

module.exports = router
