import * as express from 'express';
import * as Middleware from '../middleware/middleware';
import { Application } from 'express';
import * as http from 'http';
import * as os from 'os';

export default class ExpressServer {
  app = express();

  constructor() {
    Middleware.configure(this.app);
    Middleware.initErrorHandler(this.app);    
  }

  router(routes: (app: Application) => void): ExpressServer {
    routes(this.app)
    return this;
  }

  listen(p: string | number = process.env.PORT): Application {
    const welcome = (port:any) => () => console.log(`up and running in ${process.env.NODE_ENV || 'development'} @: ${os.hostname() } on port: ${port}}`);
    http.createServer(this.app).listen(p, welcome(p));
    return this.app;
  }

  handler(type: string, cb: any) {
    this.app.on(type, cb);
    return this;
  }
}
