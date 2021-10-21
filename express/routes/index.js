var express = require('express');
var router = express.Router();
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
router.post('/hello', (req,res,next)=>{
  console.log({body: req.body});
  name = req.body['name'] || 'World';
  res.status(200).send(`Hello ${name}!`);
});

module.exports = router;
