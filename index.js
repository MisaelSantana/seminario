const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.set('view engine', 'ejs');;

app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('Em desenvolvimento...');
});

app.get('/id', (req, res) => {
    res.send('Vizualizar mais');
  });

app.get('/usuario', (req, res) => {
    res.send('Pagina de acesso do usuário');
});

app.get('/mercado', (req, res) => {
  const listMercado = [{
    id: 1,
    nome: 'Angeloni',
  },
  {
    id: 2,
    nome: 'Condor',
  },
  {
    id: 3,
    nome: 'Forte Atacadista',
  }];
  res.render('mercado', {listMercado});
});

app.post('/salvarpedido', (req, res) => {
  let topic = {
    title: req.params.titulo,
    message: req.params.message,
  };
  console.log(topic)
  res.send(`Sua lista de pedidos foi enviado para nossos atendentes!', ${topic}`);
});

// const connection = require('./database/database');

// connection
//   .authenticate()
//   .then(() => {
//     console.log('MySQL: Conexão feita com sucesso!');
//   }).catch((error) => {
//     console.log(error);
//   });

app.listen(8080, () => console.log('Supermarket is running: http://localhost:8080'));