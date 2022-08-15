const express = require('express');
const {
  getAllPlayers,
  getPlayerById,
  createPlayer,
  modifyPlayer,
  deletePlayer,
} = require('../controllers/players');

const { validateCreate } = require('../validators/player');

const router = express.Router();

router.get('/', getAllPlayers);

router.get('/:id', getPlayerById);

router.post('/', validateCreate, createPlayer);

router.patch('/:id', modifyPlayer);

router.delete('/:id', deletePlayer);

module.exports = router;
