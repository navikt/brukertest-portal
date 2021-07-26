import { NextFunction, Request, Response } from 'express'

export const errorBehandler = (error: Error, request: Request, response: Response, next: NextFunction) => {
    if (error instanceof BaseError) {
    }
}
