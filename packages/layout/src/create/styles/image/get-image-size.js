export function getImageSize(image, style) {
  let width = style.width ?? image.width;
  let height = style.height ?? image.height;
  const aspectRatio = style.aspectRatio ?? image.width / image.height;

  if (style.width) {
    height = aspectRatio * width;
  } else if (style.height) {
    width = aspectRatio * height;
  }

  return { width, height, aspectRatio };
}
