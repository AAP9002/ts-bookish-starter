import { Sequelize } from 'sequelize';
import { startAndCountTables } from './tableStatus';

const sequelizeInstance = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASS, {
  host: 'localhost',
  dialect: 'mssql',
  dialectOptions: {
    options: {
      encrypt: true,
      trustServerCertificate: true,
    }
  },
  logging: false,
});

(async () => {
  try {
    await sequelizeInstance.authenticate();
    console.log("connected to the database")

    sequelizeInstance.sync({ alter: true })
      .then(() => {
        console.log('Database & tables dropped and recreated!');
      })
      .catch(err => console.log('Error:', err));
  }
  catch {
    console.log("failed to connect to database")
  }
})();

export default sequelizeInstance