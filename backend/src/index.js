const express = require('express');

const cors  = require('cors');

const routes  = require('./routes');


const app = express();


app.use(cors());
app.use(express.json());
app.use(routes);
/**
 * Rota  / Recurso
 */

 /** Métodos HTTP:
  * 
  * Get: Buscar/Listar uma informacao
  * Post: Criar uma informacao no backend
  * Put: Alterar uma informacao no backend
  * Delete: Deletar uma informacao no backend
  */

/** tipos de parametros
 * 
 * 
 * Query params: Parâmetros nomeados enviados na rota apos ? (filtros e paginacao)
 * Route Params: Parâmetros utilizados para identificar recursos
 * Request Body: Corpo da requisicao, utilizado para criar ou alterar recursos
 */

 /**
  * SQL: MySQL, SQLite, PostgreSQL, Microsoft SQL server
  * NoSQL: MongoDB, CouchDB, etc
  */

/** 
 * Driver: SELECT * FROM users
 * Query Builder: table('users').select('*').where()
 * 
 */




app.listen(3333);

