// importing express
const express = require('express');
const app = express();
require('dotenv').config();
const UserRouter = require('./routers/UserRouter');

//initializing express

const port = process.env.PORT || 5000;

// middlewares
app.use('/user', UserRouter);

// endpoints or routes
app.get('/', (request,response) => {
    response.send('Hello world!');
})

app.get('/add', (request,response) => {
    response.send('response from add');
})

app.get('/getall', (request,response) => {
    response.send('response from get all');
})

app.get('/delete', (request,response) => {
    response.send('response from delete');
})  

app.get('/update', (request,response) => {
    response.send('response from update');
})

// strting the server
app.listen(port, () => {
    console.log('server started');
});