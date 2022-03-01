import { Children, cloneElement } from 'react';
export const ShapeFill = ({ children, ...fill }) => {
    return Children.map(children, (child) =>
      cloneElement(child, { fill })
    );
  };