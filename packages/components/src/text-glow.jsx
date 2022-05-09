import { Children, cloneElement } from 'react';

export const TextGlow = ({ children, ...glow }) => Children.map(children, (child) =>
  cloneElement(child, { glow }));
