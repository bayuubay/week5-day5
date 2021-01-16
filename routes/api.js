const router = require('express').Router();
const controller = require('../controllers/index')
//routing users
// create users
router.post('/users', controller.users().post);
//read users
router.get('/users', controller.users().get);
//update users (put=>mengganti semua data)
router.put('/users', controller.users().put);
//delete users
router.delete('/users', controller.users().delete);

//routing Tasks
//create users
router.post('/tasks', controller.tasks().post);
//read users
router.get('/tasks', controller.tasks().get);
//update users (put=>mengganti semua data)
router.put('/tasks', controller.tasks().put);
//delete users
router.delete('/tasks', controller.tasks().delete);

module.exports = router;