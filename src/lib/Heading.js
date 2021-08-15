import React from 'react';
import './Heading.css';
import Input from './Input';


class Heading extends React.Component{
    

    render(){
        return(
            <div className="Heading">
                <div className="logo">
                <img alt={this.props.alt} src={this.props.logoSrc} />
                </div>
                <div className="header">
                <h1>{this.props.h1text}</h1>
                </div>
                <div className="sub-header">
                <p>{this.props.subheader}</p>
                </div>
                <Input btnText="Start free trial"
                trialText="Try Shopify free for 14 days, no credit card required. By entering your email, you agree to receive marketing emails from Shopify." 
                placeholder="Enter your email address" />
                <div className="waves"></div>
                <div className="shop-icon">
                    <img src={this.props.shIconSrc} alt={this.props.shIconAlt} />
                </div>
            </div>
        );
    };
}

Heading.defaultProps = {
    h1text: 'Sell online with Shopify',
    subheader: 'Trusted by over 1,700,000 businesses worldwide'
}
export default Heading;