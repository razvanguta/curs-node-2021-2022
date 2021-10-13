const express = require('express');
const app = express()
const port = 3000

app.get('/', (request, response) => {
    response.send('Hello World!')
})

app.get('/hello/:name?', (request, response) => {
    if(!request.params.name){
    response.send('Hello world!')
    }
    else{
        response.send('Hello'+request.params.name)
    }
})

app.listen(port, () => {
    console.log('App listening at 3000')
})