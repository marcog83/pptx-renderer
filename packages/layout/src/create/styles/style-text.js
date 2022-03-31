import {
    getProps,
    getStyles,
    textDefault,
    parseClassNames,
    parseYogaClassNames,
    parseYogaStyles
} from '@pptx-renderer/stylesheet';
import { resolveTextIntances } from './style-text-instance';

export const styleText = () => node => {

    const style = textDefault({
        ...parseClassNames(node.props.className),
        ...getStyles(node.props.style)
    });
    
    const options = getProps(node.props);

    const yogaStyle = parseYogaStyles({
        ...parseYogaClassNames(node.props.className),
        ...node.props.style
    });

    return {
        ...node,
        style,
        options,
        yogaStyle,
        children: resolveTextIntances(node)
    };
}