const playerController = {
  getAllPlayers: (req, res) => {
    return res.status(200).send('All players');
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
