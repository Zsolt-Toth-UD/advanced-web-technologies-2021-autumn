const {body} = require('express-validator');

module.exports = [
    body('plate_no').exists(),
    body('plate_no').matches(/^[a-z]{3}-[0-9]{3}$/),
    body('color').exists(),
    body('manufacturer').exists(),
    body('model').exists()
]
