var express = require('express');
const router = express.Router();
const {readAllCars} = require('../controller/cars');
/**
 * @swagger
 * /cars:
 *  get:
 *    summary: Hello
 *    responses:
 *      '200':
 *        description: OK
 */
router.get('/', readAllCars);

module.exports = router;

