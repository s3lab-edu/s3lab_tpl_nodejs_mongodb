const Rest = require('../utils/restware');

module.exports = {
    getAll: function (req, res) {
        const out = { title: 'helloWorld!', age: 12};
        return Rest.sendSuccess(res, out, 200);
    },

    getOne: function (req, res) {
        let id = req.params.id || '';
        res.send('Hello World: ' + id);
    },
};
