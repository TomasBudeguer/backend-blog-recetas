import Receta from "../models/receta";

export const listarRecetas = (req, res) => {
  res.send("Esto es una prueba de la peticion GET recetas");
};

export const crearReceta = async (req, res) => {
  try {
    const nuevaReceta = new Receta(req.body);
    await nuevaReceta.save();
    res.status(201).json({
      mensaje: "La receta fue correctamente creada",
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({
      mensaje: "Error al añadir la receta",
    });
  }
};
