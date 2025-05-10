import React from 'react';
import styles from './Card.module.css';
export const Card = _ref => {
  let {
    children,
    className
  } = _ref;
  return /*#__PURE__*/React.createElement("div", {
    className: `${styles.card} ${className || ''}`
  }, children);
};