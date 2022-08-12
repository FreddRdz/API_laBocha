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
    const newPlayer = {
      name: 'Alfredo',
      lastName: 'Rodríguez',
      email: 'fredd.073100@gmail.com',
      password: '123456',
      goals: 0,
      nationality: 'MXN',
      weight: 57.3,
      height: 1.73,
      matchesPlayed: 0,
      actualClub: null,
      imagePlayer:
        'https://sabercompetir.com/el-perfil-del-jugador-competitivo/',
      trophies: null,
    };
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
