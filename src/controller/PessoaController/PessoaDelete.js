const Pessoa = require('../../model/Pessoa');
const status = require('http-status');


exports.Delete = (req, res, next) => {
    const id = req.params.id;

    Pessoa.findByPk(id)
        .then(pessoa => {
            if (pessoa) {
                pessoa.destroy({
                    where: { id: id }
                })
                    .then(() => {
                        res.status(status.OK).send();
                    })
                    .catch(error => next(error));
            }
            else {
                res.status(status.NOT_FOUND).send();
            }
        })
        .catch(error => next(error));
};
