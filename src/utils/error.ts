import { Error } from 'mongoose';
import { Response } from 'express';

export const handleError = (error: Error, code: number, response: Response) => response.status(code).send({ err: error.message });
