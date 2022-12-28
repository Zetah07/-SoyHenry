const express = require("express");
const app = express();

app.use(express.json()); // for parsing application/json

app.get("/", (req, res) => {
  res.send({
    message: "hola",
  });
});

app.get("/test", (req, res) => {
  res.send({
    message: "test",
  });
});

app.post("/sum", (req, res) => {
  res.send({
    result: 5,
  });
});

app.post("/product", (req, res) => {
  res.send({
    result: req.body.a * req.body.b,
  });
});

function sumArray(array, targetNum) {
  let left = 0,
    right = array.length - 1;
  while (left < right) {
    const sum = array[left] + array[right];
    if (sum === targetNum) return true;
    sum < targetNum ? left++ : right--;
  }
  return false;
}

app.post("/summArray", (req, res) => {
  const { array, num } = req.body;

  res.send({
    result: sumArray(array, num),
  });
});

module.exports = app; // Exportamos app para que supertest session la pueda ejecutar
