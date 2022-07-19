module.exports = {
    development: {
        database: {
            host: 'localhost',
            port: 3003,
            name: 'dbcadpessoas',
            dialect: 'mysql',
            user: 'root',
            password: ''
        }
    },
    production:{
        database: {
            host: process.env.DB_HOST,
            host: process.env.DB_PORT
        }
    }
}