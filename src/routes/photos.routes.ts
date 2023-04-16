import { Router } from "express";
import { findAll, findByUserId, uploadPhoto } from "../controllers/photos.controller";
import passport from '../middlewares/passport.middleware'
import upload from '../middlewares/upload.middleware'

const router = Router()

router.get('/', findAll)

router.get('/:user_id', findByUserId)

router.post('/', passport, upload.single('photo'), uploadPhoto)

export default router