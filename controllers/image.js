export const LocalImage = async function (req, res) {
  try {

    //file fetch from request
    const file = req.files.file;

    console.log(file)
    //path where file need to be store
    const path = process.cwd() + "\\images" + "\\" + Date.now()+`.${file.mimetype.split('/')[1]}`

    //add file to the move funcation while defining the path
    file.mv(path, (err) => {
        if(err){
            console.log(err);
        }
    });

    res.status(200).json({status:true,message:"File Uploaded"});
  } catch (err) {
    console.error(err);
    res.status(500).json({ status: false, message: "Server Down" });
  }
};
