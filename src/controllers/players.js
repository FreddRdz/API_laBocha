const playerService = require('../services/playerService');
const { compare } = require('../helpers/cryptHandler');
const { userLogged } = require('../helpers/playerLoggedHandler');

const playerController = {
  getAllPlayers: async (req, res) => {
    const allPlayers = await playerService.getAll();

    res.status(200).json({
      status: 200,
      total: allPlayers.length,
      data: allPlayers,
    });
  },

  getPlayerById: async (req, res) => {
    const { id } = req.params;
    const player = await playerService.getOne(id);

    res.status(200).json({ status: 200, data: player });
  },

  createPlayer: async (req, res) => {
    const newPlayer = { ...req.body };

    const playerCreated = await playerService.create(newPlayer);

    res.status(201).json({ status: 201, data: playerCreated });
  },

  loginPlayer: async (req, res) => {
    const { email, password } = req.body;
    const playerFound = await playerService.login(email);
    const player = await compare(password, playerFound.password);
    const { status, data } = userLogged(player);

    res.status(status).json({ status: status, data: data });
  },

  modifyPlayer: (req, res) => {
    res.status(200).send('Player modified');
  },

  deletePlayer: (req, res) => {
    res.status(200).send('Player deleted');
  },
};

module.exports = playerController;
