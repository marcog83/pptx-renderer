import * as N from '@pptx-renderer/primitives';

const renderText = (ctx, node) => {
  const { style, options, children, box } = node;

  ctx.addText(children, { ...options, ...style, ...box });
};
const renderImage = (ctx, node) => {
  const { style, options, box } = node;

  ctx.addImage({ ...options, ...style, ...box });
};
const renderShape = (ctx, node) => {
  const { style, options, box } = node;

  ctx.addShape(node, { ...options, ...style, ...box });
};
const renderSlide = (ctx, node) => {
  ctx.addSlide(node.props);
};
const renderSlideNumber = (ctx, node) => {
  ctx.addSlideNumber(node.props);
};
const renderNotes = (ctx, node) => {
  ctx.addNotes(node.text);
};
const renderSection = (ctx, node) => {
  ctx.addSection(node.props);
};
const shouldRenderChildren = ({ type }) => type !== N.Text;

const Types = {
  [N.Section]: renderSection,
  [N.Slide]: renderSlide,
  [N.SlideNumber]: renderSlideNumber,
  [N.Text]: renderText,
  [N.Image]: renderImage,
  [N.Shape]: renderShape,
  [N.Notes]: renderNotes
};

const noop = () => {};

function renderNode(ctx) {
  return (node) => {
    const { type, children = [] } = node;
    const fnRender = Types[type] || noop;

    fnRender(ctx, node);

    if (shouldRenderChildren(node)) {
      children.forEach(renderNode(ctx));
    }
  };
}

export const render = (ctx, doc) => {
  const pages = doc.children || [];

  pages.forEach(renderNode(ctx));

  return ctx;
};
