//modulo para manipulacion del ciudadano

import express from "express";
import { cnx } from "./bdatos.js";

export const predios = express();

//crud basico de Predios

//listar todos los usuarios
predios.get("/predios/listartodos", (req, res) => {
  //hacer la consulta
  let sql = "SELECT * FROM predios ORDER BY idPredio";
  //Ejecutar la consulta en la base de datos
  cnx.query(sql, (err, results, fields) => {
    // console.log(err);
    // console.log(results);
    // console.log(fields);
    res.send({ results });
  });
});

//listar todos los predioss por id
predios.get("/predios/listarporid/:id", (req, res) => {
  //recbimos el parametro de la consulta
  let id = req.params.idPredio;
  //hacer la consulta por seguridad use consulta parametrizada
  let sql = "SELECT * FROM predios where idPredio=?";

  // let sql2 = "SELECT * FROM ciudadano where id=${id}";

  //Ejecutar la consulta en la base de datos
  cnx.query(sql, [id], (err, results, fields) => {
    res.status(200).send({ results });
  });
});

//borrar registro --borrado real

//listar todos los ciudadanos por id
predios.delete("/predios/borrarporid/:id", (req, res) => {
  //recbimos el parametro de la consulta
  let id = req.params.idPredio;
  //hacer la consulta por seguridad use consulta parametrizada
  let sql = "delete FROM predios where idPredio=?";
  // let sql2 = "SELECT * FROM ciudadano where id=${id}";

  //Ejecutar la consulta en la base de datos
  cnx.query(sql, [id], (err, results, fields) => {
    res.status(200).send({ results });
  });
});

//crear Ciudadano
predios.post("/predios/crear", (req, res) => {
  //recbimos los parametros enviados en la consulta -payload -body en un objeto js
  let datosFormulario = {
    idPredio:req.body.idPredio,
    descripcionPredio: req.body.descripcionPredio,
    area: req.body.area,
    direccion: req.body.direccion,
    status: req.body.status,
    fotografia: req.body.fotografia,
    observaciones: req.body.observaciones,
    avaluo: req.body.avaluo,
  };
  console.log(datosFormulario);
  //hacer la consulta por seguridad use consulta parametrizada
  let sql = "insert into predios set?";
  // let sql2 = "SELECT * FROM ciudadano where id=${id}";

  //Ejecutar la consulta en la base de datos
  cnx.query(sql, [datosFormulario], (err, results, fields) => {
    res.status(200).send({ results });
  });
});

//Editar: recibir un payload en el body de la peticion (request) y el id
ciudadano.put("/predios/editar/:id", (req, res) => {
  //recbimos los parametros enviados en la consulta -payload -body en un objeto js
  let id = req.params.idPredio;

  let datosFormulario = {
    idPredio: req.body.idPredio,
    descripcionPredio: req.body.descripcionPredio,
    area: req.body.area,
    direccion: req.body.direccion,
    status: req.body.status,
    fotografia: req.body.fotografia,
    observaciones: req.body.observaciones,
    avaluo: req.body.avaluo,
  };
  console.log(datosFormulario);
  //hacer la consulta por seguridad use consulta parametrizada
  let sql = "update predios set ? where idPredio=? ";
  // let sql2 = "SELECT * FROM ciudadano where id=${id}";

  //Ejecutar la consulta en la base de datos
  cnx.query(sql, [datosFormulario, id], (err, results, fields) => {
    res.status(200).send({ results });
  });
});
