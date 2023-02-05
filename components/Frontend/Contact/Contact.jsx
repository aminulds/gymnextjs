import React from 'react';

const Contact = () => {
    return (
        <div className="contact py-4 py-md-5" id="contact">
            <div className="container">
                <div className="section-header text-center">
                    <h2>Contact</h2>
                    <p>Contact US for Any Query</p>
                </div>
                <div className="row d-flex justify-content-center">
                    <div className="col-md-8 col-12">
                        <div className="contact-form">
                            <form id="contact-form">
                                <div className="row g-4">
                                    <div className="form-group col-lg-4">
                                        <input type="text" name="name" className="form-control" id="first-name" placeholder="Name" required="required" />
                                    </div>
                                    <div className="form-group col-lg-4">
                                        <input type="email" name="email" className="form-control" id="first-email" placeholder="Email" required="required" />
                                    </div>
                                    <div className="form-group col-lg-4">
                                        <input type="text" name="phone" className="form-control" id="phone" placeholder="Phone" required="required" />
                                    </div>

                                    <div className="form-group col-lg-12">
                                        <input type="text" name="subject" className="form-control" id="subject" placeholder="Subject" required="required" />
                                    </div>
                                    <div className="form-group col-lg-12">
                                        <textarea rows="8" name="message" className="form-control" id="description" placeholder="Your Message" required="required"></textarea>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="submit">
                                            <input type="button" value="Submit" name="submit" id="submitButton" className="btn btnPrimary" />
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
