class UsersController {

    post(req, res) {
        res.send('routing untuk create users');
    }
    get(req, res) {
        res.send('routing untuk read users');
    }
    put(req, res) {
        res.send('routing untuk update users');
    }
    delete(req, res) {
        res.send('routing untuk delete users');
    }
}

module.exports = Object.freeze(new UsersController());