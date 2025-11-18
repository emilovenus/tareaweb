const express = require("express");
const app = express();
const port = process.env.PORT || 3001;
const cors = require("cors");

app.use(cors());

app.get("/", (req, res) => {
  res.send("Backend funcionando correctamente!");
});

app.get("/api/mensaje", (req, res) => {
  res.json({ mensaje: "Hola desde el backend!" });
});

app.listen(port, () => console.log("Servidor funcionando en puerto " + port));
