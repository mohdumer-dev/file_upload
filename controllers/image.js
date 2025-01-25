import UserModel from "../models/user.js";
import { v2 as cloudinary } from "cloudinary";

export const LocalImage = async function (req, res) {
  try {
    //file fetch from request
    const file = req.files.file;

    console.log(file);
    //path where file need to be store
    const path =
      process.cwd() +
      "\\images" +
      "\\" +
      Date.now() +
      `.${file.mimetype.split("/")[1]}`;

    //add file to the move funcation while defining the path
    file.mv(path, (err) => {
      if (err) {
        console.log(err);
      }
    });

    res.status(200).json({ status: true, message: "File Uploaded" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ status: false, message: "Server Down" });
  }
};

function isSupported(support, extension) {
  return support.includes(extension);
}

export const UploadCloud = async (req, res) => {
  const { username } = req.body;
  const image = req.files.file;
  try {
    console.log(image)
    const extension = image.name.split(".")[1];
    const supportedImage = ["jpg", "jpeg", "png"];
    if (!isSupported(supportedImage, extension)) {
    res.status(422).json({ status: false, message:"File type not supported"})
    }
   const data=await cloudinary.uploader.upload(image.tempFilePath)
    res.json({data})
  } catch (err) {
    console.error(err);
    res.status(500).json({ status: false, message: "Server Down" });
  }
};
