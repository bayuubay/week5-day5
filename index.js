const express = require('express');
const bodyParser=require('body-parser')
const app = express();
const port = 3000;
const routes=require('./routes')
app.use(bodyParser.json());//extension untuk membaca data di req.body
app.use('/', routes);

app.listen(port, () => console.log(`this app run on: http://localhost:${port}`));
