const playerService = require('../services/playerService');
const { compare } = require('../helpers/cryptHandler');
const { userLogged } = require('../helpers/playerLoggedHandler');

const playerController = {
  getAllPlayers: async (req, res) => {
    // Get all users from database
    const allPlayers = await playerService.getAll();

    res.status(200).json({
      status: 200,
      total: allPlayers.length,
      data: allPlayers,
    });
  },

  getPlayerById: async (req, res) => {
    const { id } = req.params;

    // Get player by id
    const player = await playerService.getOne(id);

    res.status(200).json({ status: 200, data: player });
  },

  createPlayer: async (req, res) => {
    const newPlayer = { ...req.body };

    //Create a new user
    const playerCreated = await playerService.create(newPlayer);

    res.status(201).json({ status: 201, data: playerCreated });
  },

  loginPlayer: async (req, res) => {
    const { email, password } = req.body;

    // Found player in db by email
    const playerFound = await playerService.login(email);

    if (!playerFound) {
      res.status(403).json({ status: 403, data: 'Usuario no encontrado' });
    } else {
      // Comparing password given from frontEnd and validate it the hash password
      const player = await compare(password, playerFound.password);

      // Getting a object data if player
      const { status, data } = userLogged(player);

      res.status(status).json({ status: status, data: data });
    }
  },

  modifyPlayer: (req, res) => {
    res.status(200).send('Player modified');
  },

  deletePlayer: (req, res) => {
    res.status(200).send('Player deleted');
  },
};

module.exports = playerController;
