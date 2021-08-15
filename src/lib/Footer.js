import React from 'react';
import './Footer.css';

class Footer extends React.Component{
    render(){
        return(
            <div className='Footer'>
                <blockquote>
                “Shopify is better than any other platform we’ve played with, and we’ve played with them all.”
                </blockquote>
                <p>
                JONATHON BAYME, CEO OF THEORY11
                </p>
                <button data-bs-toggle="modal" data-bs-target="#staticBackdrop" id="tr_btn" className="ui primary button">
                    Start free trial
                </button>
                <div className="F_links">
                    <a href="https://www.shopify.com/legal/terms">Terms of Service</a>
                    <a href="https://www.shopify.com/legal/privacy">Privacy Policy</a>
                </div>
            </div>
        );
    }
}

export default Footer;