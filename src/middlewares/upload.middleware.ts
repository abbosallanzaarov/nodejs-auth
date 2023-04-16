import multer from "multer"
import { nanoid } from "nanoid"

let storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './uploads')
    },
    filename: function (req, file, cb) {
        cb(null, nanoid() + ".png")
    }
})

const upload = multer({ 
    storage: storage
})

export default upload