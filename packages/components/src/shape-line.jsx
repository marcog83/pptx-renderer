import { Children, cloneElement } from 'react';
export const ShapeLine = ({ children, ...line }) => {
    return Children.map(children, (child) =>
      cloneElement(child, { line })
    );
  };