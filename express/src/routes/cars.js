var express = require('express');
const router = express.Router();
const {readAllCars, readCarByPlateNo} = require('../controller/cars');
const {validationResult} = require('express-validator');
const carReadRequestDto = require('./dto/carReadRequestDto');
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

/**
 * @swagger
 * /cars/{plate_no}:
 *  get:
 *    summary: Hello With Path Variable
 *    parameters:
 *      - name: plate_no
 *        in: path
 *        required: true
 *    responses:
 *      '200':
 *        description: OK
 */
router.get('/:plate_no', carReadRequestDto, (req, res, next) => {
    const errors = validationResult(req);
  if(!errors.isEmpty()){
      res.status(400).send(errors);
  }
  next();

}, readCarByPlateNo);

module.exports = router;

