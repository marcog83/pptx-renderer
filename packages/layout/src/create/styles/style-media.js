import { getStyles, parseClassNames, parseYogaClassNames, parseYogaStyles } from '@pptx-renderer/stylesheet';
// import * as R from 'ramda';

export const styleMedia = (createStyles) => (node) => {
    const style = {
        ...parseClassNames(node.props.className),
        ...getStyles(node.props.style)
    };

    const yogaStyle = parseYogaStyles({
        ...parseYogaClassNames(node.props.className),
        ...node.props.style
    });

    return {
        ...node,
        style,
        yogaStyle
    };
}
