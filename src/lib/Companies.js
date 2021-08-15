import React from 'react';
import Clogo1 from '../images/C-logo1.png';
import './Companies.css';
import Clogo2 from '../images/C-logo2.png';
import Clogo3 from '../images/C-logo3.png';
import Clogo4 from '../images/pngwing.com.png';
import Clogo5 from '../images/C-logo5.png';
import Clogo6 from '../images/C-logo6.jpg';
import Clogo0 from '../images/C-logo0.png';

class Companies extends React.Component{
    render(){
        return(
            <div className="Companies">
                <ul>
                    <li><img src={Clogo1} /></li>
                    <li><img src='https://nalatanalata.com/wp-content/themes/nalata/assets/logo-nalata-nalata.svg' /></li>
                    <li><img src={Clogo2} /></li>
                    <li><img src={Clogo3} /></li>
                    <li><img src={Clogo4} /></li>
                    <li><img src={Clogo5} /></li>
                    <li><img src={Clogo6} /></li>
                    <li><img src={Clogo0} /></li>
                </ul>
            </div>
        );
    };
}

export default Companies;