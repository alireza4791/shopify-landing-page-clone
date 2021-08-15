import React from 'react';
import './Feature.css';
import imag1 from '../images/mobile-friendly.png';
import imag2 from '../images/money.svg';
import imag3 from '../images/person.png';

class Feature extends React.Component{

    render(){
        return(
            <div className="Feature">
                <div className='theme'>
                    <img alt='mobile-friendly' src={imag1} />
                    <h2>
                        Beautiful themes that are responsive and customizable
                    </h2>
                    <p>
                        No design skills needed. You have complete control over the look and feel of your website, from its layout, to content and colors.
                    </p>
                </div>

                <div className='price'>
                    <img alt='money' src={imag2} />
                    <h2>
                        Pricing as low as $29/month
                    </h2>
                    <p>
                    Whether you sell online, on social media, in store, or out of the trunk of your car, Shopify has you covered. Start selling anywhere for just $29/month.
                    </p>
                </div>

                <div className='trust'>
                    <img alt='trust' src={imag3} />
                    <h2>
                        Trusted by over 1,700,000 businesses worldwide
                    </h2>
                    <p>
                    Shopify handles everything from marketing and payments, to secure checkout and shipping.
                    </p>
                </div>
            </div>
        );
    }
}

export default Feature;