// Abstract reading multi-byte unsigned integers
export function readUInt(buffer, bits, offset, isBigEndian) {
    offset = offset || 0
    const endian = isBigEndian ? 'BE' : 'LE'
    const methodName = ('readUInt' + bits + endian) 
    return buffer[methodName].call(buffer, offset)
  }