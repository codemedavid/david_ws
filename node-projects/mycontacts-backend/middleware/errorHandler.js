const {constants} = require('../constants')
const errorHandler = (err, req, res, next) => {
    const statusCode = res.statusCode ? res.statusCode : 500
    switch(statusCode){
        case constants.VALIDATION_ERROR: 
        res.json({"Title": "Validation Failed",message: err.message, stackTrace: err.stack})
        break;

        case constants.NOT_FOUND: 
        res.json({"Title": "Not Found",message: err.message, stackTrace: err.stack})
        break;

        case constants.UNAUTORIZED: 
        res.json({"Title": "UNAUTORIZED",message: err.message, stackTrace: err.stack})
        break;

        case constants.FORBIDDEN: 
        res.json({"Title": "FORBIDDEN",message: err.message, stackTrace: err.stack})
        break;

        case constants.SERVER_ERROR: 
        res.json({"Title": "SERVER CURRENTLY DOWN",message: err.message, stackTrace: err.stack})
        break;

        default: 
        console.log("No errors")
        break;
    }
  

    
    
}

module.exports = errorHandler