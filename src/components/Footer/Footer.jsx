import React from 'react'
// import guitarMan from '../../images/guitar-man.jpg';

const Footer = () => {
    return (
        <section>
            <section id="contact">
                <div className="container">
                    <div className="my-3">
                        <div className="row">
                            <div className="col-md-4">
                                {/* <div className="image-box">
                                <img src={guitarMan} alt="" className='img-fluid' />
                            </div> */}
                            </div>
                            <div className="col-md-8">
                                <div className="row">
                                    <div className="col-md-6">
                                        <h5>Address</h5>
                                        <p>Lorem ipsum dolor sit amet.</p>
                                    </div>
                                    <div className="col-md-6">
                                        <h5>Open Hours</h5>
                                        <p>Monday - Friday: 12pm - 8pm</p>
                                        <p>Saturday: 10am - 2pm</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <footer className='text-center text-white bg-dark py-3 mt-3'>
                <h6 className="my-4">© 2022 designed by ogochukwu odom. All rights reserved.</h6>
            </footer>
        </section>
    )
}

export default Footer