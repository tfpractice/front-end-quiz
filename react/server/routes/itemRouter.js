const express = require('express');
const cachedItems = require('../data/items.json');

// const getStore = require('../../imports/store');

// console.log('getStore', getStore);

// const getStore = require('../../imports/store');

const itemRouter = express.Router();

const getItem = function(itemId) {
  return (
    cachedItems.find(item => item.id === itemId || item.integerId === itemId) ||
    {}
  );
};

itemRouter.get('/:id', (req, res) => {
  const id = req.params.id;
  const item = getItem(id);

  res.render('item', { item });
});

itemRouter.get('/:id/data', (req, res) => {
  const id = req.params.id;
  const item = getItem(id);

  res.status(200).json(item);
});

module.exports = itemRouter;
