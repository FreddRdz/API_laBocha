const playerService = require('../services/playerService');

const playerController = {
  getAllPlayers: async (req, res) => {
    const allPlayers = await playerService.getAll();

    return res.status(200).json({
      status: 200,
      total: allPlayers.length,
      data: allPlayers,
    });
  },

  getPlayerById: async (req, res) => {
    const { id } = req.params;
    const player = await playerService.getOne(id);

    return res.status(200).json({ status: 200, data: player });
  },

  createPlayer: async (req, res) => {
    const newPlayer = { ...req.body };
    const playerCreated = await playerService.create(newPlayer);

    return res.status(201).json({ status: 201, data: playerCreated });
  },

  modifyPlayer: (req, res) => {
    return res.status(200).send('Player modified');
  },

  deletePlayer: (req, res) => {
    return res.status(200).send('Player deleted');
  },
};

module.exports = playerController;
