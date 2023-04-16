import { Photo } from "@prisma/client";
import prisma from "./prisma";

function findAll(): Promise<Photo[]> {
    return prisma.photo.findMany()
}


function findByUserId(id: number): Promise<Photo[]> {
    return prisma.photo.findMany({
        where: {
            userId: id
        }
    })
}

function create(photo: Photo): Promise<Photo> {
    return prisma.photo.create({
        data: {
            url: photo.url,
            caption: photo.caption,
            userId: photo.userId
        }
    })
}

export default {
    create, 
    findAll,
    findByUserId
}