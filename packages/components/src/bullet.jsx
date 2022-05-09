import { Children, cloneElement } from 'react';

export const Bullet = ({ children, indentLevel = 1, ...bullet }) => Children.map(children, (child) =>
  cloneElement(child, { bullet, indentLevel }));
