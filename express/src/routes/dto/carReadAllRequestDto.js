const {query} = require('express-validator');

module.exports = [
    query('color').optional().isString(),
    query('manufacturer').optional().isString(),
    query('model').optional().isString()
]
