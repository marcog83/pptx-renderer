/* eslint-disable no-magic-numbers */
const gifRegexp = /^GIF8[79]a/;

export const GIF = {
  validate(buffer) {
    const signature = buffer.toString('ascii', 0, 6);

    return gifRegexp.test(signature);
  },

  calculate(buffer) {
    return {
      height: buffer.readUInt16LE(8),
      width: buffer.readUInt16LE(6)
    };
  },
  getMimetype() {
    return 'image/gif';
  }
};
