
import { Sequelize } from'sequelize';

const sequelize = new Sequelize('qoutes', 'root', 'biru', {
    host: 'localhost',
    dialect: 'mysql',
    logging:false
});

export {sequelize}