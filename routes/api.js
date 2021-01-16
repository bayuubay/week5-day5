const router = require('express').Router();

//routing users
// create users
router.post('/users', (req, res) => res.send('routing untuk create users'));
//read users
router.get('/users', (req, res) => res.send('routing untuk read users'));
//update users (put=>mengganti semua data)
router.put('/users', (req, res) => res.send('routing untuk update users'));
//delete users
router.delete('/users', (req, res) => res.send('routing untuk delete users'));

//routing Tasks
//create users
router.post('/tasks', (req, res) => res.send('routing untuk create tasks'));
//read users
router.get('/tasks', (req, res) => res.send('routing untuk read tasks'));
//update users (put=>mengganti semua data)
router.put('/tasks', (req, res) => res.send('routing untuk update tasks'));
//delete users
router.delete('/tasks', (req, res) => res.send('routing untuk delete tasks'));
module.exports = router;




