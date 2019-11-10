/* Node Module */
import React from 'react';
/* Component Content */
import { IPageClass } from './page.class.type';

/**
 * @function getClassName
 * @desc determines if the class name will be from the param or the window location
 * @param currentPage - current page from props
 */
const getClassName = (currentPage: any): string => {
  return currentPage !== '' ? currentPage : window.location.pathname.replace('/', '');
}

/**
 * @function Page Class View
 * @desc dynamically display a class based on the current page
 * @param props - content from the parent component
 */
export default (props: IPageClass): JSX.Element => {
  return (
    <div className={`app-contents ${getClassName(props.currentPage)}`}>
      {props.children}
    </div>
  )
};