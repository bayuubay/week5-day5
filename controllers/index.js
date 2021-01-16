const UsersController = require('./usersController');
const tasksController = require('./tasksController');
const usersController = require('./usersController');
class Controller{
    users() {
        return usersController;
    }
    tasks() {
        return tasksController;
     }    
}
module.exports = Object.freeze(new Controller());