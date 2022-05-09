import { Children, cloneElement } from 'react';

export const ShapeFill = ({ children, ...fill }) => Children.map(children, (child) =>
  cloneElement(child, { fill }));
