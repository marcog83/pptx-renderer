import { Children, cloneElement } from 'react';

export const ShapeLine = ({ children, ...line }) => Children.map(children, (child) =>
  cloneElement(child, { line }));
