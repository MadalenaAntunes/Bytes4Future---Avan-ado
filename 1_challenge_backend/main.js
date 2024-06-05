const { Calculadora } = require("./services/coisas");

const express = require("express");
const app = express();
const PORT = 3001;

app.use(express.json());

const calculadora = new Calculadora();

app.post(`/op/potencia`, (req, res) => {
  const { a, b } = req.body;
  if (Number(a) && Number(b)) {
    calculadora.potencia(a, b);
    res.status(200).json({calculadora});
  } else {
    res.status(400).json({ erro: "Arguentos Inválidos" });
  }
});

app.post(`/op/somar`, (req, res) => {
  const { a, b } = req.body;
  if (Number(a) && Number(b)) {
    calculadora.somar(a, b);
    res.status(200).json({calculadora});
  } else {
    res.status(400).json({ erro: "Arguentos Inválidos" });
  }
});

app.post(`/op/subtrair`, (req, res) => {
  const { a, b } = req.body;
  if (Number(a) && Number(b)) {
    calculadora.subtrair(a, b);
    res.status(200).json({calculadora});
  } else {
    res.status(400).json({ erro: "Argumentos Inválidos" });
  }
});

app.post(`/op/multiplicar`, (req, res) => {
  const { a, b } = req.body;
  if (Number(a) && Number(b)) {
    calculadora.multiplicar(a, b);
    res.status(200).json({calculadora});
  } else {
    res.status(400).json({ erro: "Argumentos Inválidos" });
  }
});

app.post(`/op/dividir`, (req, res) => {
  const { a, b } = req.body;
  if (Number(a) && Number(b)) {
    calculadora.dividir(a, b);
    res.status(200).json({calculadora});
  } else {
    res.status(400).json({ erro: "Argumentos Inválidos" });
  }
});

app.post(`/repetir`, (req, res) => {
  const { num } = req.body;
  const historico = calculadora.historico;
  if (Number(num)) {
    if (historico.length > 0) {
      const ultimaoperacao = historico[historico.length - 1].split(" ");
      calculadora.aplicaOperacao(num, undefined, ultimaoperacao[1]);
    } else {
      res.status(400).json({ erro: "O histórico está vazio." });
    }
    res.status(200).json(calculadora);
  } else {
    res.status(400).json({ erro: "Argumentos Inválidos" });
  }
});


app.delete(`/delete`, (req, res) => {
  calculadora.limparHistorico();
  res.status(200).json(calculadora);
});

app.get(`/ultimo-resultado`, (req, res) => {
    res.status(200).json({ultimoResultado: `${calculadora.ultimoResultado}`})

});

app.get(`/`, (req, res) => { res.status(200).json(calculadora);});

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
