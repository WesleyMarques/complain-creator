import * as express from 'express';
import ComplainController from './complain.controller';


export default express.Router()
    .get('/', ComplainController.listUsers)
