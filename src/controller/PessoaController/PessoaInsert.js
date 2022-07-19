const Pessoa = require('../../model/Pessoa');
const status = require('http-status');



exports.Insert = (req, res, next) => {
    const nome = req.body.nome;
    const dataNascimento = req.body.dataNascimento;

    Pessoa.create({
        nome: nome,
        dataNascimento: dataNascimento,
    })
        .then(pessoa => {
            if (pessoa) {
                res.status(status.OK).send(pessoa);
            } else {
                res.status(status.NOT_FOUND).send();
            }
        })
        .catch(error => next(error));
};
