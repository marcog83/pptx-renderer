const { join } = require('path');
const fs = require('fs');

exports.getSoffice = () => {
  let paths = [];

  switch (process.platform) {
  case 'darwin': paths = [ '/Applications/LibreOffice.app/Contents/MacOS/soffice' ];
    break;
  case 'linux': paths = [ '/usr/bin/libreoffice', '/usr/bin/soffice', '/snap/bin/libreoffice' ];
    break;
  case 'win32': paths = [
    join(process.env.PROGRAMFILES, 'LibreOffice/program/soffice.exe'),
    join(process.env['PROGRAMFILES(X86)'], 'LIBREO~1/program/soffice.exe'),
    join(process.env['PROGRAMFILES(X86)'], 'LibreOffice/program/soffice.exe')
  ];
    break;
  default:
    return new Error(`Operating system not yet supported: ${ process.platform }`);
  }

  return paths.find((path) => fs.existsSync(path));
};
