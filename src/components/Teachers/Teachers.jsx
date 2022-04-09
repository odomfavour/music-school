import React from 'react'
import './teachers.css'
import lady from '../../images/lady-music.jpg'
import guitarMan from '../../images/guitar-man.jpg'
import saxGuy from '../../images/guy-1.jpg'
import violinist from '../../images/violinist.jpg'
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
                                <img src={guitarMan} class="img-fluid" alt="Team member" />
                            </div>
                            <div class="text-bottom">
                                <h3 class="person-name">John Doe</h3>
                                <span class="designation">Team Manager</span>
                                <div class="desc">He brings years of Project Management
                                    and team building experience to
                                    unity music school..
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
                                <h3 class="person-name">Chi Guitar</h3>
                                <span class="designation">Flute Trainer</span>
                                <div class="desc">She is good at her craft and loves music
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
                                <img src={saxGuy} class="img-fluid" alt="Team member" />
                            </div>
                            <div class="text-bottom">
                                <h3 class="person-name">James Doe</h3>
                                <span class="designation">Saxophone Tutor</span>
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
                                <img src={violinist} class="img-fluid" alt="Team member" />
                            </div>
                            <div class="text-bottom">
                                <h3 class="person-name">Sam Baker</h3>
                                <span class="designation">Violin Tutor</span>
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