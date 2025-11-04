// database/conexion.cjs
const mongoose = require("mongoose");
require("dotenv").config();

const conexion = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Conexión a MongoDB exitosa");
  } catch (error) {
    console.error("Error al conectar a MongoDB:", error.message);
    process.exit(1); // Detiene la app si no se puede conectar
  }
};

module.exports = { conexion };
