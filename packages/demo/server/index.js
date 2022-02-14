const express = require('express');
const multer = require("multer");
var cors = require('cors');
const { resolve } = require("path");
const fs = require("fs");
const PORT = 8012;
var spawn = require('cross-spawn');

const app = express();
app.use(cors());

const upload = multer({ dest: 'uploads/' }).single("pptx"); 

app.post('/upload', upload, async function (req, res, next) {
  // req.file is the `avatar` file
  // req.body will hold the text fields, if there were any
  console.log(req.file)
  try {
    const fileInput = resolve(__dirname, "../", `${req.file.destination}${req.file.filename}`)

    const outdir = resolve(__dirname, "../", `uploads`)

    const command = `soffice --headless --invisible --convert-to pdf ${fileInput} --outdir ${outdir}`;
    spawn.sync(command, [], { stdio: 'inherit' });

    const fileInputpdf = resolve(__dirname, "../uploads", `${req.file.filename}.pdf`)
    var pdfData = fs.readFileSync(fileInputpdf); 
    // remove temp files
    fs.unlinkSync(fileInput);
    fs.unlinkSync(fileInputpdf);

    res.contentType("application/pdf");
    res.send(Buffer.from(pdfData));
  } catch (e) {
    console.log(e)
    res.status(500).send(e);
  }

})

 

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log('The local server is now running at http://localhost:8012');
});