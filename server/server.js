const express = require('express')
const app = express()

const fileServerMiddleware = express.static('public');

app.use('/', fileServerMiddleware);

const port = process.env.PORT || 3001;


app.listen(port,()=>{
    console.log(`express web available at localhost:${port}`);
});
