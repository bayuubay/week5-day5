const router = require('express').Router();
//get database
// const { Sequelize } = require('sequelize');
// const sequelize = new Sequelize('binaracademy', 'bayuubay', 'Bayu1692!', {
//     host:'localhost',
//     dialect: 'mysql',
// });
// const testConnection = async()=> {
//     try {
//         await sequelize.authenticate();
//         console.log('Connection has been established successfully.');
//     } catch (error) {
//         console.error('Unable to connect to the database:', error);
//     }
// }
// const getAllTasks = async () => {
//     const dataTasks = await sequelize.query('select * FROM binaracademy.tasks');
//     return dataTasks
// }

// testConnection()
// getAllUsers().then((dataTasks) => console.log(dataTasks));

router.get('/', (req, res) => res.send('read users data'));
router.put('/', (req, res) => res.send('update tasks data'));
router.delete('/', (req, res) => res.send('delete tasks data'));
router.post('/',(req, res) => res.send('create tasks data'));


module.exports = router;