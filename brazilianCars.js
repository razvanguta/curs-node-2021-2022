const fetch = require('node-fetch');

const brazilianCars = async (req, res) => {
  const response = await fetch('https://parallelum.com.br/fipe/api/v1/carros/marcas');
  const body = await response.json();
  const facts = body.map(({ nome, codigo}) => ({
    nome,
    codigo,
  }));
  res.send(facts);
}

module.exports = brazilianCars;