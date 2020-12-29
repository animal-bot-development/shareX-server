async function makeID(num, schema) {
    let text = ''
    const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
    for (let i=0; i < num; i++) {
      text += possible.charAt(Math.floor(Math.random() * possible.length))
    }
    const find = await schema.findOne({_id: text})
    if (find) return makeID(num, schema)
    return text
}

module.exports = makeID
