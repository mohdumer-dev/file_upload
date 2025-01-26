import { Router } from "express";

const router = Router();

// controllers
import { LocalImage, UploadCloud, UploadVideo } from "../controllers/image.js";

router.post("/localFile", LocalImage);
router.post("/cloudImage", UploadCloud);
router.post("/video", UploadVideo);

export default router;
