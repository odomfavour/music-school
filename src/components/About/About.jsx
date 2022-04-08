import React from 'react'
import ladyMusic from '../../images/african-pianist.jpg'

const About = () => {
    return (
        <section id="about">
            <div className="container">
                <div>
                    <div className="row">
                    <div className="col-md-6 text-center">
                            <img src={ladyMusic} alt="A lady with guitar" className='img-fluid' />
                        </div>
                        <div className="col-md-6">
                            <div className="mt-5">
                                <h3>About Us</h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum autem nemo molestiae placeat culpa architecto commodi provident eaque obcaecati eius possimus alias quae optio, cupiditate ipsam enim saepe amet! Sit?</p>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum autem nemo molestiae placeat culpa architecto commodi provident eaque obcaecati eius possimus alias quae optio, cupiditate ipsam enim saepe amet! Sit?</p>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum autem nemo molestiae placeat culpa architecto commodi provident eaque obcaecati eius possimus alias quae optio, cupiditate ipsam enim saepe amet! Sit?</p>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About