import { Connection, ConnectionConfiguration } from "tedious";
var config :ConnectionConfiguration = {
    "server": process.env.DB_ADDRESS,
    "authentication": {
      "type": "default",
      "options": {
        "userName": process.env.DB_USER,
        "password": process.env.DB_PASS
      }
    },
    "options": {
      "port": 1433,
      "database": process.env.DB_NAME,
      "trustServerCertificate": true
    }
  }

export const dbConnection = new Connection(config)

dbConnection.on('connect', (err) => {
    if (err) {
      console.error('Connection Failed');
      throw err;
    }
    else{
        console.log("Connected to database")
    }
});