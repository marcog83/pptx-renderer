import { Buffer } from 'buffer';
import { sizeOf } from '@pptx-renderer/image-size';

function calculateImage(buffer) {
  const size = sizeOf(buffer);
  const encoding = 'base64';
  const data = `data:${ size.type };${ encoding },${ buffer.toString(encoding) }`;

  return {
    ...size,
    data
  };
}

async function _fetchImage(url) {
  return fetch(url)
        .then(async (response) => Buffer.from(await response.arrayBuffer()))
        .then(calculateImage);
}

export async function fetchImage(node) {
  const image = await _fetchImage(node.props.src);

  // eslint-disable-next-line require-atomic-updates
  node.image = image;

  return node;
}
