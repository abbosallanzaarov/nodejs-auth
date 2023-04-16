import { NextFunction, Request, Response } from "express";
import jwtService from "../services/jwt.service";

export default function (req: Request, res: Response, next: NextFunction) {
    let token = req.header('Authorization')

    if (!token) {
        return res.status(401).json({
            message: 'Access Token missing.'
        })
    }

    try {
        let payload = jwtService.validate(token)
        req.payload = payload

        next()
    }
    catch(err) {
        return res.status(401).json({
            message: 'Token validation error.',
            error: err
        })
    }
}