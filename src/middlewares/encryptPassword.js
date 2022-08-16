const { encrypt } = require('../helpers/cryptHandler');

const passwordToCrypt = async (req, res, next) => {
  req.body.password = await encrypt(req.body.password);
  next();
};

module.exports = { passwordToCrypt };
