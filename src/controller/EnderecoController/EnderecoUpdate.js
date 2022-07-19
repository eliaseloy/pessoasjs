const Endereco = require('../../model/Endereco');
const status = require('http-status');


exports.Update = (req, res, next) => {
    const id = req.body.id;
    const pessoaId = req.body.pessoaId;
    const cep = req.body.cep;
    const logradouro = req.body.logradouro;
    const numero = req.body.numero;
    const cidade = req.body.cidade;
    const estado = req.body.estado;
    const principal = req.body.principal;

    Endereco.findByPk(id)
        .then(endereco => {
            if (endereco) {
                endereco.update({
                    pessoaId: pessoaId,
                    cep: cep,
                    logradouro: logradouro,
                    numero: numero,
                    cidade: cidade,
                    estado: estado,
                    pessoaId: pessoaId,
                    principal: principal,
                },
                    {
                        where: { id: id }
                    })
                    .then(() => {
                        res.status(status.OK).send();
                    })
                    .catch(error => next(error));
            } else {
                res.status(status.NOT_FOUND).send();
            }
        })
        .catch(error => next(error));
};
