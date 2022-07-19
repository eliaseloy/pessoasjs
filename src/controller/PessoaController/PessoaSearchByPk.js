const Pessoa = require('../../model/Pessoa');
const status = require('http-status');


exports.SearchOne = (req, res, next) => {
    const id = req.params.id;

    Pessoa.findByPk(id)
            .then(pessoa => {
            if (pessoa) {
                res.status(status.OK).send(pessoa);
            } else {
                res.status(status.NOT_FOUND).send();
            }
        })
        .catch(error => next(error));
};
