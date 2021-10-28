const {readAll, readByPlateNo, createCar} = require('../service/cars');

exports.readAllCars = (req, res) =>{
    res.status(200).send(readAll(req.query));
}

exports.readCarByPlateNo = (req, res) =>{
    res.status(200).send(readByPlateNo(req.params['plate_no']));
}

exports.createCar = (req, res) =>{
    createCar(req.body);
    res.status(200).send(req.body);
}
