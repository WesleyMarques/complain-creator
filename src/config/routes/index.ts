import * as express from 'express';
import * as http from 'http';

import UserRouter from '../../components/complain/complain.router';
import swaggerRouter from '../swagger/swagger.routes';

/**
 * @export
 * @param {express.Application} app
 */
export default function routes(app: express.Application): void {
        
    app.use('/v1/users', UserRouter);

    app.use('/v1/docs', swaggerRouter);

    /** 
     * @description No results returned mean the object is not found
     * @constructs
     */
    app.use((req, res, next) => {
        res.status(404).send(http.STATUS_CODES[404]);
    });
}
