import React from 'react';
import { css } from '@emotion/react';

type ButtonProps = {
  /**
   * Is this the principal call to action on the page?
   */
  is_disabled?: boolean;
  /**
   * What background color to use
   */
  color?: 'red' | 'green' | 'blue';
  /**
   * How large should the button be?
   */
  size?: 'small' | 'medium' | 'large';
  /**
   * Button contents
   */
  children: string;
  /**
   * Optional click handler
   */
  onClick?: () => void;
};

const button = () => css`
  display: inline-block;
  font-family: 'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  font-weight: 700;
  line-height: 1;
  cursor: pointer;
  border: 0;
  border-radius: 3em;
  color: white;
  box-shadow: rgb(0 0 0 / 15%) 0 0 0 1px inset;
  
  &:disabled {
    background: gray;
  }
  &[aria-disabled="true"] {
    cursor:not-allowed;
  }
`;

const small = css`
  padding: 10px 16px;
  font-size: 12px;
`;

const medium = css`
  padding: 11px 20px;
  font-size: 14px;
`;

const large = css`
  padding: 12px 24px;
  font-size: 16px;
`;

const red = css`
  background-color: #dc143c;
`;

const blue = css`
  background-color: #0045e4;
`;

const green = css`
  background-color: #32cd32;
`;

/**
 * Primary UI component for user interaction
 */
export const Button: React.FC<ButtonProps> = ({
  size = 'medium',
  color,
  children,
  is_disabled = false,
  ...otherProps
}): JSX.Element => {
  const sizeCss =
    size === 'small'
      ? small
      : size === 'medium'
      ? medium
      : size === 'large'
      ? large
      : '';

  const colorCss =
    color === 'red'
      ? red
      : color === 'blue'
      ? blue
      : color === 'green'
      ? green
      : blue;

  return (
    <button
      type="button"
      css={[button, sizeCss, colorCss]}
      {...otherProps}
      disabled={is_disabled}
      aria-disabled={is_disabled}
    >
      {children}
    </button>
  );
};
