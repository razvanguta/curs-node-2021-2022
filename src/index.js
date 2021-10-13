const express = require('express');
const greeting = require('./greetings')
const app = express()
const port = 3000

app.get('/', (request, response) => {
    response.send('Hello World!')
})

app.get('/hello/:name?', (request, response) => {
    greeting(request,response)
})

app.listen(port, () => {
    console.log('Example app listening at 3000')
})