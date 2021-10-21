const service = require('../service/greetingsService');

exports.getHello = (req,res,next) =>{
    // Extract & Parse Parameters
    name = req.query['name'] || 'World';
    // Call Corresponding Service
    wellcomeMsg = service.generateWellcomeMessage(name);
    // Generate HTTP Response
    res.status(200).send(wellcomeMsg);
}
