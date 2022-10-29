import { Router } from "express";
import { check } from "express-validator";
import {
  borrarReceta,
  crearReceta,
  editarReceta,
  listarRecetas,
  obtenerReceta,
} from "../controllers/recetas.controllers";

const router = Router();

router
  .route("/recetas")
  .get(listarRecetas)
  .post(
    [
      check("nombreReceta")
        .notEmpty()
        .withMessage("El nombre de la receta es un campo obligatorio")
        .isLength({ min: 2, max: 70 })
        .withMessage("El nombre debe contener entre 2 y 70 caracteres"),
      check("descripcion")
        .notEmpty()
        .withMessage("La descripcion es un campo obligatorio")
        .isLength({ min: 5, max: 150 })
        .withMessage("La descripcion debe contener entre 5 y 150 caracteres"),
      check("imagen")
        .notEmpty()
        .withMessage("La imagen es un dato obligatorio")
        .matches(/^https?:\/\/[\w\-]+(\.[\w\-]+)+[/#?]?.*$/)
        .withMessage("Debe enviar una URL valida"),
      check("categoria")
        .notEmpty()
        .withMessage("La categoria es un dato obligatorio")
        .isIn([
          "dulce",
          "bebida fria",
          "bebida caliente",
          "salado",
          "ensaldas",
          "postres",
          "tortas",
          "tartas",
        ])
        .withMessage("La categoria debe ser correcta"),
    ],
    crearReceta
  );
router
  .route("/recetas/:id")
  .get(obtenerReceta)
  .put(editarReceta)
  .delete(borrarReceta);

export default router;
