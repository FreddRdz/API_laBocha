const { check } = require('express-validator');
const { validateResult } = require('../helpers/validateHelper');
const { validateCurp } = require('../helpers/curpHelper');

const validateCreate = [
  check('name').exists().trim().isLength({ min: 2 }).not().isEmpty(),
  check('lastName').exists().trim().isLength({ min: 2 }).not().isEmpty(),
  check('nationality').exists().trim().isLength({ min: 2 }).not().isEmpty(),
  check('email').exists().trim().isEmail().not().isEmpty(),
  check('password')
    .exists()
    .trim()
    .isLength({ min: 6, max: 100 })
    .matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/)
    .not()
    .isEmpty(),
  check('curp')
    .trim()
    .exists()
    .toUpperCase()
    .custom((value, { req }) => {
      let validateCurpResult = validateCurp(value);

      if (value.length === 18) {
        if (validateCurpResult) {
          return true;
        }
      }
    })
    .not()
    .isEmpty(),
  (req, res, next) => validateResult(req, res, next),
];

module.exports = { validateCreate };
