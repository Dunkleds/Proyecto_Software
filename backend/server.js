// server.js
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import pkg from "pg";

const { Pool } = pkg;

// Cargar variables de entorno
dotenv.config();

console.log("Usuario:", process.env.DB_USER);
console.log("Host:", process.env.DB_HOST);
console.log("Base de datos:", process.env.DB_NAME);
console.log("Password:", process.env.DB_PASSWORD);
console.log("Puerto:", process.env.DB_PORT);

// Crear conexión al pool de PostgreSQL
const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
});

const app = express();
app.use(cors());
app.use(express.json());

// Ruta para obtener productos desde PostgreSQL
app.get("/productos", async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM productos");
    res.json(result.rows); // Envía los productos al frontend
  } catch (err) {
    console.error("❌ Error en la consulta:", err);
    res.status(500).json({ error: "Error al obtener productos" });
  }
});

app.get("/", (req, res) => {
  res.send("🚀 Backend funcionando correctamente");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`);
});
