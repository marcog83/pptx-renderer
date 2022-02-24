
import * as N from '@pptx-renderer/primitives';
import { flattenChildren } from './flatten-children';
import { getProps, getStyles } from '@pptx-renderer/stylesheet';
import * as R from 'ramda';

 

const styleText =  node => {
    let values = flattenChildren(node.children, node.props);

    values = values
        .filter(N.isTextInstance)
        .map((child) => {
            const style = getStyles(child.props.style);
            const options = getProps(child.props);

            return ({
                text: child.value,
                options: { ...options, ...style }
            })
        });
    const style = getStyles(node.props.style);
    const options = getProps(node.props);
    return {
        ...node,
        style,
        options,
        children: values
    };
}
const styleShape =  node => {


    const options = getProps(node.props);
    const style = getStyles(node.props.style);
    const hasText = node.children.length > 0;

    const { type } = node.props;

    if (hasText) {
        let values = flattenChildren(node.children, {});

        values = values
            .filter(N.isTextInstance)
            .map((child) => {
                const style = getStyles(child.props.style);
                const options = getProps(child.props);
                
                return ({
                    text: child.value,
                    options: {...options,...style }
                })
            });
            
        return {
            ...node,
            hasText,
            style,
            options: { shape: type, ...options },
            children: values
        };
    }

    return {
        ...node,
        style,
        options
    };
}

const styleNotes = node => {
    const text = node.children
        .filter(N.isTextInstance)
        .map(({ value }) => value)
        .join(' ');

    return {
        ...node,
        text
    };
}

const styleSections = node => {
    return {
        ...node,
        children: node.children
            .map((child) => ({
                ...child,
                props: { ...child.props, sectionTitle: node.props.title }
            }))
            .map(createStyles)
    }
}

const T = {
    [N.Text]: styleText,
    [N.Shape]: styleShape,
    [N.Notes]: styleNotes,
    [N.Section]: styleSections,
};

export const createStyles = node => {
    const { type } = node;

    const identity = R.evolve({
        children: R.map(createStyles)
    })
    const fn = T[type] || identity;
    return fn(node)
}