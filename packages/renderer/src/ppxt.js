import { getLayout } from '@pptx-renderer/layout';
import { render, Pptxgen } from '@pptx-renderer/render';
import { renderer } from './host';

export const PPTX = {
  async render(doc) {
    const container = { type: 'ROOT', document: null };

    // doc: This is the react element for App component
    // container: This is the host root element to which the rendered app will be attached.
    //
    // Disables async rendering
    const isAsync = false;
    const mountNode = renderer.createContainer(container, isAsync);

    // Since there is no parent (since this is the root fiber). We set parentComponent to null.

    // Start reconcilation and render the result
    renderer.updateContainer(doc, mountNode, null);

    //
    const props = container.document.props || {};

    const ctx = new Pptxgen(props);
    const layout = await getLayout({ ctx, doc: container.document });

    return render(ctx, layout);
  }
};
