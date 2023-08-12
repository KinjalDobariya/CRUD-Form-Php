import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaAt } from "react-icons/fa";
import { RiLockPasswordLine } from "react-icons/ri";
import { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';




function Login() {

    let [email, setemail] = useState();
    let [password, setpassword] = useState();

    const passdata = () => {
        axios.post('http://localhost/phpdemoform/login.php', {
            email: email,
            password: password,
        })
            .then(function (response) {
                // handle success
                console.log(response.data);
                window.location = "/addcontact";
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

                    <div className="kf-reservation-form margin">

                        <div className="image-left"></div>
                        <div className="image-right"></div>

                        <div className="kf-titles text-center">
                            <div className="kf-subtitle">
                                Login Table
                            </div>
                            <h3 className="kf-title">
                                Make Your Login
                            </h3>
                        </div>

                        <form>
                            <div className="row">
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
                                        <a href="" className="kf-btn">
                                            <input type='button' value="Log in" className="btn" onClick={passdata}></input>
                                        </a>
                                    </div>
                                </div>
                                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 d-flex mt-3  justify-content-center">
                                    <hr style={{ width: "40%", color: "white" }}></hr>
                                    <p style={{ color: "white", margin:"0 15px"}}>OR </p>
                                    <hr style={{ width: "40%", color: "white" }}></hr>
                                </div>
                                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 text-center">
                                        <Link to="/registration" className='link' >
                                            New Registration
                                        </Link>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </section>


        </>
    );
}



export default Login;