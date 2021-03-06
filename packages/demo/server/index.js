const { join } = require('path');
const fs = require('fs');
const { execFileSync } = require('child_process');
const express = require('express');
const multer = require('multer');
const cors = require('cors');
const tmp = require('tmp');
const { getSoffice } = require('./get-soffice');

const PORT = 8013;
const app = express();

app.use(cors());

const upload = multer({ storage: multer.memoryStorage() }).single('pptx');

app.post('/upload', upload, async (req, res) => {
  // req.file is the `avatar` file
  // req.body will hold the text fields, if there were any
  const tempDir = tmp.dirSync({ prefix: 'libreofficeConvert_', unsafeCleanup: true });

  try {
    const fileInput = join(tempDir.name, 'source');

    fs.writeFileSync(fileInput, req.file.buffer);

    const command = `--headless --invisible --convert-to pdf ${ fileInput } --outdir ${ tempDir.name }`;
    const args = command.split(' ');

    execFileSync(getSoffice(), args);

    const fileInputpdf = join(tempDir.name, 'source.pdf');
    const pdfData = fs.readFileSync(fileInputpdf);

    tempDir.removeCallback();

    res.contentType('application/pdf');
    res.send(Buffer.from(pdfData));
  } catch (e) {
    tempDir.removeCallback();
    const ERROR_CODE = 500;

    res.status(ERROR_CODE).send(e);
  }
});

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log('The local server is now running at http://localhost:8012');
});
