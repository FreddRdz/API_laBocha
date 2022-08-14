const { check } = require('express-validator');
const { validateResult } = require('../helpers/validateHelper');

const validateCreate = [
  check('name').exists().isLength({ min: 2 }).not().isEmpty(),
  check('lastName').exists().isLength({ min: 2 }).not().isEmpty(),
  check('nationality').exists().isLength({ min: 2 }).not().isEmpty(),
  check('email').exists().isEmail().not().isEmpty(),
  check('password')
    .exists()
    .isLength({ min: 6, max: 100 })
    .matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/)
    .not()
    .isEmpty(),
  (req, res, next) => validateResult(req, res, next),
];

module.exports = { validateCreate };
