const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.set('view engine', 'ejs');;

app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

// Configuração das rotas do website
app.get('/', (req, res) => {
    res.render('Listar todos os itens do mercado');
});

app.get('/cereais', (req, res) => {
    res.send('Cereais');
});

app.get('/graos', (req, res) => {
    res.send('Grãos');
});

app.get('/produtos-limpeza', (req, res) => {
    res.send('Produtos de Limpeza');
});

app.get('/acougue', (req, res) => {
    res.send('Açougue');
});

app.get('/padaria', (req, res) => {
    res.send('Padaria');
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

app.post('/realizar-pedido', (req, res) => {
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

// Configuração do server
app.listen(9000, (erro) => {
  if(erro) {
    console.log(erro, 'Ops, erro de servidor na porta 9000');
  } else {
    console.log('Servidor rodando : https//localhost:9000');
  }
});