import {
    getProps,
    getStyles,
    parseClassNames,
    parseYogaClassNames,
    parseYogaStyles
} from '@pptx-renderer/stylesheet';
import * as R from 'ramda';

export const styleIMage = () => node => {

    const style = {
        ...parseClassNames(node.props.className),
        ...getStyles(node.props.style)
    };
    const options ={
        ... R.omit(["src"],getProps(node.props)),
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