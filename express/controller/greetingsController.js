const service = require('../service/greetingsService');

exports.getHello = (req,res,next) =>{
    name = req.query['name'] || 'World';
    res.status(200).send(service.generateWellcomeMessage(name));
}
