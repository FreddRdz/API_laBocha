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
    default: 0,
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
  },

  curp: {
    type: String,
    required: true,
    unique: true,
  },

  trophies: [{ type: Schema.Types.ObjectId, ref: 'Trophy' }],

  createdAt: {
    type: Date,
    default: new Date(),
  },

  deletedAt: {
    type: Date,
  },
});

const Player = model('Player', PlayerSchema);

module.exports = Player;
