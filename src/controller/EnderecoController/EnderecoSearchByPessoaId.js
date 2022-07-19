const Endereco = require('../../model/Endereco');
const status = require('http-status');


exports.SearchByPessoaId = (req, res, next) => {
    const pessoaId = req.params.pessoaId;

    Endereco.findAll({
        where: {
            pessoaId: pessoaId
        }
    })
        .then(endereco => {
            if (endereco) {
                res.status(status.OK).send(endereco);
            } else {
                res.status(status.NOT_FOUND).send();
            }
        })
        .catch(error => next(error));
};
