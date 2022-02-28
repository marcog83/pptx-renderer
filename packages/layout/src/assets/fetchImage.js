import { sizeOf } from '@pptx-renderer/image-size';
import { Buffer } from 'buffer';

function calculateImage(buffer) {

    const size = sizeOf(buffer);
    const encoding = 'base64';
    var data = 'data:' + size.type + ';' + encoding + ',' + buffer.toString(encoding);
    return {
        ...size,
        data
    }
}

async function _fetchImage(url) {
    return fetch(url)
        .then(async (response) => Buffer.from(await response.arrayBuffer()))
        .then(calculateImage);
}



export async function fetchImage(node) {
    const image = await _fetchImage(node.props.src);
    node.image = image;
    return node;
}