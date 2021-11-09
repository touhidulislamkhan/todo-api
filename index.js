require('dotenv').config();
const express = require('express');
const connectdb = require('./config/db');

const todoHandler = require('./routeHandlers/todo');

const app = express();

app.use(express.json());

// connection to the database
connectdb();

// route handling
app.use('/todo', todoHandler);

// error handling
function errorhandler(err, req, res, next) {
    if (res.headersSent) {
        return next(err);
    }
    res.status(500).json({ error: err });
}

app.listen(3000, () => {
    console.log('listening to port 3000');
});
