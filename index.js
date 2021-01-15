const express = require('express');
const app = express();
const port = 3500;
const userRouter=require('./router/users')
const taskRouter=require('./router/tasks')

//create users
// app.post('/users', (req, res) => res.send('routing untuk create users'));
// //read users
// app.get('/users', (req, res) => res.send('routing untuk read users'));
// //update users (put=>mengganti semua data)
// app.put('/users', (req, res) => res.send('routing untuk update users'));
// //update users (patch=>mengganti sebagian data)
// app.patch('/users', (req, res) => res.send('routing untuk update users'));
// //delete users
// app.delete('/users', (req, res) => res.send('routing untuk delete users'));

// //create users
// app.post('/tasks', (req, res) => res.send('routing untuk create tasks'));
// //read users
// app.get('/tasks', (req, res) => res.send('routing untuk read tasks'));
// //update users (put=>mengganti semua data)
// app.put('/tasks', (req, res) => res.send('routing untuk update tasks'));
// //update users (patch=>mengganti sebagian data)
// app.patch('/tasks', (req, res) => res.send('routing untuk update tasks'));
// //delete users
// app.delete('/tasks', (req, res) => res.send('routing untuk delete tasks'));

app.use('/users', userRouter);
app.use('/tasks', taskRouter);


app.listen(port, () => console.log(`this app run in port : ${port}`));

