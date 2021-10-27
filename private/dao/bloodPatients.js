const fs = require('fs');
 
const DB_DATA_RAW = fs.readFileSync('private/db/bloodPatients.json');
const DB_DATA = JSON.parse(DB_DATA_RAW);

let bloodPatientsDao = () => {
    return {
        readAll: () => {
            return DB_DATA.patients;
        }
    }
}

module.exports = bloodPatientsDao;