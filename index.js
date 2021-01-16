const express = require('express');
const app = express();
const port = 5700;
const routes=require('./routes')

app.use('/',routes)

app.listen(port, () => console.log(`this app run on: http://localhost:${port}`));
