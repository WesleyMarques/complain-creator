import * as express from 'express';
import ComplainController from './complain.controller';


export default express.Router()
    .get('/', ComplainController.findAll)
    .get('/:id', ComplainController.findById)
    .post('/', ComplainController.create)
    .delete('/:id', ComplainController.remove)
    .put('/:id', ComplainController.replace)
    .patch('/:id', ComplainController.update)
