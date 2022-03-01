import { Children, cloneElement } from 'react';
export const Hyperlink = ({ children, ...hyperlink }) => {
    return Children.map(children, (child) => cloneElement(child, { hyperlink })
    );
};