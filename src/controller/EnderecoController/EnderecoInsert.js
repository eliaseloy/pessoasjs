const Endereco = require('../../model/Endereco');
const status = require('http-status');


exports.Insert = (req, res, next) => {
    const pessoaId = req.body.pessoaId;
    const cep = req.body.cep;
    const logradouro = req.body.logradouro;
    const numero = req.body.numero;
    const cidade = req.body.cidade;
    const estado = req.body.estado;
    const principal = req.body.principal;

    Endereco.create({
        pessoaId: pessoaId,
        cep: cep,
        logradouro: logradouro,
        numero: numero,
        cidade: cidade,
        estado: estado,
        principal: principal,
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
