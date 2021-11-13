const { body, validationResult } = require('express-validator');
exports.validateUser= [
body('fullname').isAlpha(),
body('password').isLength({ min: 5 }),
body('email').isEmail(),
];

