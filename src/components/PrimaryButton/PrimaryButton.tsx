import React, { PropsWithChildren } from 'react';
import './PrimaryButton.scss';

type PRIMARY_BUTTON_VARIANT = 'LARGE' | 'REGULAR' | 'SMALL';

interface PrimaryButtonProps {
  variant?: PRIMARY_BUTTON_VARIANT;
  isFilled?: boolean;
  onClick: () => void;
}
export const PrimaryButton = ({
  variant = 'REGULAR',
  isFilled = true,
  children,
  onClick,
}: PrimaryButtonProps & PropsWithChildren) => {
  return (
    <button className="primary-button" onClick={onClick}>
      {children}
    </button>
  );
};
