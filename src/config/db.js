const { connect } = require('mongoose');

const MONGODB_URI = process.env.MONGODB_URI;

const connectToDb = async () => {
  try {
    await connect(MONGODB_URI, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });
    console.log('Connection to database successful!');
  } catch (error) {
    console.log(error);
  }
};

module.exports = connectToDb;
