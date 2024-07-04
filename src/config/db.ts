import { Sequelize } from 'sequelize';

export const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASS, {
  host: 'localhost',
  dialect:'mssql',
  dialectOptions:{
    options:{
      encrypt: true,
      trustServerCertificate: true,
    }
  },
  logging: false,
});


(async () => {
  try{
    await sequelize.authenticate();
    console.log("connected to the database")
  }
  catch{
    console.log("failed to connect to database")
  }
})();