import { get } from 'lodash';
import { Error } from 'mongoose';
import { Request, Response } from 'express';
import { UserScheme } from '../../interfaces/user';
import * as services from '../../services/auth';
import { handleError } from '../../utils/error';

export const sign_in = (request: Request, response: Response) => {
    return services.sign_in(request.body)
        .then((info: UserScheme) => {
            if (info.password !== get(request, 'body.password')) {
                throw new Error('Wrong password');
            }
            return response.send(info);
        })
        .catch((err: Error) => handleError(err, 400, response));
};

export const sign_up = (request: Request, response: Response) =>
    services.sign_up(request.body)
        .then((info: UserScheme) => response.send(info))
        .catch((err: Error) => handleError(err, 400, response));
