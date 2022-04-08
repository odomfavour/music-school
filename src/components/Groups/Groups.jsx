import React from 'react'
// import guitarMan from '../../images/guitar-man.jpg'
import guitar from '../../images/guitar.jpg'
import piano from '../../images/piano-1.jpg'
import drums from '../../images/drums.jpg'
import sax from '../../images/saxophone.jpg'

const Groups = () => {
    return (
        <section id="instruments">
            <div className="container">
                <div className="text-center">
                    <h2>Musical Instruments</h2>
                    <p>Classes</p>
                </div>
                <div className="py-5">
                    <div className="row">
                        <div className="col-md-3 mb-3">
                            <div className="image-box">
                                <img src={guitar} alt="" className='img-fluid' />
                            </div>
                            <div className="pt-3">
                                <h4 className="text-center">Guitar</h4>
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem, impedit!</p>
                            </div>
                        </div>
                        <div className="col-md-3 mb-3">
                            <div className="image-box">
                                <img src={sax} alt="" className='img-fluid' />
                            </div>
                            <div className="pt-3">
                                <h4 className="text-center">Saxophone</h4>
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem, impedit!</p>
                            </div>

                        </div>
                        <div className="col-md-3 mb-3">
                            <div className="image-box">
                                <img src={drums} alt="" className='img-fluid' />
                            </div>
                            <div className="pt-3">
                                <h4 className="text-center">Drums</h4>
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem, impedit!</p>
                            </div>

                        </div>
                        <div className="col-md-3 mb-3">
                            <div className="image-box">
                                <img src={piano} alt="" className='img-fluid' />
                            </div>
                            <div className="pt-3">
                                <h4 className="text-center">Piano</h4>
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem, impedit!</p>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            <div className="base-display">

            </div>
        </section>
    )
}

export default Groups