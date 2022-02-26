import { getProps, getStyles, parseClassNames } from '@pptx-renderer/stylesheet';
import * as N from '@pptx-renderer/primitives';
import { flattenChildren } from './flatten-children';

const styleTextInstance = (child) => {
    return ({
        text: child.value,
        options: {
            ...getProps(child.props),
            ...parseClassNames(child.props.className),
            ...getStyles(child.props.style)
        }
    })
}

export const resolveTextIntances = (node) => {
    return flattenChildren(node.children, node.props)
        .filter(N.isTextInstance)
        .map(styleTextInstance);
}