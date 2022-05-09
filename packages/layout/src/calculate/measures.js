/**
 * PPTX Units are "DXA" (except for font sizing)
 * ....: There are 1440 DXA per inch. 1 inch is 72 points. 1 DXA is 1/20th's of a point (20 DXA is 1 point).
 * ....: There is also something called EMU's (914400 EMUs is 1 inch, 12700 EMUs is 1pt).
 * https://startbigthinksmall.wordpress.com/2010/01/04/points-inches-and-emus-measuring-units-in-office-open-xml/
 * https://github.com/gitbrent/PptxGenJS/blob/master/dist/pptxgen.js#L34
 */
const EMU = 914400; // One (1) inch (OfficeXML measures in EMU (English Metric Units))

// https://github.com/gitbrent/PptxGenJS/blob/master/dist/pptxgen.js#L1815
export const inch2Emu = (inches) => {
  // FIRST: Provide Caller Safety: Numbers may get conv<->conv during flight, so be kind and do some simple checks to ensure inches were passed
  // WTF? Any value over 100 damn sure isnt inches, must be EMU already, so just return it
  if (inches > 100) {
    return inches;
  }
  if (typeof inches === 'string') {
    inches = Number(inches.replace(/in*/gi, ''));
  }

  return Math.round(EMU * inches);
};

export const emu2inch = (emu) => {
  if (typeof emu === 'string') {
    emu = Number(emu);
  }

  return Number((emu / EMU).toFixed(2));
};

export const inch2px = (inches) => inches * 96;

export const px2inch = (px) => {
  if (px === 0) {
    return 0;
  }

  return Number((px / 96).toFixed(2));
};

export const emu2px = (emu) => inch2px(emu2inch(emu));

export const px2emu = (px) => inch2Emu(px2inch(px));
