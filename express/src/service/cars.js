
let database = [
    {
        plate_no: 'abc-123',
        color: 'green',
        manufacturer: 'Fiat',
        model : 'Panda'
    }
];

exports.readAll = (filterCriteria) => {
    console.log({filterCriteria: filterCriteria});
    return database.filter((record) => {
        return Object.keys(filterCriteria).reduce((acc, currKey) => record[currKey] === filterCriteria[currKey], true);
    });
}

exports.readByPlateNo = (plate_no) => {
    const result = database.find((record) => record.plate_no == plate_no)
    return result || {};
}

exports.createCar = (car) => {
    database.push(car);
}

