import { User } from "@prisma/client";
import jwt from 'jsonwebtoken'
import Role from "../model/role.enum";
import { JwtPayload } from "../model/user.model";

function sign(user: User): string {

    let payload: JwtPayload = {
        userId: user.id,
        username: user.username,
        role: user.role as Role
    }

    return jwt.sign(payload, process.env.JWT_SECRET!)
}

function validate(token: string): JwtPayload {
    return jwt.verify(token, process.env.JWT_SECRET!) as JwtPayload
}

export default {
    sign,
    validate
}

