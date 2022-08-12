const { Schema, model } = require('mongoose');

const PlayerSchema = new Schema({
  name: {
    type: String,
    required: true,
  },

  lastName: {
    type: String,
    required: true,
  },

  email: {
    type: String,
    required: true,
    unique: true,
  },

  password: {
    type: String,
    required: true,
    unique: true,
  },

  goals: {
    type: Number,
    required: true,
  },

  nationality: {
    type: String,
    required: true,
  },

  weight: {
    type: Number,
    required: true,
  },

  height: {
    type: Number,
    required: true,
  },

  matchesPlayed: {
    type: Number,
  },

  actualClub: {
    type: Schema.Types.ObjectId,
    ref: 'Club',
  },

  imagePlayer: {
    type: String,
    required: true,
  },

  trophies: [{ type: Schema.Types.ObjectId, ref: 'Trophy' }],
});

const Player = model('Player', PlayerSchema);

module.exports = Player;
