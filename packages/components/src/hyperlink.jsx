import { Children, cloneElement } from 'react';

export const Hyperlink = ({ children, ...hyperlink }) =>
  Children.map(children, (child) => cloneElement(child, { hyperlink }));
