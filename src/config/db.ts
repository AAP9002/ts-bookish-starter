import { Connection, ConnectionConfiguration } from "tedious";
import { Request as db_request } from 'tedious';

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

export const getDataUsingRequest = (sql:string) => {
  return new Promise(async (resolve, reject) => {
    const db_req = new db_request(sql , function (err, rowCount, rows) {
      console.log(rowCount)
    });
  
    let result = []
    db_req.on('row', function (columns) {
        var row = {};
        columns.forEach(function (column) {
            row[column.metadata.colName] = column.value;
        });
        result.push(row);
    });
  
    db_req.on('requestCompleted', function () {
        resolve(result)
    });
  
    db_req.on('error', function (err) {
        reject(`Database error: ${err}`)
    });
    dbConnection.execSql(db_req)
  })
}