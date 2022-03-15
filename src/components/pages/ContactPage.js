import React, { useState } from "react";
import SayHello from '../imgs/contact.png'
import './ContactPage.css'

const FORM_ENDPOINT = "https://public.herotofu.com/v1/3f070630-a3f6-11ec-975b-f9cc2b0e6900"; // TODO - fill on the later step

const ContactForm = () => {
    const [submitted, setSubmitted] = useState(false);
    const handleSubmit = () => {
        setTimeout(() => {
            setSubmitted(true);
        }, 100);
    };

    if (submitted) {
        return (
            <>
                <h2>Thank you!</h2>
                <div>freddyboy will be in touch soon.</div>
            </>
        );
    }

    return (
        <div className="container">
            <div className="columns is-centered">
                <form className="form"
                    action={FORM_ENDPOINT}
                    onSubmit={handleSubmit}
                    method="POST"
                    target="_blank"
                >
                    <img id="sayHello" src={SayHello} alt="Contact Title" />
                    <div className="column is-10 is-offset-1">
                        <div className="field is-horizontal">
                            <div className="field-body">
                                <div className="field">
                                    <p className="control is-expanded has-icons-left">
                                        <input id="nameForm" className="input" type="text" placeholder="Name" required />
                                        <span className="icon is-small is-left">
                                            <i className="fa fa-user"></i>
                                        </span>
                                    </p>
                                </div>
                                <div className="field">
                                    <p className="control is-expanded has-icons-left">
                                        <input id="emailForm" className="input" type="email" placeholder="Email" required />
                                        <span class="icon is-small is-left">
                                            <i className="fa fa-envelope"></i>
                                        </span>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="field">
                            <p className="control">
                                <input id="subjectForm" className="input" type="text" placeholder="Subject" required />
                            </p>
                        </div>
                        <div className="field is-horizontal">
                            <div className="field-body">
                                <div className="field">
                                    <div className="control">
                                        <textarea id="textForm" className="textarea"></textarea>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="field is-horizontal">
                            <div className="field-body">
                                <div className="field">
                                    <div className="control">
                                        <button type="submit" id="submitForm" className="button is-primary">
                                            Send
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ContactForm;


{/* <img id="sayHello" src={SayHello} alt="Contact Title" /> */ }

