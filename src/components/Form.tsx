import React, { useState } from "react";
import FormProps, { StoreInfoProps } from "../types/Form";
import Input from "./Input";

const Form: React.FC<FormProps> = ({ trialText, buttonText }) => {
  const [storeInfo, setStoreInfo] = useState({
    email: "",
    password: "",
    name: "",
  });
  const onSubmit = (Event: any) => {
    Event.preventDefault();
  };
  return (
    <div className="Input container-fluid">
      <div className="trial">
        {/* for that gets pervented using onSubmit function */}
        <form onSubmit={onSubmit}>
          {/* hidden lable for screen reader */}
          <label aria-hidden="true" htmlFor="email">
            Email address
          </label>
          {/* input field for email adress */}
          <div className="input ui focus">
            <Input
              onChange={(value) => {
                setStoreInfo((prev: StoreInfoProps) => {
                  return { ...prev, email: value };
                });
              }}
              value={storeInfo.email}
              type="email"
              id="email"
              placeholder="Email address"
              style={{ marginRight: "15px" }}
            />
          </div>
          {/* button for displaying the pop up */}
          <button
            type="button"
            data-bs-toggle="modal"
            data-bs-target="#staticBackdrop"
            id="trial_btn"
            className="ui secondary button"
          >
            {buttonText}
          </button>

          {/* Modal */}
          <div
            className="modal fade"
            id="staticBackdrop"
            data-bs-backdrop="static"
            data-bs-keyboard="false"
            tabIndex={-1}
            aria-labelledby="staticBackdropLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog">
              <div id="m_content" className="modal-content">
                <div id="m_head" className="modal-header">
                  <h5
                    className="modal-title"
                    id="staticBackdropLabel"
                    style={{ fontSize: "190%", fontWeight: "500" }}
                  >
                    Start your free 14-day trial of Shopify
                  </h5>
                  <button
                    id="close"
                    type="button"
                    className="close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  >
                    &times;
                  </button>
                </div>
                <div id="m_body" className="modal-body">
                  {/* email input field */}
                  <div className="input-group mb-3">
                    <label aria-hidden="true" htmlFor="email-submit">
                      Email
                    </label>
                    <Input
                      onChange={(value) => {
                        setStoreInfo((prev: StoreInfoProps) => {
                          return { ...prev, email: value };
                        });
                      }}
                      className="form-control"
                      value={storeInfo.email}
                      type="email"
                      id="email-submit"
                      placeholder="Email address"
                    />
                  </div>
                  {/* password input field */}
                  <div className="input-group mb-3">
                    <label aria-hidden="true" htmlFor="password">
                      Password
                    </label>
                    <Input
                      onChange={(value) => {
                        setStoreInfo((prev: StoreInfoProps) => {
                          return { ...prev, password: value };
                        });
                      }}
                      value={storeInfo.password}
                      type="password"
                      id="password"
                      className="form-control"
                      placeholder="Password"
                    />
                  </div>
                  {/* your store name input field */}
                  <div className="input-group mb-3">
                    <label aria-hidden="true" htmlFor="store">
                      your store name
                    </label>
                    <Input
                      onChange={(value) => {
                        setStoreInfo((prev: StoreInfoProps) => {
                          return { ...prev, name: value };
                        });
                      }}
                      value={storeInfo.name}
                      type="text"
                      id="store"
                      className="form-control"
                      placeholder="your store name"
                    />
                    <span className="input-group-text" id="basic-addon2">
                      .myshopify.com
                    </span>
                  </div>
                </div>
                <div id="m_footer" className="modal-footer">
                  <div id="info">
                    <p>
                      This is the URL that customers will use to visit your
                      store. You can also buy a custom domain like mystore.com
                      and connect it to this store.
                      <span
                        id="learn"
                        data-bs-target="#exampleModalToggle2"
                        data-bs-toggle="modal"
                        data-bs-dismiss="modal"
                      >
                        &nbsp;Learn more
                      </span>
                    </p>
                  </div>
                  <button id="create" type="button" className="btn btn-primary">
                    Create your store
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* second modal for learn more link */}
          <div
            className="modal fade"
            id="exampleModalToggle2"
            aria-hidden="true"
            aria-labelledby="exampleModalToggleLabel2"
            tabIndex={-1}
          >
            <div id="m2_dialog" className="modal-dialog modal-dialog-centered">
              <div id="m2_content" className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="exampleModalToggleLabel2">
                    Your Store URL
                  </h5>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div className="modal-body">
                  <h6>What is a domain?</h6>
                  <p>
                    A domain is a website address used to access your store.
                    When you create a store, we create a domain at myshopify.com
                    for you.
                  </p>
                  <br />
                  <h6>What is a myshopify.com domain?</h6>
                  <p>
                    Your myshopify.com domain will look like this:
                    <br />
                  </p>
                  <span>your-store-name.myshopify.com</span>
                  <br />
                  <p>Your myshopify.com is used:</p>
                  <ul>
                    <li>so you and your customers can access your store</li>
                    <li>
                      as a unique way to identify your store when contacting
                      support
                    </li>
                  </ul>

                  <p>
                    <strong>
                      Your myshopify.com domain cannot be changed,
                    </strong>{" "}
                    but you can always purchase a custom domain instead.
                  </p>
                  <br />
                  <h6>What is a custom domain?</h6>
                  <p>
                    You can also buy a custom domain that better reflects your
                    brand:
                    <br />
                  </p>
                  <span>your-brand-name.com</span>
                  <br />
                  <p>
                    You can buy a custom domain from Shopify or any 3rd party,
                    and connect it to your store at any time.
                  </p>
                </div>
                <div id="m2_footer" className="modal-footer"></div>
              </div>
            </div>
          </div>
        </form>
      </div>
      <p>{trialText}</p>
    </div>
  );
};

export default Form;
