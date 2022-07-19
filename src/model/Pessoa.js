const Sequelize = require('sequelize');

const sequelize = require('../database/database.js');

const Pessoa = sequelize.define("pessoa", {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
    },
    nome: {
        allowNull: false,
        type: Sequelize.STRING(100),
        validate: {
            len: [3, 100]
        }
    },
    dataNascimento: {
        allowNull: true,
        isDate: true,
        type: Sequelize.DATEONLY()
    },
});

module.exports = Pessoa;