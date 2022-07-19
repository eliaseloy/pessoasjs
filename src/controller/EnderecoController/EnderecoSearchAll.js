const Endereco = require('../../model/Endereco');
const status = require('http-status');


exports.SearchAll = (req, res, next) => {
    Endereco.findAll()
        .then(endereco => {
            if (endereco) {
                res.status(status.OK).send(endereco);
            }
        })
        .catch(error => next(error));
};
