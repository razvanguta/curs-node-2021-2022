const express = require('express');
const bodyParser = require('body-parser');
const handleGreeting = require('./controllers/greeting');
const { port } = require('./config/express');
const authorizationMiddleware = require('./middlewares/authorization');
const loginHandler = require('./controllers/login');
const brazilianCars = require('./brazilianCars');
const { getAllUsers, getUserById, createUser, updateUser, deleteUser } = require('./controllers/users');
const app = express();
app.use(bodyParser.json());

app.get("/users",getAllUsers)
app.get("/users/:id",getUserById);
app.post("/users",createUser);
app.put("/users/:id",updateUser);
app.delete("/users/:id",deleteUser);


app.post("/login", loginHandler);

app.get("/hello", handleGreeting);

app.get("/hello/:name?", authorizationMiddleware, handleGreeting);

app.get('/brazilian/cars',authorizationMiddleware, brazilianCars);

app.listen(port, () => {
  console.log("Server started on", port);
});
