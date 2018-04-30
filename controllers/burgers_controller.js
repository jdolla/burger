const express = require('express');
const router = express.Router();
const burger = require('../models/burger');

//CRUD routes
//Include 'All Burgers'

router.get('/', (req, res) => {
  res.render("index")
});

router.get('/all', (req, res) => {
  res.end('ALL');
});

router.get('/burger/:id', (req, res) => {
  res.end('Single Burger')
});

router.post('/burger', (req, res) => {
  res.end('New Burger');
});

router.put('/burger/:id', (req, res) => {
  res.end('Burger updated');
});

module.exports = router;