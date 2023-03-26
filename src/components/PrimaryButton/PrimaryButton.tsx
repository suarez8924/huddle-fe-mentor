import React, { PropsWithChildren } from "react";
import "./PrimaryButton.scss";

type PRIMARY_BUTTON_VARIANT = "LARGE" | "REGULAR" | "SMALL";

interface PrimaryButtonProps {
  variant?: PRIMARY_BUTTON_VARIANT;
  isFilled?: boolean;
}
export const PrimaryButton = ({
  variant = "REGULAR",
  isFilled = true,
  children,
}: PrimaryButtonProps & PropsWithChildren) => {
  return <button className="primary-button">{children}</button>;
};
