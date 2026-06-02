const express = require("express");
const cors = require("cors");

const mobs = require("./mobs.json");

const app = express();

app.use(cors());

app.get("/", (req, res) => {
  res.json({
    status: "online",
    total: mobs.length
  });
});

app.get("/mob/:nome", (req, res) => {

  const nome = req.params.nome.toLowerCase();

  const resultado = mobs.filter(m =>
    m["Nome do Mob"]
      .toLowerCase()
      .includes(nome)
  );

  res.json(resultado);

});

app.get("/arquivo/:arquivo", (req, res) => {

  const resultado = mobs.filter(
    m => m["Arquivo"] === req.params.arquivo.toUpperCase()
  );

  res.json(resultado);

});

app.get("/pontuados", (req, res) => {

  const resultado = mobs.filter(
    m => m["Pontos"] === 1
  );

  res.json(resultado);

});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log("API ONLINE");
});