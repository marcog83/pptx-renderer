import { GIF } from "./gif";
import { JPG } from "./jpg";
import { PNG } from './png';
import { SVG } from './svg';
export const typeHandlers = {
    gif: GIF,
    jpg: JPG,
    png: PNG,
    svg: SVG
}

const keys = Object.keys(typeHandlers);

// This map helps avoid validating for every single image type
const firstBytes = {
    0x47: 'gif',  
    0x89: 'png',
    0xff: 'jpg'
}

export function detector(buffer) {
    const byte = buffer[0]
    if (byte in firstBytes) {
        const type = firstBytes[byte]
        if (type && typeHandlers[type].validate(buffer)) {
            return type
        }
    }

    const finder = (key) => typeHandlers[key].validate(buffer)
    return keys.find(finder)
}