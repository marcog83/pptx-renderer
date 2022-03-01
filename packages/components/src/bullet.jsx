import { Children, cloneElement } from 'react';
export const Bullet = ({ children, indentLevel = 1, ...bullet }) => {
    return Children.map(children, (child) =>
      cloneElement(child, { bullet, indentLevel })
    );
  };