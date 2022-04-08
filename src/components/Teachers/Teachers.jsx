import React from 'react'
import './teachers.css'
import lady from '../../images/lady-music.jpg'
import { FaFacebookF, FaLinkedinIn, FaTwitter } from 'react-icons/fa'

const Teachers = () => {
    return (
        <div class="team-section" id="team">
            <div class="container">
                <h3 class="text-center mb-5">Meet the Team</h3>
                <div class="row">
                    <div class="col-md-3 mb-3">
                        <div class="team-item">
                            <div class="team-image">
                                <img src={lady} class="img-fluid" alt="Team member" />
                            </div>
                            <div class="text-bottom">
                                <h3 class="person-name">Ogochukwu Odom</h3>
                                <span class="designation">Team Manager</span>
                                <div class="desc">He brings years of Project Management
                                    and team building experience to
                                    event-360..
                                </div>
                                <div class="team-social">
                                    <ul>
                                        <li><a href="#facebook"><FaFacebookF /></a></li>
                                        <li><a href="#facebook"><FaLinkedinIn /></a></li>
                                        <li><a href="#facebook"><FaTwitter /></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-3 mb-3">
                        <div class="team-item">
                            <div class="team-image">
                                <img src={lady} class="img-fluid" alt="Team member" />
                            </div>
                            <div class="text-bottom">
                                <h3 class="person-name">Ogochukwu Odom</h3>
                                <span class="designation">Team Manager</span>
                                <div class="desc">He brings years of Project Management
                                    and team building experience to
                                    event-360..
                                </div>
                                <div class="team-social">
                                    <ul>
                                        <li><a href="#facebook"><FaFacebookF /></a></li>
                                        <li><a href="#facebook"><FaLinkedinIn /></a></li>
                                        <li><a href="#facebook"><FaTwitter /></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-3 mb-3">
                        <div class="team-item">
                            <div class="team-image">
                                <img src={lady} class="img-fluid" alt="Team member" />
                            </div>
                            <div class="text-bottom">
                                <h3 class="person-name">Ogochukwu Odom</h3>
                                <span class="designation">Team Manager</span>
                                <div class="desc">He brings years of Project Management
                                    and team building experience to
                                    event-360..
                                </div>
                                <div class="team-social">
                                    <ul>
                                        <li><a href="#facebook"><FaFacebookF /></a></li>
                                        <li><a href="#facebook"><FaLinkedinIn /></a></li>
                                        <li><a href="#facebook"><FaTwitter /></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-3 mb-3">
                        <div class="team-item">
                            <div class="team-image">
                                <img src={lady} class="img-fluid" alt="Team member" />
                            </div>
                            <div class="text-bottom">
                                <h3 class="person-name">Ogochukwu Odom</h3>
                                <span class="designation">Team Manager</span>
                                <div class="desc">He brings years of Project Management
                                    and team building experience to
                                    event-360..
                                </div>
                                <div class="team-social">
                                    <ul>
                                        <li><a href="#facebook"><FaFacebookF /></a></li>
                                        <li><a href="#facebook"><FaLinkedinIn /></a></li>
                                        <li><a href="#facebook"><FaTwitter /></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Teachers