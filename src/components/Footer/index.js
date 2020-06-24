import {FooterStyled} from "./styled";
import React from 'react';

function Footer(props) {
    return (
        <FooterStyled>
            <section id="footer" className='bg-dark'>
                <div className="container">
                    <div className="row text-center text-xs-center text-sm-left text-md-left">
                        <div className="col-xs-12 col-sm-4 col-md-4">
                            <h5>Quick links</h5>
                            <ul className="list-unstyled quick-links">
                                <li>
                                    <a href="https://www.fiverr.com/share/qb8D02">
                                        <i className="quick-links-icon fa fa-angle-double-right">
                                        </i>Home
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.fiverr.com/share/qb8D02">
                                        <i className="quick-links-icon fa fa-angle-double-right">
                                        </i>About
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.fiverr.com/share/qb8D02">
                                        <i className="quick-links-icon fa fa-angle-double-right">
                                        </i>FAQ</a>
                                </li>
                                <li>
                                    <a href="https://www.fiverr.com/share/qb8D02">
                                        <i className="quick-links-icon fa fa-angle-double-right">
                                        </i>Get Started</a>
                                </li>
                                <li>
                                    <a href="https://www.fiverr.com/share/qb8D02">
                                        <i className="quick-links-icon fa fa-angle-double-right">
                                        </i>Videos</a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-xs-12 col-sm-4 col-md-4">
                            <h5>Quick links</h5>
                            <ul className="list-unstyled quick-links">
                                <li><a href="https://www.fiverr.com/share/qb8D02"><i
                                    className="quick-links-icon fa fa-angle-double-right"></i>Home</a></li>
                                <li><a href="https://www.fiverr.com/share/qb8D02"><i
                                    className="quick-links-icon fa fa-angle-double-right"></i>About</a></li>
                                <li><a href="https://www.fiverr.com/share/qb8D02"><i
                                    className="quick-links-icon fa fa-angle-double-right"></i>FAQ</a></li>
                                <li><a href="https://www.fiverr.com/share/qb8D02"><i
                                    className="quick-links-icon fa fa-angle-double-right"></i>Get Started</a></li>
                                <li><a href="https://www.fiverr.com/share/qb8D02"><i
                                    className="quick-links-icon fa fa-angle-double-right"></i>Videos</a></li>
                            </ul>
                        </div>
                        <div className="col-xs-12 col-sm-4 col-md-4">
                            <h5>Quick links</h5>
                            <ul className="list-unstyled quick-links">
                                <li><a href="https://www.fiverr.com/share/qb8D02"><i
                                    className="quick-links-icon fa fa-angle-double-right"></i>Home</a></li>
                                <li><a href="https://www.fiverr.com/share/qb8D02"><i
                                    className="quick-links-icon fa fa-angle-double-right"></i>About</a></li>
                                <li><a href="https://www.fiverr.com/share/qb8D02"><i
                                    className="quick-links-icon fa fa-angle-double-right"></i>FAQ</a></li>
                                <li><a href="https://www.fiverr.com/share/qb8D02"><i
                                    className="quick-links-icon fa fa-angle-double-right"></i>Get Started</a></li>
                                <li><a href="https://wwwe.sunlimetech.com" title="Design and developed by"><i
                                    className="quick-links-icon fa fa-angle-double-right"></i>Imprint</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xs-12 col-sm-12 col-md-12 mt-2 mt-sm-5">
                            <ul className="list-unstyled list-inline social text-center">
                                <li className="list-inline-item">
                                    <a href="https://www.fiverr.com/share/qb8D02">
                                        <i className="social-icon fab fa-facebook-f"></i>
                                    </a>
                                </li>
                                <li className="list-inline-item">
                                    <a href="https://www.fiverr.com/share/qb8D02">
                                        <i className="social-icon fab fa-twitter"></i>
                                    </a>
                                </li>
                                <li className="list-inline-item">
                                    <a href="https://www.fiverr.com/share/qb8D02">
                                        <i className="social-icon fab fa-instagram"></i>
                                    </a>
                                </li>
                                <li className="list-inline-item">
                                    <a href="https://www.fiverr.com/share/qb8D02">
                                        <i className="social-icon fab fa-google-plus-g"></i>
                                    </a>
                                </li>
                                <li className="list-inline-item"><a href="https://www.fiverr.com/share/qb8D02"
                                ><i
                                    className="social-icon fa fa-envelope"></i></a>
                                </li>
                            </ul>
                        </div>
                        <hr/>
                    </div>
                    <div className="row">
                        <div className="col-xs-12 col-sm-12 col-md-12 mt-2 mt-sm-2 text-center text-white">
                            <p><u><a href="https://www.nationaltransaction.com/">National Transaction
                                Corporation</a></u> is a Registered MSP/ISO of Elavon, Inc. Georgia [a wholly owned
                                subsidiary of U.S. Bancorp, Minneapolis, MN]</p>
                            <p className="h6">© All right Reversed.<a className="text-green ml-2"
                                                                      href="https://www.sunlimetech.com"
                            >Sunlimetech</a></p>
                        </div>
                        <hr/>
                    </div>
                </div>
            </section>
        </FooterStyled>
    );
}

export default Footer;