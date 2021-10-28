const {readAll} = require('../service/cars');

exports.readAllCars = (req, res) =>{
    res.status(200).send(readAll());
}
