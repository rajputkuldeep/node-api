const express = require('express')
const app = express()

app.get('/api', (req, res) => {
    res.send("API !!!!")
})


app.listen(5000, () => {
    console.log('server up !!')
})