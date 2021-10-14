var express = require('express');
var router = express.Router();
const greetingsController = require('../controller/greetingsController');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/hello', greetingsController.getHello);

router.get('/hello/:name', (req,res,nxt)=> {
  res.status(200).send(`Hello ${req.params.name}!`);
});

router.post('/hello', (req,res,next)=>{
  console.log({body: req.body});
  name = req.body['name'] || 'World';
  res.status(200).send(`Hello ${name}!`);
});

module.exports = router;
