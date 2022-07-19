const Endereco = require('../../model/Endereco');
const status = require('http-status');


exports.Delete = (req, res, next) => {
    const id = req.params.id;

    Endereco.findByPk(id)
        .then(endereco => {
            if (endereco) {
                endereco.destroy({
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