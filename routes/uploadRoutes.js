const express = require('express')
const { f } = require('../models')
const router = express.Router()

router.post('/api/upload', async (req, res) => {
    const auth = req.header('Authentication')
    if (!req.files.image) return res.status(400).send('Error 400: No file provided')
    if (!auth || auth !== process.cfg.token) return res.status(401).send('Error 401: No/Invalid auth header')
    const id = await process.f.generateID(10, f)
    const doc = new f({
        _id: id,
        i: req.files.image.data,
        m: req.files.image.mimetype
    })
    doc.save()
    process.f.webhook({
        title: 'New file!',
        description: `${process.cfg.domain}/u/${id}`,
        color: 0x00FF00
    })
    res.json({URL: `${process.cfg.domain}/u/${id}`})
})

module.exports = router
