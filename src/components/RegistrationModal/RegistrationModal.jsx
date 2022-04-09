import React from 'react'
import { Modal } from 'react-bootstrap'

const RegistrationModal = ({ show, handleClose }) => {
    return (
        <Modal show={show} onHide={handleClose} size="lg" centered>
            <Modal.Header closeButton>
                <Modal.Title>Registration Form</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <section className='px-3 pb-3'>
                    <form>
                        <div className="row">
                            <div className="col-md-6">
                                <div class="mb-3">
                                    <label for="firstName" class="form-label">Last Name</label>
                                    <input type="text" class="form-control" id="firstName" aria-describedby="latNameHelp" />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div class="mb-3">
                                    <label for="exampleInputEmail1" class="form-label">First Name</label>
                                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                </div>
                            </div>
                        </div>
                        <div class="mb-3">
                            <label for="email" class="form-label">Email address</label>
                            <input type="email" class="form-control" id="email" aria-describedby="emailHelp" />
                        </div>
                        <div class="mb-3">
                            <label for="address" class="form-label">Address</label>
                            <input type="text" class="form-control" id="address" aria-describedby="addressHelp" />
                        </div>
                        <div class="mb-3">
                            <label for="phone" class="form-label">Phone Number</label>
                            <input type="tel" class="form-control" id="phone" aria-describedby="addressHelp" />
                        </div>
                        <div className="mb-3">
                            <div className="row">
                                <div className="col-md-6">
                                    <div class="mb-3">
                                        <label for="dob" class="form-label">Date of birth</label>
                                        <input type="date" class="form-control" id="dob" aria-describedby="addressHelp" />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div class="mb-3">
                                        <label for="maritalStatus" class="form-label">Marital Status</label>
                                        <select class="form-select" aria-label="Default select example">
                                            <option selected>Open this select menu</option>
                                            <option value="1">Married</option>
                                            <option value="2">Single</option>
                                            <option value="3">Widowed</option>
                                            <option value="3">Seperated</option>
                                            <option value="3">Divorced</option>
                                            <option value="3">Complicated</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="mb-3">
                            <label for="choiceInstruments" class="form-label">Choice of Instruments</label>
                            <div class="form-check">
                                <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                                <label class="form-check-label" for="exampleCheck1">Violin</label>
                            </div>
                            <div class="form-check">
                                <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                                <label class="form-check-label" for="exampleCheck1">Viola</label>
                            </div>
                            <div class="form-check">
                                <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                                <label class="form-check-label" for="exampleCheck1">Cello</label>
                            </div>
                            <div class="form-check">
                                <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                                <label class="form-check-label" for="exampleCheck1">Flute</label>
                            </div>
                            <div class="form-check">
                                <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                                <label class="form-check-label" for="exampleCheck1">Trumpet</label>
                            </div>
                            <div class="form-check">
                                <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                                <label class="form-check-label" for="exampleCheck1">Piano</label>
                            </div>
                            <div class="form-check">
                                <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                                <label class="form-check-label" for="exampleCheck1">Voice</label>
                            </div>
                        </div>
                        <div class="mb-3">
                            <label for="exampleInputPassword1" class="form-label">Password</label>
                            <input type="password" class="form-control" id="exampleInputPassword1" />
                        </div>
                        <button type="submit" class="btn btn-primary">Submit</button>
                    </form>
                </section>
            </Modal.Body>
        </Modal>
    )
}

export default RegistrationModal