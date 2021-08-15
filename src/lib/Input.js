import React from 'react';
import './Input.css'

class Input extends React.Component {

    state = {input: ''};

    onSubmit = Event =>{
        Event.preventDefault();
    }

    render(){
        return(
            //container
            <div className="Input container-fluid">
    
                <div className="trial">
                    {/* for that gets pervented using onSubmit function */}
                    <form onSubmit={this.onSubmit}>
                    {/* hidden lable for screen reader */}
                    <label aria-hidden='true' forhtml="email">Email address</label>
                    {/* input field for email adress */}
                    <div className="input ui focus">
                    <input onChange={Event => this.setState({input: Event.target.value})} value={this.state.input} id="email" type="email" placeholder={this.props.placeholder}></input>
                    </div>
                    {/* button for displaying the pop up */}
                    <button type='button' data-bs-toggle="modal" data-bs-target="#staticBackdrop" id="trial_btn" class="ui secondary button">
                        {this.props.btnText}
                    </button>


                    {/* Modal */}
                    <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                    <div  class="modal-dialog">
                    <div id='m_content' class="modal-content">
                    <div id='m_head' class="modal-header">
                        <h5 class="modal-title" id="staticBackdropLabel" style={{fontSize: '190%', fontWeight: '500'}}>Start your free 14-day trial of Shopify</h5>
                        <button id='close' type="button" class='close' data-bs-dismiss="modal" aria-label="Close">&times;</button>
                    </div>
                    <div id='m_body' class="modal-body">
                        {/* email input field */}
                        <div className="input-group mb-3">
                        <label aria-hidden='true' htmlFor="t_email">Email</label>
                        <input value={this.state.input} type='email' className='form-control' placeholder="Email address" id='t_email' />
                        </div>
                        {/* password input field */}
                        <div className="input-group mb-3">
                        <label aria-hidden='true' htmlFor="t_pass">Password</label>
                        <input type='password' className='form-control' placeholder="Password" id='t_pass' />
                        </div>
                        {/* your store name input field */}
                        <div className="input-group mb-3">
                        <label aria-hidden='true' htmlFor="t_store">your store name</label>
                        <input type='text' placeholder="your store name" id='t_store' className='form-control' />
                        <span class="input-group-text" id="basic-addon2">.myshopify.com</span>
                        </div>
                    </div>
                    <div id='m_footer' class="modal-footer">
                        <div id='info'>
                            <p>
                            This is the URL that customers will use to visit your store. You can also buy a custom domain like mystore.com and connect it to this store. 
                            <a href='#' id='learn' data-bs-target="#exampleModalToggle2" data-bs-toggle="modal" data-bs-dismiss="modal">&nbsp;Learn more</a>
                            </p>
                        </div>
                    <button id='create' type="button" class="btn btn-primary">Create your store</button>
                    </div>
                    </div>
                    </div>
                    </div>


                    {/* second modal for learn more link */}
                    <div class="modal fade" id="exampleModalToggle2" aria-hidden="true" aria-labelledby="exampleModalToggleLabel2" tabindex="-1">
                    <div id='m2_dialog' class="modal-dialog modal-dialog-centered">
                    <div id="m2_content" class="modal-content">
                    <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalToggleLabel2">Your Store URL</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                    <h6>What is a domain?</h6>
                    <p>A domain is a website address used to access your store. When you create a store, we create a domain at myshopify.com for you.</p>
                    <br />
                    <h6>What is a myshopify.com domain?</h6>
                    <p>Your myshopify.com domain will look like this:
                    <br />
                    </p>
                    <span>your-store-name.myshopify.com</span>
                    <br />
                    <p>
                    Your myshopify.com is used:
                    </p>
                    <ul>
                        <li>so you and your customers can access your store</li>
                        <li>as a unique way to identify your store when contacting support</li>
                    </ul>
                    
                    
<p>
<strong>Your myshopify.com domain cannot be changed,</strong> but you can always purchase a custom domain instead.</p>
                    <br />
                    <h6>What is a custom domain?</h6>
                    <p>You can also buy a custom domain that better reflects your brand:
<br />
</p>
<span>your-brand-name.com</span>
<br />
<p>
You can buy a custom domain from Shopify or any 3rd party, and connect it to your store at any time.</p>
                    </div>
                    <div id="m2_footer" class="modal-footer">
                    </div>
                    </div>
                    </div>
                    </div>
                    {/* <a class="btn btn-primary" data-bs-toggle="modal" href="#exampleModalToggle" role="button">Open first modal</a> */}
                    </form>
                    
                    </div>
                <p>
                {this.props.trialText}
                </p>
            </div>
            
        );
    };
}

Input.defaultProps = {
    placeholder: 'Enter your email address',
    btnText: 'Start free trial',
    trialText: 'Try Shopify free for 14 days, no credit card required. By entering your email, you agree to receive marketing emails from Shopify.'
}

export default Input;


{/* <div class="modal-footer">
        <button class="btn btn-primary" data-bs-target="#exampleModalToggle2" data-bs-toggle="modal" data-bs-dismiss="modal">Open second modal</button>
      </div> */}