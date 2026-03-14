//controlador para el ciudadano : encargado de escuchar y responder las peticiones

import { predioModel } from "../models/predio.model.js";

export const getPredios = async (req, res) => {
  //codigo protegido con try..catch

  try {
    const results = await predioModel.findAll();
    res.json({ results });
  } catch (error) {
    res.status(500).json({
      error: "Error al listar los Predios" + error,
    });
  }
};

//buscar ciudadano por el parametro id
export const getPrediosById = async (req, res) => {
  //codigo protegido con try..catch

  try {
    const results = await predioModel.findById(req.params.idPredio);
    res.json({ results });
  } catch (error) {
    res.status(500).json({
      error: "Error al buscar el predio",
    });
  }
};

//insertar un registro
export const createPredios = async (req, res) => {
  //codigo protegido con try..catch

  const data = {
    idPredio: req.body.idPredio,
    descripcionPredio: req.body.descripcionPredio,
    area: req.body.area,
    direccion: req.body.direccion,
    status: req.body.status,
    fotografia: req.body.fotografia,
    observaciones: req.body.observaciones,
    avaluo: req.body.avaluo,
  };

  try {
    const results = await predioModel.create(data);
    res.json({ results });
  } catch (error) {
    res.status(500).json({
      error: "Ocurrio un error en la insercion",
    });
  }
};

//eliminar un registro
export const deletePredios = async (req, res) => {
  //codigo protegido con try..catch

  try {
    const results = await predioModel.delete(req.params.idPredio);
    res.json({ results });
  } catch (error) {
    res.status(500).json({
      error: "No se pudo eliminar el registro",
    });
  }
};

//actualizar un registro
export const updatePredios = async (req, res) => {
  //codigo protegido con try..catch

  // se puede utilizar data o req.body, pero debe tener cuidado con el nombre de las tablas.
  const data = {
    idPredio: req.body.idPredio,
    descripcionPredio: req.body.descripcionPredio,
    area: req.body.area,
    direccion: req.body.direccion,
    status: req.body.status,
    fotografia: req.body.fotografia,
    observaciones: req.body.observaciones,
    avaluo: req.body.avaluo,
  };

  try {
    const results = await predioModel.update(req.params.idPredio, data);
    res.json({ results });
  } catch (error) {
    res.status(500).json({
      error: "Ocurrio un error en la actualizacion",
    });
  }
};
