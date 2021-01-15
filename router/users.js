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
// const getAllUsers = async () => {
//     const dataUsers = await sequelize.query('select * FROM binaracademy.users');
//     return dataUsers
// }

// testConnection()
// getAllUsers().then((dataUsers) => console.log(dataUsers));

router.get('/', (req, res) => res.send('read users data'));
router.put('/', (req, res) => res.send('update users data'));
router.delete('/', (req, res) => res.send('delete users data'));
router.post('/',(req, res) => res.send('create users data'));


module.exports = router;