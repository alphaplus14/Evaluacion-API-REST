// las rutas del modulo ciudadano

import { Router } from "express";

//importamos la logica del controlador para construir

//cada interaccion de la ruta: get, post , put , delete

import * as predioCtr from "../controllers/predio.controller.js";

//instanciamos el metodo router del express para poder crear las rutas

const router = Router();

//las rutas del modulo
//ruta para listar todos

router.get("/predio/listartodos", predioCtr.getPredios);

router.get("/predio/listarporid/:idPredio", predioCtr.getPrediosById);

router.post("/predio/crear", predioCtr.createPredios);

router.delete("/predio/borrarporid/:idPredio", predioCtr.deletePredios);

router.put("/predio/editar/:idPredio", predioCtr.updatePredios);

export default router;
