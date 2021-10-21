var express = require('express');
const { validationResult } = require('express-validator');
var router = express.Router();
const greetingsRequestDto = require('./dto/greetingsRequestDto');
const greetingsController = require('../controller/greetingsController');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/**
 * @swagger
 * /hello:
 *  get:
 *    summary: Hello
 *    responses:
 *      '200':
 *        description: OK
 */
router.get('/hello', greetingsController.getHello);

/**
 * @swagger
 * /hello/{name}:
 *  get:
 *    summary: Hello With Path Variable
 *    parameters:
 *      - name: name
 *        in: path
 *        required: true
 *    responses:
 *      '200':
 *        description: OK
 */
router.get('/hello/:name', (req,res,nxt)=> {
  res.status(200).send(`Hello ${req.params.name}!`);
});

/**
 * @swagger
 * /hello:
 *  post:
 *    summary: Hello with POST Request
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            properties:
 *              name:
 *                type: string
 *    responses:
 *      '200':
 *        description: OK
 */
router.post('/hello', greetingsRequestDto, (req,res,next)=>{
  const validationErrors = validationResult(req);
  if(!validationErrors.isEmpty()){
    res.status(400).send(validationErrors);
    return;
  }
  console.log({body: req.body});
  name = req.body['name'] || 'World';
  res.status(200).send(`Hello ${name}!`);
});

module.exports = router;
