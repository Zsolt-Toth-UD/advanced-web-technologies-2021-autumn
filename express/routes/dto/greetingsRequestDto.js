const {body} = require('express-validator');

module.exports = [
   body('name','Name must be specified!').exists().isString()
];
