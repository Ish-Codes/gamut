import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import Spinner from '../Spinner';
import omitProps from '../utils/omitProps';
import s from './styles';

// themes can be an alias to a color
// or a unique button type
export const presetThemes = {
  primary: 'red',
  secondary: 'mint',
  platform: 'greyblue',
  lantern: 'darkmint',
};

const propTypes = {
  theme: PropTypes.string,
  size: PropTypes.oneOf(['large', 'small']),
  disabled: PropTypes.bool,
  focused: PropTypes.bool,
  active: PropTypes.bool,
  outline: PropTypes.bool,
  underline: PropTypes.bool,
  link: PropTypes.bool,
  caps: PropTypes.bool,
  go: PropTypes.bool,
  children: PropTypes.node,
  block: PropTypes.bool,
  loading: PropTypes.bool,
  className: PropTypes.string,
  href: PropTypes.string,
};

const Button = props => {
  let { theme = 'primary' } = props;

  if (theme && presetThemes[theme]) {
    theme = presetThemes[theme];
  }

  const typeClassName = props.link ? s.link : s.btn;
  const themeClassName = props.link ? s[`link-${theme}`] : s[`btn-${theme}`];

  const classes = cx(
    typeClassName,
    themeClassName,
    s[props.size],
    {
      [s.active]: props.active,
      [s.focus]: props.focused,
      [s.block]: props.block,
      [s.go]: props.go,
      [s.disabled]: props.disabled,
      [s.outline]: props.outline,
      [s.underline]: props.underline,
      [s.caps]: props.caps,
    },
    props.className
  );

  const propsToTransfer = omitProps(propTypes, props);

  const loadingIconSize = props.size === 'large' ? 32 : 24;

  if (props.href) {
    return (
      <a data-btn {...propsToTransfer} href={props.href} className={classes}>
        {props.loading ? (
          <span>
            <Spinner
              className={s.loadingIcon}
              width={loadingIconSize}
              height={loadingIconSize}
              v2
            />
            <span>{props.children}</span>
          </span>
        ) : (
          props.children
        )}
      </a>
    );
  }

  return (
    <button
      data-btn
      {...propsToTransfer}
      disabled={props.disabled || props.loading}
      className={classes}
    >
      {props.loading ? (
        <span>
          <Spinner className={s.loadingIcon} size={loadingIconSize} v2 />
          <span>{props.children}</span>
        </span>
      ) : (
        props.children
      )}
    </button>
  );
};

Button.propTypes = propTypes;

export default Button;
