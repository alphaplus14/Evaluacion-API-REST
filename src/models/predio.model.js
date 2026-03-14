//importamos la conexion
import { db } from "./bdatos.js";

//activar el manejo de promesas (asyncronicas)

// const db = cnx.promise();

//creamos el modulo : usando el concepto de orientado a objetos

// la clase modelo correspondiente a predios

export const predioModel = {
  //listar todos: aplicando funciones asincronicas para aprovechar las promesas (los hilos de ejecucion)

  findAll: async () => {
    const sql = "select * from predios order by idPredio";

    //almacenamos la respuesta en un arreglo

    const [rows] = await db.query(sql);
    return rows;
  },

  //buscar por id, recibe el id como parametro
  findById: async (id) => {
    const sql = "select * from predios where idPredio=?";

    //almacenamos la respuesta en un arreglo

    const [rows] = await db.query(sql, [id]);
    return rows;
  },

  //borramos teniendo en cuenta el id que llega del controlador por parametro
  delete: async (id) => {
    const sql = "delete from predios where idPredio=?";

    //almacenamos la respuesta en un arreglo

    const [rows] = await db.query(sql, [id]);
    return rows;
  },
  create: async (data) => {
    const sql = "insert into predios set ?";

    //almacenamos la respuesta en un arreglo

    const [rows] = await db.query(sql, [data]);
    return rows;
  },
  update: async (id, data) => {
    const sql = "update predios set ? where idPredio=?";

    //almacenamos la respuesta en un arreglo

    const [rows] = await db.query(sql, [data, id]);
    return rows;
  },
};
