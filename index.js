const express = require('express');

const app = express();

app.use(express.json());

// route handling

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
