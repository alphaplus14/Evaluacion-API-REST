//modulo para conexion a la base de datos
import mysql from "mysql2/promise";
import dotenv from "dotenv";

dotenv.config();

let cnx = "";
//el pool crea una cola de espera, permite manejar asyncronico y promesas. Es buena practica. Optimiza la entrada a la base de datos
try {
  cnx = mysql.createPool({
    host: process.env.HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_BASE,
    port: process.env.DB_PORT,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0,
  });
  const conexion = await cnx.getConnection();
  console.log("conexion a la base de datos establecida correctamente");
  conexion.release(); //cierra la conexion de prueba

  //   console.log(`Conexion Exitosa`);
} catch (error) {
  console.log(`Ha acorrido un error en la conexion: ${error.message}`);
}
export const db = cnx;
