import mongoose, { Schema } from "mongoose";

const recetaSchema = new Schema({
  nombreReceta: {
    type: String,
    required: true,
    unique: true,
    minLength: 2,
    maxLength: 50,
  },
  descripcion: {
    type: String,
    required: true,
    minLength: 10,
    maxLength: 150,
  },
  imagen: {
    type: String,
    required: true,
  },
  categoria: {
    type: String,
    required: true,
  },
});

const Receta = mongoose.model("receta", recetaSchema);

export default Receta;
