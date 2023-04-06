import React, { PropsWithChildren } from 'react';
import './PrimaryButton.scss';

type ButtonSize = 'REGULAR' | 'SMALL';

type ButtonVariant = 'FILLED' | 'TRANSPARENT' | 'SUBMIT';

enum buttonSizes {
  REGULAR = 'regular',
  SMALL = 'small',
}

enum buttonVariant {
  FILLED = 'filled',
  TRANSPARENT = 'transparent',
  SUBMIT = 'submit',
}
interface PrimaryButtonProps {
  size?: ButtonSize;
  variant?: ButtonVariant;
  onClick?: () => void;
  is?: 'button' | 'input';
  label: string;
}
export const PrimaryButton = ({
  size = 'REGULAR',
  variant = 'FILLED',
  children,
  onClick,
  is = 'button',
  label,
}: PrimaryButtonProps & PropsWithChildren) => {
  if (is === 'button') {
    return (
      <button
        className={`primary-button size-${buttonSizes[size]} variant-${buttonVariant[variant]}`}
        onClick={onClick}
      >
        {label}
      </button>
    );
  }
  if (is === 'input') {
    return (
      <input
        className={`primary-button size-${buttonSizes[size]} variant-${buttonVariant[variant]}`}
        onClick={onClick}
        type="submit"
        value={label}
      />
    );
  }
  return null;
};
