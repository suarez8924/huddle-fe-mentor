import React from "react";
import "./Header.scss";
import { ReactComponent as IconMessage } from "../../assets/images/svg/icon-messages.svg";
import { PrimaryButton } from "../PrimaryButton/PrimaryButton";

export const Header = () => {
  return (
    <header className="header">
      <button className="header-button">
        <IconMessage className="logo-icon" />
        <h1 className="heading-small">Huddle</h1>
      </button>
      <PrimaryButton>Try It Free</PrimaryButton>
    </header>
  );
};
