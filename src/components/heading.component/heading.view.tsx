/* Node Module */
import React from 'react';
/* Component Content */
import { IProps } from './heading.type';

/**
 * @function renderHeading
 * @desc Render the correct heading based on property given
 * @author Anselm Marie
 * @param {object} props - props sent from parent component
 */
const renderHeading = (props: IProps): JSX.Element => {
  switch (props.heading) {
    case 'h1':
      return <h1>{props.children}</h1>;
    case 'h2':
      return <h2>{props.children}</h2>;
    case 'h3':
      return <h3>{props.children}</h3>;
    case 'h4':
      return <h4>{props.children}</h4>;
    case 'h5':
      return <h5>{props.children}</h5>;
    case 'h6':
    default:
      return <h6>{props.children}</h6>;
  }
}

export default (props: IProps): JSX.Element => {
  return renderHeading(props);
};