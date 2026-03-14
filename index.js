// crea una constante con el puerto local o el asignado en las variables globales de la aplicacion

import app from "./app.js";
import dotenv from "dotenv"; // importa la libreria- No debe ir aca, es un ejemplo

dotenv.config(); //llamo la vairiable del archivo .env

const port = 3000 || process.env.APP_PORT;

// esto solamente inicia el servicio
app.listen(port, () => {
  console.log(`server iniciado en : http://localhost:${port}`);
  //   console.log(process.env); //Todas las variables del entorno de node
  //   console.log(process.env.OS); //sistema operativo en que ese ejecuta node
  //   console.log(process.env.NUMBER_OF_PROCESSORS); //Numero de proceso que se ejecuta node
  //   console.log(process.env.NODE); //ruta donde esta instalado el node
  //   console.log(process.env.HOST); //variable de usuario creada en el .env
  //   console.log(process.env.DB_BASE); //varirable de usuario creada en el .env
});
