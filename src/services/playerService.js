const PLAYER = require('../models/player');

const playerService = {
  getAll: () => {
    try {
      return PLAYER.find({});
    } catch (error) {
      return error;
    }
  },
};

module.exports = playerService;
