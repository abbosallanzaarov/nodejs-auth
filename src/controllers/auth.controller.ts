import { User } from "@prisma/client";
import { Request, Response } from "express";
import jwtService from "../services/jwt.service";
import bcrypt from 'bcryptjs'

import userService from '../services/user.service'
import Role from "../model/role.enum";

    // compare passwords
    // generate jwt
    // user not found or passwords wrong
    // send 401    
export async function register(req: Request, res: Response) {
 // validate body
    try {
        // find user by username
        let user = await userService.findByUsername(req.body.username)

        if (user) {
            return res.status(400).send({
                message: "User with username " + req.body.username + " already exists" 
            })
        }

        let newUser: User = {
            id: 0,
            name: req.body.name,
            password: req.body.password,
            username: req.body.username,
            role: Role.USER
        }

        let createdUser = await userService.createUser(newUser)

        let token = jwtService.sign(createdUser)

        res.json({
            message: "User created!",
            username: createdUser.username,
            token
        })
    }
    catch(err: any) {
        res.status(500).json({
            message: "Internal error",
            error: err
        })
        throw err
    }
}

export async function login(req: Request, res: Response) {
    try {
        let user = await userService.findByUsername(req.body.username)

        if (!user) {
            return res.status(401).json({
                message: "User with username " + req.body.username + " not found!"
            })
        }

        if (bcrypt.compareSync(req.body.password, user.password)) {
            let token = jwtService.sign(user)
            res.json({
                message: "User created!",
                username: user.username,
                token
            })
        }
        else {
            return res.status(401).json({
                message: "Username or password wrong!"
            })
        }
    }
    catch(err: any) {
        res.status(500).json({
            message: "Internal error",
            error: err
        })
        throw err
    }
}

