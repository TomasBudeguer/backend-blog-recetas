import Receta from "../models/receta";

export const listarRecetas = async (req, res) => {
  try {
    const listaRecetas = await Receta.find();
    res.status(200).json(listaRecetas);
  } catch (error) {
    console.log(error);
    res.status(404).json({
      mensaje: "Error al mostrar lista de recetas",
    });
  }
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
