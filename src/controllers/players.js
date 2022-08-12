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

  getPlayerById: (req, res) => {
    return res.status(200).send('Player');
  },

  createPlayer: (req, res) => {
    return res.status(201).send('Player created');
  },

  modifyPlayer: (req, res) => {
    return res.status(200).send('Player modified');
  },

  deletePlayer: (req, res) => {
    return res.status(200).send('Player deleted');
  },
};

module.exports = playerController;
