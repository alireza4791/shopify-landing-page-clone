import React from "react";
import "./Heading.css";
import HeaderProps from "../types/Header";
import Form from "./Form";

const Header: React.FC<HeaderProps> = ({
  logo,
  headerText,
  subHeader,
  // icon,
}) => {
  return (
    <div className="Heading">
      <div className="logo">
        <img alt={logo.alt} src={logo.value} />
      </div>
      <div className="header">
        <h1>{headerText}</h1>
      </div>
      <div className="sub-header">
        <p>{subHeader}</p>
      </div>
      <Form
        buttonText="Start free trial"
        trialText="Try Shopify free for 14 days, no credit card required. By entering your email, you agree to receive marketing emails from Shopify."
      />
      {/* <Input
        buttonText="Start free trial"
        trialText="Try Shopify free for 14 days, no credit card required. By entering your email, you agree to receive marketing emails from Shopify."
        placeholder="Enter your email address"
      /> */}
      <div className="waves"></div>
    </div>
  );
};

export default Header;
