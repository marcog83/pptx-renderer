import {
    getProps,
    getStyles,
    parseClassNames,
    parseYogaClassNames,
    parseYogaStyles
} from '@pptx-renderer/stylesheet';
import { resolveTextIntances } from './style-text-instance';

export const styleIMage = () => node => {

    const style = {
        ...parseClassNames(node.props.className),
        ...getStyles(node.props.style)
    };
    const options ={
        ... getProps(node.props),
        ...node.image
    };

    const yogaStyle = parseYogaStyles({
        ...node.image,
        ...parseYogaClassNames(node.props.className),
        ...node.props.style
    });

    return {
        ...node,
        style,
        options,
        yogaStyle
    };
}