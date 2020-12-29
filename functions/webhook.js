const fetch = require('node-fetch')
function wh (c) {
    let o = {
        username: 'ShareX server',
    }
    if (typeof c == 'object') {
        o.embeds = [c]
    } else if (typeof c == 'string') {
        o.content = c;
    }
    fetch(process.cfg.webhook, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(o)
    })
}

module.exports = wh
