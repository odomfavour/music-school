import React from 'react'
// import guitarMan from '../../images/guitar-man.jpg'
import viola from '../../images/viola-2.jpg'
import piano from '../../images/piano-1.jpg'
import violin from '../../images/violin.jpg'
import cello from '../../images/cello.jpg'
import trumpet from '../../images/trumpet-1.jpg'
import voice from '../../images/voice.jpg'
import flute from '../../images/flute-1.jpg'
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
                                <img src={violin} alt="" className='img-fluid' />
                            </div>
                            <div className="pt-3">
                                <h4 className="text-center">Violin</h4>
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem, impedit!</p>
                            </div>
                        </div>
                        <div className="col-md-3 mb-3">
                            <div className="image-box">
                                <img src={viola} alt="" className='img-fluid' />
                            </div>
                            <div className="pt-3">
                                <h4 className="text-center">Viola</h4>
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem, impedit!</p>
                            </div>
                        </div>
                        <div className="col-md-3 mb-3">
                            <div className="image-box">
                                <img src={cello} alt="" className='img-fluid' />
                            </div>
                            <div className="pt-3">
                                <h4 className="text-center">Cello</h4>
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
                                <img src={trumpet} alt="" className='img-fluid' />
                            </div>
                            <div className="pt-3">
                                <h4 className="text-center">Trumpet</h4>
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem, impedit!</p>
                            </div>
                        </div>
                        <div className="col-md-3 mb-3">
                            <div className="image-box">
                                <img src={flute} alt="" className='img-fluid' />
                            </div>
                            <div className="pt-3">
                                <h4 className="text-center">Flute</h4>
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
                        <div className="col-md-3 mb-3">
                            <div className="image-box">
                                <img src={voice} alt="" className='img-fluid' />
                            </div>
                            <div className="pt-3">
                                <h4 className="text-center">Voice</h4>
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem, impedit!</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="base-display">
                <div>
                    <h3>"Music is the literature of the heart; it commences where speech ends."</h3>
                    <p><i>Alphonse de Lamartine</i></p>
                    <button className='btn btn-primary'>Join Today</button>
                </div>
            </div>
        </section>
    )
}

export default Groups