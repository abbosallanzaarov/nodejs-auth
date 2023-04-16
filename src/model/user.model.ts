import { Photo, User } from "@prisma/client";
import Role from "./role.enum";

export type UserWithPhotos = User & { photos: Photo[] }

export type JwtPayload = {
    userId: number,
    username: string,
    role: Role
}