import { Photo } from "@prisma/client";
import { Request, Response } from "express";
import photoService from "../services/photo.service";

export async function findAll(req: Request, res: Response) {
    try {
        let photos = await photoService.findAll()
        res.json({
            message: 'Photos retrived!',
            photos
        })
    }
    catch(err: any) {
        res.status(500).json({
            message: "Internal error",
            error: err
        })
    }
}

export async function findByUserId(req: Request, res: Response) {
    try {
        let userId = +req.params.user_id
        let photos = await photoService.findByUserId(userId)
        res.json({
            message: 'Photos retrived!',
            photos
        })
    }
    catch(err: any) {
        res.status(500).json({
            message: "Internal error",
            error: err
        })
    }
}

export async function uploadPhoto(req: Request, res: Response) {
    try {
        let { caption } = req.body

        if (!req.file) {
            return res.status(400).json({
                message: 'Photo missing.'
            })
        }

        let photo: Photo = {
            id: 0,
            caption: caption,
            url: req.file.filename,
            userId: req.payload.userId
        }

        let newPhoto = await photoService.create(photo)

        res.json({
            message: "photo uploaded.",
            photo: newPhoto
        })
    }
    catch(err: any) {

    }
}