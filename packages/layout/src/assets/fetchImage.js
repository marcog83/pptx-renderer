import { sizeOf } from '@pptx-renderer/image-size';
import { Buffer } from 'buffer';
async function _fetchImage(url) {
    return fetch(url)
        .then(async (response) => {
            const arrayBuffer = await response.arrayBuffer();
            return Buffer.from(arrayBuffer);
        })
        .then((buffer) => {

          
            const size = sizeOf(buffer); 
            console.log(size);
            const encoding='base64'; 
            var uri = 'data:' + size.type + ';' + encoding + ',' + buffer.toString(encoding); 
            return {
                ...size,
                data:uri
            }
            
        });
}



export async function fetchImage(node) {
    const image = await _fetchImage(node.props.src); 
    node.image = image;
    return node;
}