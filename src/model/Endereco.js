const Sequelize = require('sequelize');

const sequelize = require('../database/database.js');
const Pessoa = require('./Pessoa.js');

const Endereco = sequelize.define("endereco", {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
    },
    pessoaId: {
        allowNull: false,
        type: Sequelize.INTEGER(11),
        validate: {
            len: [1, 11],
        },
        references: {
            model: Pessoa,
            key: 'id',
          },
        onUpdate: 'CASCADE',
        onDelete: 'RESTRICT'
    },
    cep: {
        allowNull: false,
        type: Sequelize.STRING(9),
        validate: {
            len: [9, 9]
        }
    },
    logradouro: {
        allowNull: false,
        type: Sequelize.STRING(80),
        validate: {
            len: [3, 80]
        }
    },
    numero: {
        allowNull: false,
        type: Sequelize.INTEGER(6),
        validate: {
            len: [3, 6]
        }
    },
    cidade: {
        allowNull: false,
        type: Sequelize.STRING(50),
        validate: {
            len: [3, 50]
        }
    },
    estado: {
        allowNull: false,
        type: Sequelize.STRING(30),
        validate: {
            len: [3, 30]
        }
    },
    principal: {
        allowNull: false,
        type: Sequelize.BOOLEAN,
    },
});

module.exports = Endereco;