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
                                <p>Unity Music school was born out of the passion of teaching people to create good music.</p>
                                <p>Our professional approach and continual development has led us to becoming the leading provider of professional music education. We combine innovative, fun and creative ways to teach music and engage with students to reach their full potential. Innovative music lessons and classes from beginner through advanced for children, teens, and adults. We are the best music school for you. We have programs to suit everyone’s needs.</p>
                                <p>We are the only professional music school offering lessons for children, adults and seniors.</p>
                                <p>There's a whole lot you stand to gain from learning about music and how to play musical Instruments</p>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About