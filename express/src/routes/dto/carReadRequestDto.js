const {param} = require('express-validator');

module.exports = [
    param('plate_no').exists(),
    param('plate_no').matches(/^[a-z]{3}-[0-9]{3}$/)
];
