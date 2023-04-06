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
  className?: string;
  size?: ButtonSize;
  variant?: ButtonVariant;
  onClick?: () => void;
  is?: 'button' | 'input';
  label: string;
}
export const PrimaryButton = ({
  className = '',
  size = 'REGULAR',
  variant = 'FILLED',
  onClick,
  is = 'button',
  label,
}: PrimaryButtonProps & PropsWithChildren) => {
  if (is === 'button') {
    return (
      <button
        className={`primary-button size-${buttonSizes[size]} variant-${buttonVariant[variant]} ${className}`}
        onClick={onClick}
      >
        {label}
      </button>
    );
  }
  if (is === 'input') {
    return (
      <input
        className={`primary-button size-${buttonSizes[size]} variant-${buttonVariant[variant]} ${className}`}
        onClick={onClick}
        type="submit"
        value={label}
      />
    );
  }
  return null;
};
