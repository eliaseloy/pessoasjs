const Pessoa = require('../../model/Pessoa');
const status = require('http-status');


exports.SearchAll = (req, res, next) => {
    Pessoa.findAll()
        .then(pessoa => {
            if (pessoa) {
                res.status(status.OK).send(pessoa);
            }
        })
        .catch(error => next(error));
}
