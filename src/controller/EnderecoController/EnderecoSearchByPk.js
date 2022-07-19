const Endereco = require('../../model/Endereco');
const status = require('http-status');


exports.SearchOne = (req, res, next) => {
    const id = req.params.id;

    Endereco.findByPk(id)
        .then(endereco => {
            if (endereco) {
                res.status(status.OK).send(endereco);
            } else {
                res.status(status.NOT_FOUND).send();
            }
        })
        .catch(error => next(error));
};
