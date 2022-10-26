import { Router } from "express";
import { crearReceta, listarRecetas } from "../controllers/recetas.controllers";

const router = Router();

router.route("/recetas").get(listarRecetas).post(crearReceta);
router.route("/recetas/:id").get().put().delete();

export default router;
