const express = require('express');

const router = express.Router();

const {
  getAllPlayers,
  getPlayerById,
  createPlayer,
  modifyPlayer,
  deletePlayer,
} = require('../controllers/players');

router.get('/', getAllPlayers);

router.get('/:id', getPlayerById);

router.post('/', createPlayer);

router.patch('/:id', modifyPlayer);

router.delete('/:id', deletePlayer);

module.exports = router;
