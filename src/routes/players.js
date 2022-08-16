const express = require('express');
const {
  getAllPlayers,
  getPlayerById,
  createPlayer,
  loginPlayer,
  modifyPlayer,
  deletePlayer,
} = require('../controllers/players');

const { validateCreate } = require('../validators/player');

const { passwordToCrypt } = require('../middlewares/encryptPassword');

const router = express.Router();

router.get('/', getAllPlayers);

router.get('/:id', getPlayerById);

router.post('/register', validateCreate, passwordToCrypt, createPlayer);

router.post('/login', loginPlayer);

router.patch('/:id', modifyPlayer);

router.delete('/:id', deletePlayer);

module.exports = router;
