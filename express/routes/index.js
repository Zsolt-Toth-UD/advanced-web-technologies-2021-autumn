var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/hello', (req,res,nxt)=>{
  name = req.query['name'] || 'World';
  res.status(200).send(`Hello ${name}!`);
});

router.get('/hello/:name', (req,res,nxt)=> {
  res.status(200).send(`Hello ${req.params.name}!`);
});

router.post('/hello', (req,res,next)=>{
  console.log({body: req.body});
  name = req.body['name'] || 'World';
  res.status(200).send(`Hello ${name}!`);
});

module.exports = router;
