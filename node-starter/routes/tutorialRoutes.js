
module.exports = (app) => {
const tutorial = require('../controllers/tutorial.controllers');


const router = require('express').Router();

router.post('/', tutorial.create);
router.get('/', tutorial.findAll);
router.get('/:id', tutorial.findOne);
router.put('/:id', tutorial.update);
router.delete('/', tutorial.deleteAll);
router.delete('/:id', tutorial.deleteOne);


  app.use('/api/tutorial', router);
};
