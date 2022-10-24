const express = require('express');
const { Cat } = require('../src/models');

const app = express();


app.use(express.json());


app.post('/cats', (req, res) => {
  const catData = {
    ...req.body, 
    lastFed: new Date().toISOString()
  }
    Cat.create(catData).then(cat => res.status(201).json(cat))
  });
app.get('/cats', (req, res) => {
    Cat.findAll(req.body).then(cat => res.status(201).json(cat))
  });
  app.get('/cats/:catId', (req, res) => {
    Cat.findByPk(req.params.catId).then(cat => res.status(201).json(cat))
  });

module.exports = app;