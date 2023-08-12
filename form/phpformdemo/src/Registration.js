import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaAt } from "react-icons/fa";
import { BiUser, } from "react-icons/bi";
import { RiLockPasswordLine } from "react-icons/ri";
import { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';




function Registration() {

    let [name, setname] = useState();
    let [email, setemail] = useState();
    let [password, setpassword] = useState();

    const passdata = () => {
        axios.post('http://localhost/phpdemoform/register.php', {
            name: name,
            email: email,
            password: password,
        })
            .then(function (response) {
                // handle success
                console.log(response);
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })

    }


    return (
        <>
            <section className="section2 kf-reservation kf-section-no-margin">
                <div className="container">

                    <div className="kf-reservation-form marginz">

                        <div className="image-left"></div>
                        <div className="image-right"></div>

                        <div className="kf-titles text-center">
                            <div className="kf-subtitle">
                                Registration Table
                            </div>
                            <h3 className="kf-title">
                                Make Your Registration
                            </h3>
                        </div>

                        <form>
                            <div className="row">
                                <div className="col-xs-12 col-sm-12 col-md-6 col-lg-12">
                                    <div className="kf-field">
                                        <input type="text" name="name" placeholder="Full Name" onChange={(e) => { setname(e.target.value) }} />
                                        <BiUser className='in'></BiUser>
                                    </div>
                                </div>
                                <div className="col-xs-12 col-sm-12 col-md-6 col-lg-12">
                                    <div className="kf-field">
                                        <input type="email" name="email" placeholder="Email Address" onChange={(e) => { setemail(e.target.value) }} />
                                        <FaAt className='in inn2'></FaAt>
                                    </div>
                                </div>
                                <div className="col-xs-12 col-sm-12 col-md-6 col-lg-12">
                                    <div className="kf-field">
                                        <input type="password" name="password" placeholder="Password" onChange={(e) => { setpassword(e.target.value) }} />
                                        <RiLockPasswordLine className='in inn2'></RiLockPasswordLine>
                                    </div>
                                </div>
                                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 text-center">
                                    <div className="kf-bts">
                                        <Link to="/login" className="kf-btn">
                                            <input type='submit' value="Registration" className="btn" onClick={passdata}></input>
                                        </Link>
                                    </div>
                                </div>

                            </div>
                        </form>
                    </div>
                </div>
            </section>


        </>
    );
}



export default Registration;