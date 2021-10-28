
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

