import { Children, cloneElement } from 'react';

export const Shadow = ({ children, ...shadow }) => Children.map(children, (child) =>
  cloneElement(child, { shadow }));
