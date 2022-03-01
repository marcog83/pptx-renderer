import { Children, cloneElement } from 'react';
export const Shadow = ({ children, ...shadow }) => {
    return Children.map(children, (child) =>
      cloneElement(child, { shadow })
    );
  };