import React from 'react';
import Heading from './Heading';
import Feature from './Feature';
import Companies from './Companies';
import Footer from './Footer';
import logo from '../images/shopify-logo.png';
import shop_icon from '../images/shop-icon.png';



class App extends React.Component {
    render(){
        return (
        <div>
            <Heading alt="shopify-logo" 
            logoSrc={logo} 
            shIconSrc={shop_icon} 
            shIconAlt="shop-icon" 
            h1text="Sell online with Shopify" 
            subheader="Trusted by over 1,700,000 businesses worldwide" />
            <Feature />
            <Companies />
            <Footer />
        </div>
        );
    }
    
}

export default App;