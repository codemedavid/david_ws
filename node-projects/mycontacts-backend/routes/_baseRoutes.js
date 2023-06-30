module.exports = (app) => {

    const router = require('express').Router()

    const tutorials = require('../controllers/tutorialControllers')

    

    router.post('/', tutorials.create)
    
    router.get('/', tutorials.findAll)

    router.delete('/', tutorials.deleteAll)
    router.delete('/:id', tutorials.deleteOne)
    router.get('/:id', tutorials.findOne)
    router.put('/:id', tutorials.update)


    app.use('/tutorials/', router)
}