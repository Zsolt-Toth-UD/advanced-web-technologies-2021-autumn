var express = require('express');
const router = express.Router();
const {readAllCars, readCarByPlateNo, createCar} = require('../controller/cars');
const {validationResult} = require('express-validator');
const carReadRequestDto = require('./dto/carReadRequestDto');
const carRecordRequestDto = require('./dto/carRecordRequestDto');
const carReadAllRequestDto = require('./dto/carReadAllRequestDto');

const validateRequest = (req, res, next) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        res.status(400).send(errors);
        return;
    }
    next();
};


/**
 * @swagger
 * /cars:
 *  get:
 *    summary: Hello
 *    parameters:
 *      - name: color
 *        in: query
 *        type: string
 *        required: false
 *      - name: manufacturer
 *        in: query
 *        type: string
 *        required: false
 *      - name: model
 *        in: query
 *        type: string
 *        required: false
 *    responses:
 *      '200':
 *        description: OK
 */
router.get('/', carReadAllRequestDto, validateRequest, readAllCars);

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
router.get('/:plate_no', carReadRequestDto, validateRequest , readCarByPlateNo);


/**
 * @swagger
 * /cars:
 *  post:
 *    summary: Hello With Path Variable
 *    requestBody:
 *      required: true
 *      content:
 *          application/json:
 *              schema:
 *                  type: object
 *                  properties:
 *                      plate_no:
 *                          type: string
 *                      color:
 *                          type: string
 *                      manufacturer:
 *                          type: string
 *                      model:
 *                          type: string
 *              examples:
 *                  panda:
 *                      summary: Fiat Panda
 *                      value:
 *                          plate_no: 'abc-123'
 *                          color: 'green'
 *                          manufacturer: 'Fiat'
 *                          model: 'Panda'
 *    responses:
 *      '200':
 *        description: OK
 */
router.post("/", carRecordRequestDto, validateRequest, createCar);

module.exports = router;

