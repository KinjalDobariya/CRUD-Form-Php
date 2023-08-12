// bootstrap file
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import View from './View';

//icon file 
import { RxCaretDown } from "react-icons/rx";
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";
import { MdOutlineWatchLater, MdLocationOn } from "react-icons/md";
import { Link } from 'react-router-dom';




function Header() {
    return (
        <div>
            <div class="kf-topline d-none d-lg-block">
                <div class="row">
                    <div class="col-xs-12 col-sm-12 col-md-6 col-lg-4 text-lg-start text-sm-center">
                        <div class="kf-h-group">
                            <MdOutlineWatchLater className='i text-sm-center'></MdOutlineWatchLater>
                            <em>opening hours :</em> 08:00 am - 09:00 pm
                        </div>
                    </div>
                    <div class="col-xs-12 col-sm-12 col-md-6 col-lg-4 mx-lg-0 mx-md-0 mx-sm-0 mx-xs-5 text-sm-center ">
                        <div class="kf-h-social">
                            <a href="index.html"><FaFacebookF className='social_icon'></FaFacebookF></a>
                            <a href="index.html"><FaTwitter className='social_icon'></FaTwitter></a>
                            <a href="index.html"><FaInstagram className='social_icon'></FaInstagram></a>
                            <a href="index.html"><FaYoutube className='social_icon1'></FaYoutube></a>
                        </div>
                    </div>
                    <div class="col-xs-12 col-sm-12 col-md-12 my-lg-0 my-md-2 col-lg-4 text-lg-end  text-md-center text-sm-center">
                        <div class="kf-h-group">
                            <MdLocationOn className='ii'></MdLocationOn>
                            <em>Location :</em> 55 main street, new york
                        </div>

                    </div>
                </div>
            </div>
            <Navbar className='navs' expand="lg">
                <Container fluid>
                    <Navbar.Brand href="home" className='nav_img'>
                        <img src={require("./image/logo-edu.png")}></img>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav className=" my-2 my-lg-0 text-start" style={{ maxHeight: '100px', marginLeft: '80px' }} navbarScroll>
                            <Link to="/addcontact" className='nav-link'>
                                ADD CONTACT<RxCaretDown className='rx_icon'></RxCaretDown>
                            </Link>
                            <Nav.Link href="/">
                                VIEW CONTACT<RxCaretDown className='rx_icon'></RxCaretDown>
                            </Nav.Link>
                        </Nav>
                        <Form className="ms-auto my-2 my-lg-0 align-center" style={{ maxHeight: '100px' }} navbarScroll>
                                <div className="kf-bts">
                                    <Link to="/login" className="kf-btn">
                                        <input type='submit' value="Log Out" className="btn"></input>
                                    </Link>
                                </div>
                    </Form>
                </Navbar.Collapse>
            </Container>
        </Navbar >
        </div >
    );
}



export default Header;