const express = require('express');
const { handleGreeting, otherValue } = require('./greetings');
const handleCatFactsRequest = require('./catsFacts');
const brazilianCars = require('./brazilianCars');
const app = express();
const port = 3000;

app.get("/", (request, response) => {
  response.send("Hello World!");
});

app.get("/hello/:name?", (request, response) => {
  handleGreeting(request, response);
  console.log(otherValue);
});

app.get('/cat/facts', handleCatFactsRequest);

app.get('/brazilian/cars', brazilianCars);

app.listen(port, () => {
  console.log("Server started on", port);
});