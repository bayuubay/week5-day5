const router = require('express').Router();
const controller=require('../controllers/index')
//routing users
// create users
router.post('/users', (req, res) =>controller.users().post);
//read users
router.get('/users', (req, res) =>controller.users().get);
//update users (put=>mengganti semua data)
router.put('/users', (req, res) => controller.users().put);
//delete users
router.delete('/users', (req, res) => controller.users().delete);

//routing Tasks
//create users
router.post('/tasks', (req, res) =>controller.tasks().post);
//read users
router.get('/tasks', (req, res) => controller.tasks().get);
//update users (put=>mengganti semua data)
router.put('/tasks', (req, res) =>controller.tasks().put);
//delete users
router.delete('/tasks', (req, res) => controller.tasks().delete);


module.exports = router;




