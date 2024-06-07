import mysql2 from "mysql2";
import { DB_HOST,DB_NAME,DB_PASSWORD,DB_PORT,DB_USER } from "./config.js";

class MySQLDatabase {
  constructor() {
    this.connection = mysql2.createConnection({
      host: DB_HOST,
      user: DB_USER,
      password: DB_PASSWORD,
      database: DB_NAME,
      port: DB_PORT,
    });

    this.connection.connect((err) => {
      if (err) {
        console.error("Error al conectar a MySQL: " + err.stack);
        return;
      }
      console.log(
        "ConexiÃ³n exitosa a MySQL como ID " + this.connection.threadId
      );
    });
  }
  //Metodo para ejecutar querys a lo desgraciado
  query(sql, params, callback) {
    this.connection.query(sql, params, callback);
  }

  close() {
    this.connection.end((err) => {
      if (err) {
        console.error("Error al cerrar la conexiÃ³n a MySQL: " + err.stack);
        return;
      }
      console.log("Conexion a MySQL cerrada.");
    });
  }
}


export default MySQLDatabase;
