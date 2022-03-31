export function layoutText(pText, pFontSize, pStyle) {
  var lDiv = document.createElement('div');

  document.body.appendChild(lDiv);

  if (pStyle != null) {
    Object.assign(lDiv.style, pStyle || {});
  }
  lDiv.style.fontSize = "" + pFontSize + "pt";
  lDiv.style.position = "absolute";
  lDiv.style.left = 300;
  lDiv.style.top = 0;

  lDiv.textContent = pText;
  const { width, height } = lDiv.getBoundingClientRect();
  

  document.body.removeChild(lDiv);
  lDiv = null;

  return { width, height };;
}