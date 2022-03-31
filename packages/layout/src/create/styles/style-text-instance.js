import { getProps, getStyles, parseClassNames,textDefault } from '@pptx-renderer/stylesheet';
import * as N from '@pptx-renderer/primitives';
import { flattenChildren } from './flatten-children';

const styleTextInstance = (child) => {
    const style = textDefault({
        ...parseClassNames(child.props.className),
        ...getStyles(child.props.style)
    });
    const options={
        ...getProps(child.props),
        ...style
    };
    return ({
        text: child.value,
        options,
        style:options
    })
}

export const resolveTextIntances = (node) => {
    return flattenChildren(node.children, node.props)
        .filter(N.isTextInstance)
        .map(styleTextInstance);
}