import React from 'react';
import cx from 'classnames';
import styles from './Ping.module.css';
export const Ping = _ref => {
  let {
    active = false,
    variant = 'default'
  } = _ref;
  return /*#__PURE__*/React.createElement("span", {
    className: styles.wrapper
  }, /*#__PURE__*/React.createElement("span", {
    className: cx(styles.ping, styles[variant], {
      [styles.active]: active
    })
  }), /*#__PURE__*/React.createElement("span", {
    className: cx(styles.dot, styles[variant])
  }));
};