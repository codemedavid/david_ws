const router = require('express').Router()


//create new data to api
exports.create = (req, res) => {
    res.send('POST > Create Response from Controller')
}
//get all the data's from api
exports.findAll = (req, res) => {
    res.send('GET > GET ALL Response from Controller')
}

//get specific data from api
exports.findOne = (req, res) => {
    res.send('GET > GET ONE Response from Controller')

}
//update api
exports.update = (req, res) => {
    res.send('PUT > UPDATE Response from Controller')
}
//delete all data's
exports.deleteAll = (req, res) => {
    res.send('DELETE > DELETE ALL Response from Controller')

}
//delete specific data from api
exports.deleteOne = (req, res) => {
    res.send('DELETE > DELETE ONE Response from Controller')

}