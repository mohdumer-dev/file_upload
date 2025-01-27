import { Router } from "express";

const router = Router();

// controllers
import { LocalImage, reducerVideo, UploadCloud, UploadVideo } from "../controllers/image.js";

router.post("/localFile", LocalImage);
router.post("/cloudImage", UploadCloud);
router.post("/video", UploadVideo);
router.post("/reduceVideo", reducerVideo);


export default router;
