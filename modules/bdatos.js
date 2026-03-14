//modulo para conexion a la base de datos
import mysql from "mysql2";

let cnx = "";
try {
  cnx = mysql.createConnection({
    host: "localhost",
    user: "root",
    database: "apipredios",
    port: "3306",
  });
  //   console.log(`Conexion Exitosa`);
} catch (error) {
  console.log(`Ha acorrido un error en la conexion: ${error.message}`);
}
export { cnx };
