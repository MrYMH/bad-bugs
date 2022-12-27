import React, { Component } from 'react';
import motionIcon4 from "../photo/icon4.png"
import motionIcon3 from "../photo/icon3.png"
import motionIcon2 from "../photo/icon2.png"
import motionIcon1 from "../photo/icon1.png"
import {Routes, Route, useNavigate} from 'react-router-dom';


// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faPenFancy  , faTv , faSquarePollHorizontal , faVideo} from '@fortawesome/free-solid-svg-icons'


const Services = () => {
    const navigate = useNavigate();
    const navigateCategory= () => {
        // 👇️ navigate to /
        navigate('/bad-bugs/categories');
      };
    return (
        <React.Fragment>
                <div id="service" className='features text-center pt-5 pb-5'>
                    <div className="container">
                        <div className="main-title mt-5 mb-5 position-relative">
                            <h2>We are Good at</h2>
                            <p className="text-uppercase text-black-50">Some Of These Stuff Under</p>
                        </div>
                        <div>
                            <div className=" row d-flex justify-content-center align-content-center">
                                <div className="card-item col-md-3 col-sm-6 col-12 " id="card" onClick={navigateCategory} >
                                    <div className="pt-3 pb-5">
                                        <div className="icons mt-5 mb-5">
                                            {/* <FontAwesomeIcon className='icon fa-5x' icon={ faPenFancy} /> */}
                                            <img src={motionIcon1} className='icon-x fa-5x' alt="" />

                                        </div>
                                        <h4 className="text-uppercase">Graphic Design</h4>
                                        <p>
                                            Pellentesque in ipsum id orci porta dapibus. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus.
                                        </p>
                                    </div>
                                </div>
                                <div className="card-item col-md-3 col-sm-6 col-12 " id="card">
                                    <div className="pt-3 pb-5">
                                        <div className="icons mt-5 mb-5">
                                            {/* <FontAwesomeIcon className='icon fa-5x' icon={ faTv} /> */}
                                            <img src={motionIcon2} className='icon-x fa-5x' alt="" />

                                        </div>
                                        <h4 className="text-uppercase">Web Development</h4>
                                        <p>
                                            Pellentesque in ipsum id orci porta dapibus. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus.
                                        </p>
                                    </div>
                                </div>
                                <div className="card-item col-md-3 col-sm-6 col-12 " id="card">
                                    <div className="pt-3 pb-5">
                                        <div className="icons mt-5 mb-5">
                                            {/* <FontAwesomeIcon className='icon fa-5x' icon={ faVideo} /> */}
                                            <img src={motionIcon3} className='icon-x fa-5x' alt="" />

                                        </div>
                                        <h4 className="text-uppercase">video creation</h4>
                                        <p>
                                            Pellentesque in ipsum id orci porta dapibus. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus.
                                        </p>
                                    </div>
                                </div>
                                <div className="card-item col-md-3 col-sm-6 col-12  " id="card">
                                    <div className="pt-3 pb-5">
                                        <div className="icons mt-5 mb-5">
                                            {/* <FontAwesomeIcon className='icon fa-5x' icon={ faSquarePollHorizontal} /> */}
                                            <img src={motionIcon4} className='icon-x fa-5x' alt="" />
                                        </div>
                                        <h4 className="text-uppercase">motion Graphic</h4>
                                        <p>
                                            Pellentesque in ipsum id orci porta dapibus. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus.
                                        </p>
                                    </div>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
    );
}

export default Services;
