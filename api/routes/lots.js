const Lot = require('../controllers/lots')

module.exports = api => {
    api.route('/lots')
        .post(Lot.create)
        .get(Lot.getAll)
    
    api.route('/lots/:id')
        .delete(Lot.delete)
        .put(Lot.update)
        .get(Lot.getById)
}