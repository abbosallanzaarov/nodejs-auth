import {} from 'express'
import { JwtPayload } from '../../src/model/user.model'

declare global {
    namespace Express {
        interface Request {
            payload: JwtPayload,
            codership: string
        }
    }
}