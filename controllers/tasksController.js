class TasksController {

    post(req, res) {
        res.send('routing untuk create tasks');
    }
    get(req, res) {
        res.send('routing untuk read tasks');
    }
    put(req, res) {
        res.send('routing untuk update tasks');
    }
    delete(req, res) {
        res.send('routing untuk delete tasks');
    }
}

module.exports = Object.freeze(new TasksController());