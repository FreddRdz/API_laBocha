const PLAYER = require('../models/player');

const playerService = {
  getAll: () => {
    try {
      return PLAYER.find({});
    } catch (error) {
      return error;
    }
  },

  getOne: (id) => {
    try {
      return PLAYER.find({ _id: id });
    } catch (error) {
      return error;
    }
  },
  create: (newPlayer) => {
    try {
      return PLAYER.create(newPlayer);
    } catch (error) {
      return error;
    }
  },
  delete: (id) => {},

  login: (email) => {
    try {
      return PLAYER.findOne({ email: email });
    } catch (error) {
      return error;
    }
  },
};

module.exports = playerService;
