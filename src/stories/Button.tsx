import React from 'react';
import { css } from '@emotion/react';

type ButtonProps = {
  /**
   * Is this the principal call to action on the page?
   */
  is_primary?: boolean;
  /**
   * What background color to use
   */
  backgroundColor?: string;
  /**
   * How large should the button be?
   */
  size?: 'small' | 'medium' | 'large';
  /**
   * Button contents
   */
  label: string;
  /**
   * Optional click handler
   */
  onClick?: () => void;
};

const button = () => css`
  display: inline-block;
  font-family: "Nunito Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-weight: 700;
  line-height: 1;
  cursor: pointer;
  border: 0;
  border-radius: 3em;
`;
const primary = css`
  color: white;
  background-color: #1ea7fd;
`;

const secondary = css`
  color: #333;
  background-color: transparent;
  box-shadow: rgb(0 0 0 / 15%) 0 0 0 1px inset;
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

/**
 * Primary UI component for user interaction
 */
export const Button: React.FC<ButtonProps> = ({
  is_primary = false,
  size = 'medium',
  backgroundColor,
  label,
  ...otherProps
}): JSX.Element => {
  const mode = is_primary ? primary : secondary;

  const sizeCss =
    size === 'small'
      ? small
      : size === 'medium'
      ? medium
      : size === 'large'
      ? large
      : '';
  return (
    <button
      type="button"
      css={[button, sizeCss, mode]}
      style={{ backgroundColor }}
      {...otherProps}
    >
      {label}
    </button>
  );
};
