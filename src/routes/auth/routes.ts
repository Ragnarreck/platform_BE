import express from 'express';
import * as controllers from './controllers';

export default (app: express.Application) => {
    app.post('/signin', controllers.sign_in);
    app.post('/signup', controllers.sign_up);
};
