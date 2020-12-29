const m = require('../models/index')
function log (err, id) {
    console.log(`[SHAREX-SERVER] ${err.stack}`)
    if (!id) {
        const id = process.f.generateID(15, m.err)
        const sch = new m.err({
            _id: id,
            e: err.stack
        })
        sch.save()
        process.f.webhook({
            title: 'Error!',
            description: `${process.cfg.domain}/err/${id}`,
            color: 0xff0000
        })
    } else {
        process.f.webhook({
            title: 'Error!',
            description: `${process.cfg.domain}/err/${id}`,
            color: 0xff0000
        })
    }
}

module.exports = log
