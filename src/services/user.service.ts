import bcrypt from 'bcryptjs'
import { User } from "@prisma/client";
import prisma from "./prisma";
import { UserWithPhotos } from '../model/user.model';


async function createUser(user: User): Promise<User> {

    let salt = bcrypt.genSaltSync(10)
    let hashedPassword = bcrypt.hashSync(user.password, salt)

    return prisma.user.create({
        data: {
            name: user.name,
            username: user.username,
            password: hashedPassword,
            role: user.role
        }
    })
}

async function findByUsername(username: string): Promise<UserWithPhotos | null> {
    return prisma.user.findUnique({
        where: {
            username: username
        },
        include: {
            photos: true
        }
    })
}

export default {
    createUser,
    findByUsername
}