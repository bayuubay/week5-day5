const express = require('express');
const app = express();
const port = 3900;
const routes=require('./routes')

app.unsubscribe('/',routes)


app.listen(port, () => console.log(`this app run in port : ${port}`));

