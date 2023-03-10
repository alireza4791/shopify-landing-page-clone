import React from "react";
import Header from "./Header";
import Feature from "./Feature";
import Companies from "./Companies";
import Footer from "./Footer";
import logo from "../images/shopify-logo.png";
import shop_icon from "../images/shop-icon.png";
import "./App.css";

const App = () => {
  return (
    <div>
      <Header
        logo={{
          value: logo,
          alt: "shopify-logo",
        }}
        // icon={{
        //   value: shop_icon,
        //   alt: "shop-icon",
        // }}
        headerText="Sell online with Shopify"
        subHeader="Trusted by over 1,700,000 businesses worldwide"
      />
      <div className="shop-icon">
        <img src={shop_icon} alt={"shop-icon"} />
      </div>
      <Feature />
      <Companies />
      <Footer />
    </div>
  );
};

export default App;
