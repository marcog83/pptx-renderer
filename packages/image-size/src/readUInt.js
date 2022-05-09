// Abstract reading multi-byte unsigned integers
export function readUInt(buffer, bits, offset = 0, isBigEndian) {
  const endian = isBigEndian ? 'BE' : 'LE';
  const methodName = `readUInt${ bits }${ endian }`;

  return buffer[methodName](offset);
}
