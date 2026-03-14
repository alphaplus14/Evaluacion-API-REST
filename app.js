import express from "express";
import cors from "cors";
import predioRutas from "./src/routes/predio.route.js";

//instanciamos la libreria en un objeto - app
const app = express();
app.use(express.json()); // para que el servidor entienda json en el body
app.use(cors());

//rutas
app.use("/api", predioRutas);

export default app;
