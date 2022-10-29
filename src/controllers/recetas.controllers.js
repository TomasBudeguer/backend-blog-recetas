import Receta from "../models/receta";
import { validationResult } from "express-validator";

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
    const errores = validationResult(req);
    if(!errores.isEmpty()){
      return res.status(400).json({
        errores: errores.array()
      })
    }
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

export const obtenerReceta = async(req,res)=>{
  try {
    const recetaBuscada = await Receta.findById(req.params.id)
    res.status(200).json(recetaBuscada)
  } catch (error) {
    console.log(error)
    res.status(404).json({
      mensaje: "Error al encontrar la receta solicitada"
    })
  }
}

export const editarReceta = async(req,res) =>{
  try {
    const errores = validationResult(req);
    if(!errores.isEmpty()){
      return res.status(400).json({
        errores: errores.array()
      })
    }
    await Receta.findByIdAndUpdate(req.params.id, req.body)
    res.status(200).json({
      mensaje: "La receta fue editada correctamente"
    })
  } catch (error) {
    console.log(error)
    res.status(404).json({
      mensaje: "Error al editar la receta solicitada"
    })
  }
}

export const borrarReceta = async(req, res) =>{
  try {
    await Receta.findByIdAndDelete(req.params.id)
    res.status(200).json({
      mensaje: "La receta fue borrada exitosamente"
    })
  } catch (error) {
    console.log(error)
    res.status(404).json({
      mensaje: "Error al borrar la receta solicitada"
    })
  }
}
