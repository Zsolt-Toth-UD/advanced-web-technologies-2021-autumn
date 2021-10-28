
let database = [
    {
        plate_no: 'abc-123',
        color: 'green',
        manufacturer: 'Fiat',
        model : 'Panda'
    }
];

exports.readAll = () => {
    return database;
}

exports.readByPlateNo = (plate_no) => {
    const result = database.find((record) => record.plate_no == plate_no)
    return result || {};
}

exports.createCar = (car) => {
    database.push(car);
}

