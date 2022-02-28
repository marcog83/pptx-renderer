import { detector, typeHandlers } from "./detector";

export * from "./gif";
export * from "./jpg";
export * from './png';
export * from './svg';



export function sizeOf(buffer) {
    // detect the file type.. don't rely on the extension
    const type = detector(buffer)

    if (typeof type !== 'undefined') {

        // find an appropriate handler for this file type
        if (type in typeHandlers) {
            const size = typeHandlers[type].calculate(buffer)
            if (size !== undefined) {
                
                size.type = typeHandlers[type]?.getMimetype()
                return size
            }
        }
    }
    return {}
}

