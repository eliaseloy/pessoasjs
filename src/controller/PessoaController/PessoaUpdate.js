const Pessoa = require('../../model/Pessoa');
const status = require('http-status');


exports.Update = (req, res, next) => {
    const id = req.body.id;
    const nome = req.body.nome;
    const dataNascimento = req.body.dataNascimento;

    Pessoa.findByPk(id)
        .then(pessoa => {
            if (pessoa) {
                pessoa.update({
                    nome: nome,
                    dataNascimento: dataNascimento,
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
