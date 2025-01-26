import UserModel from "../models/user.js";
import { v2 as cloudinary } from "cloudinary";

function uploadFileCloudianry(file, folder) {
  const options = {
    use_filename: true,
    unique_filename: false,
    resource_type: "auto",
    asset_folder: folder,
  };
  return cloudinary.uploader.upload(file.tempFilePath, options);
}

// custom file support and mb limit
function isSupported(support, extension, data) {
  if (!support.includes(extension)) {
    return { valid: false, reason: "File type not supported" };
  }
  if (data) {
    const mb = data.size / 1048576;
    if (mb >= 100) {
      return {
        valid: false,
        reason: `File too big , as it should be less than 100 mb`,
      };
    }
  }

  return { valid: true };
}

export const LocalImage = async function (req, res) {
  try {
    //file fetch from request
    const file = req.files.file;

    //path where file need to be store
    const path =
      process.cwd() +
      "\\images" +
      "\\" +
      Date.now() +
      `.${file.mimetype.split("/")[1]}`;

    //add file to the move function while defining the path
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

export const UploadCloud = async (req, res) => {
  try {
    // fetch the data
    const { username } = req.body;
    const image = req.files.file;

    //  validation
    const extension = image.name.split(".")[1];
    const supportedImage = ["jpg", "jpeg", "png"];
    const response = isSupported(supportedImage, extension);
    if (!response.valid) {
      return res.status(422).json({ message: response.reason });
    }
    // sendingv back to the cloudinary and getting the response back
    const data = await uploadFileCloudianry(image, "backend-data");

    const UpdateIamge = await UserModel.findOneAndUpdate(
      { username },
      { $push: { imageUrl: data.secure_url } },
      { new: true }
    );

    if (!UpdateIamge) {
      const User = await UserModel.create(
        {
          username,
          imageUrl: data.secure_url,
        },
        { new: true }
      );
      return res.json({ User });
    }

    res.json({ UpdateIamge });
  } catch (err) {
    console.error(err);
    res.status(500).json({ status: false, message: "Server Down" });
  }
};

export const UploadVideo = async (req, res) => {
  try {
    // data fetch
    const { username } = req.body;
    const video = req.files.video;
    console.log(video);

    // validation
    const SupportedFileType = ["mp4"];
    const VideoFileType = video.name.split(".")[1];
    // validation for file type as well as video size
    const response = isSupported(SupportedFileType, VideoFileType, video);
    if (!response.valid) {
      return res.status(422).json({ messgae: `${response.reason}` });
    }
    // uploading to cloudinary & getting back the data
    const data = await uploadFileCloudianry(video, "video_data");

    res.json({ data });
  } catch (err) {
    console.error(err);
    res.status(500).json({ status: false, message: "Server Down" });
  }
};
