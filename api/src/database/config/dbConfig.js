require('dotenv').config();

module.exports = {
    development: {
        username: process.env.DATABASE_USER,
        password: process.env.PASSWORD,
        database: process.env.DATABASE,
        host: 'localhost',
        dialect: 'mysql',
        logging: false,
        define: {
            timestamps: true
        },
        timezone: '-03:00'
    }
}