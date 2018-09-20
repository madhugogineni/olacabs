import React from 'react';
import '../css/headers.css';
import Olaimage from '../ola-image.png';
class Header extends React.Component {
    render() {
        return (
            <React.Fragment>
                <header className="header-sticky">
                    <div className="header1 hide-xs">
                        <div className="pull-left">
                        </div>
                        <div className="pull-right">
                            <div className="header1-body">
                                <a href="https://partners.olacabs.com/">Drive with Ola</a>
                            </div>
                            <div className="header1-body">
                                <a href="https://www.olamoney.com/">Ola Money</a>
                            </div>
                            <div className="header1-body">
                                <a href="https://corporate.olacabs.com/">Ola Corporate</a>
                            </div>
                            <div className="header1-body">
                                <a href="/share">Share</a>
                            </div>
                            <div className="header1-body">
                                <a href="https://blog.olacabs.com/">Offers</a>
                            </div>
                            <div className="header1-body">
                                <a href="https://help.olacabs.com/support">Support</a>
                            </div>
                        </div>
                    </div>
                    <div className="header2">
                        <div className="header2-image">
                            <a><img src={Olaimage} className="olaimage" alt="ola" /></a>
                        </div>
                        <div className="header2-links">
                            <a className="other-links">Ola Select</a>
                            <a className="other-links">Ola Fleet</a>
                            <a className="other-links">Features</a>
                            <a href="/login" className="booknow-link">Book Now</a>
                        </div>
                    </div>
                </header>
            </React.Fragment>
        )
    }
}
export default Header;