import { Router } from "express";

const router=Router()


// controllers
import { LocalImage, UploadCloud } from "../controllers/image.js";

router.post('/localFile',LocalImage)
router.post('/cloudImage',UploadCloud)

export default router