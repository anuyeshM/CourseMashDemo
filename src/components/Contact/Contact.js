import React from 'react';
import './Contact.css'
const Contact = () => {
    return (
        <main>
            {/* page header banner */}
            <section id='banner-contact'>
                <div className='text-center'>
                    <h1 className='fw-bold text-light display-1'>Contact Us</h1>
                    <h2 className='fw-bold text-light display-5'>We are happy to assist you</h2>
                </div>
            </section>
            <section className='container'>
                <div className="row">
                    <div className="col-md-6 d-flex align-items-center">
                        {/* Contact address */}
                        <div>
                            <h1>Our Office:</h1>
                            <address>
                                <h4>House: 06, Road: 08</h4>
                                <h4>Baridara, Dhaka</h4>
                                <h5>Phone: <br />+8801715777080 <br /> +8801926294263</h5>
                            </address>
                        </div>
                    </div>
                    <div className="col-md-6 my-5">
                        {/* contact form */}
                        <form>
                            <div class="mb-3">
                                <label for="exampleInputName" class="form-label">Name</label>
                                <input type="email" class="form-control" />
                            </div>
                            <div class="mb-3">
                                <label for="exampleInputEmail1" class="form-label">Email</label>
                                <input type="email" class="form-control" />
                            </div>
                            <div class="mb-3">
                                <label for="exampleInputPassword1" class="form-label">Phone</label>
                                <input type="text" class="form-control" />
                            </div>
                            <div class="mb-3">
                                <label for="exampleInputPassword1" class="form-label">Message</label>
                                <textarea type="text" class="form-control" ></textarea>
                            </div>
                            <button type="submit" class="btn btn-primary">SEND</button>
                        </form>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Contact;