import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BiUser, } from "react-icons/bi";
import { BsPhone } from "react-icons/bs";
import { FaChevronDown, FaAt, FaRegAddressCard } from "react-icons/fa";
import { MdDateRange } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";
import { useState } from 'react';
import axios from 'axios';
import Header from './header';
import { useParams } from 'react-router-dom';




function Addcontact() {

    let [name, setname] = useState();
    let [email, setemail] = useState();
    let [password, setpassword] = useState();
    let [phone, setphone] = useState();
    let [date, setdate] = useState();
    let [city, setcity] = useState();
    let [address, setaddress] = useState();
    let [gender, setgender] = useState();
    let [hobby, sethobby] = useState([]);

    const params = useParams();

    useEffect(() => {

        axios.post(`http://localhost/phpdemoform/fillcontact.php'${params.id}`,
            { id: params.id })
            .then(function (response) {
                // handle success
                console.log(response.data);

            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })


    })

    const passdata = () => {
        axios.post('http://localhost/phpdemoform/upcontact.php', {
            id: useParams.id,
            name: name,
            email: email,
            password: password,
            phone: phone,
            date: date,
            city: city,
            address: address,
            gender: gender,
            hobby: hobby,
        })
            .then(function (response) {
                // handle success
                console.log(response);
                window.location = '/viewcontact'
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })

    }


    return (
        <>
            <Header />
            <section className="section kf-reservation kf-section-no-margin">
                <div className="container">

                    <div className="kf-reservation-form">

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
                                <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                                    <div className="kf-field">
                                        <input type="text" name="name" placeholder="Full Name" onChange={(e) => { setname(e.target.value) }} />
                                        <BiUser className='in'></BiUser>
                                    </div>
                                </div>
                                <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                                    <div className="kf-field">
                                        <input type="email" name="email" placeholder="Email Address" onChange={(e) => { setemail(e.target.value) }} />
                                        <FaAt className='in inn2'></FaAt>
                                    </div>
                                </div>
                                <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                                    <div className="kf-field">
                                        <input type="password" name="password" placeholder="Password" onChange={(e) => { setpassword(e.target.value) }} />
                                        <RiLockPasswordLine className='in inn2'></RiLockPasswordLine>
                                    </div>
                                </div>
                                <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                                    <div className="kf-field">
                                        <input type="tel" name="phone" placeholder="Phone Number" onChange={(e) => { setphone(e.target.value) }} />
                                        <BsPhone className='in'></BsPhone>
                                    </div>
                                </div>
                                <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                                    <div className="kf-field">
                                        <input type="date" name="date" placeholder="Date" onChange={(e) => { setdate(e.target.value) }} />
                                        <MdDateRange className='in'></MdDateRange>
                                    </div>
                                </div>
                                <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                                    <div className="kf-field">
                                        <select name="city" placeholder="City" onChange={(e) => { setcity(e.target.value) }}>
                                            <option value="City">City</option>
                                            <option value="suart">Suart</option>
                                            <option value="juanagadh">Junagadh</option>
                                            <option value="baroda">Baroda</option>
                                            <option value="rajkot">Rajkot</option>
                                        </select>
                                        <FaChevronDown className='in inn'></FaChevronDown>
                                    </div>
                                </div>
                                <div className="col-xs-12 col-sm-12 col-md-6 col-lg-12">
                                    <div className="kf-field">
                                        <input type="text" name="address" placeholder="Address" onChange={(e) => { setaddress(e.target.value) }} />
                                        <FaRegAddressCard className='in'></FaRegAddressCard>
                                    </div>
                                </div>

                                <div className="col-lg-12 d-flex mt-2 ps-3 mb-3">
                                    <label style={{ color: "#757568" }}>Hobby:</label>
                                    <div className="d-flex ">
                                        <label for="" className="px-2 '" style={{ color: "#757568" }}>Reading</label>
                                        <input type="checkbox" name="hobby[]" class="form_in" value="Reading" onChange={(e) => { sethobby([...hobby, (e.target.value)]) }} />
                                    </div>
                                    <div class="d-flex mx-3">
                                        <label for="" className="px-2" style={{ color: "#757568" }}>Cooking</label>
                                        <input type="checkbox" name="hobby[]" className="form_in" value="Cooking" onChange={(e) => { sethobby([...hobby, (e.target.value)]) }} />

                                    </div>
                                    <div className="d-flex mx-3">
                                        <label for="" className="px-2" style={{ color: "#757568" }}>Movie</label>
                                        <input type="checkbox" name="hobby[]" className="form_in" value="Movie" onChange={(e) => { sethobby([...hobby, (e.target.value)]) }} />

                                    </div>
                                    <div className="d-flex ">
                                        <label for="" className="px-2" style={{ color: "#757568" }}>Modeling</label>
                                        <input type="checkbox" name="hobby[]" className="form_in" value="Modeling" onChange={(e) => { sethobby([...hobby, (e.target.value)]) }} />
                                    </div>
                                </div>
                                <div className="d-flex col-xs-12 col-sm-12 col-md-6 col-lg-12 " onChange={(e) => { setgender(e.target.value) }}>
                                    <div className="kf-field d-flex mb-3" >
                                        <label className='ps-1 me-4' style={{ color: "#757568" }}>Gender :</label>
                                        <div class=" d-flex me-4 ">
                                            <label for="" className="pe-2 " style={{ color: "#757568" }}>Male</label>
                                            <input type="radio" name="gender" value="Male" className="form_in" />
                                        </div>
                                        <div class=" d-flex p-0  gen">
                                            <label for="" className="px-2" style={{ color: "#757568" }}>Female</label>
                                            <input type="radio" name="gender" value="Female" className="form_in" />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 text-center">
                                    <div className="kf-bts">
                                        <a href="Im" className="kf-btn">
                                            <input type='submit' value="Submit" className="btn" onClick={passdata}></input>
                                        </a>
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



export default Addcontact;