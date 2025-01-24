import express from "express";
const app = express();

// env
import env from "dotenv";
env.config();

//middleware
app.use(express.json());
import file from "express-fileupload";
app.use(
  file({
    useTempFiles: true,
    tempFileDir: "/tmp/",
  })
);

// cloudinary
import { CloudinaryConnect } from "./config/cloudinary.js";
CloudinaryConnect();

// db
import { ConnectDb } from "./config/db.js";
ConnectDb();

// routes
import router from "./routes/FileUpload.js";
app.use("/api/v1", router);

// port
app.listen(process.env.PORT || 5000, () => {
  console.log("Port Working on " + process.env.PORT);
});

// default route
app.get("/", (req, res) => {
  res.json("Port working fine");
});
