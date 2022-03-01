import { Children, cloneElement } from 'react';
export const TextGlow = ({ children, ...glow }) => {
    return Children.map(children, (child) =>
      cloneElement(child, { glow })
    );
  };