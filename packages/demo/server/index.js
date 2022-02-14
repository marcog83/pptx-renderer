const express = require('express');
const multer = require("multer");
var cors = require('cors');
const { resolve } = require("path");
const fs = require("fs");
const PORT = 8012;
var spawn = require('cross-spawn');

const app = express();
app.use(cors());

const upload = multer({ dest: 'uploads/' });

app.post('/upload', upload.single('pptx'), async function (req, res, next) {
  // req.file is the `avatar` file
  // req.body will hold the text fields, if there were any
  try {
    const fileInput = resolve(__dirname, "../", `${req.file.destination}${req.file.filename}`)

    const outdir = resolve(__dirname, "../", `uploads`)

    const command = `soffice --headless --convert-to pdf ${fileInput} --outdir ${outdir}`;
    spawn.sync(command, [], { stdio: 'inherit' });
    try {
      fs.unlinkSync(fileInput)
      //file removed
    } catch(err) {
      console.error(err)
    }
    res.json({ id: req.file.filename })
  } catch (e) {
    console.log(e)
    res.status(500).send(e);
  }

})

app.get('/download/:id', function (req, res, next) {
  const fileInput = resolve(__dirname, "../uploads", `${req.params.id}.pdf`)

  var data = fs.readFileSync(fileInput);
  res.contentType("application/pdf");
  res.send(data);
})

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log('The local server is now running at http://localhost:8012');
});