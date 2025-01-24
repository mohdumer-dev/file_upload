import { Router } from "express";

const router=Router()


// controllers
import { LocalImage } from "../controllers/image.js";

router.post('/upload',LocalImage)

export default router