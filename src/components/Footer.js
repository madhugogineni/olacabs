import React from 'react';
import '../css/Footer.css';
class Footer extends React.Component {
    render() {
        return (
            <div class="footer-div">
                <div className="footer-content">
                    <h4>Top Visited Cities</h4>
                    <hr />
                    <div className="outstation-routes">
                        <div className="outstation-route">Popular Outstation Routes</div>
                        <div className="outstation-route">
                            <div className="route-heading">
                                Northern India
                            </div>
                            <div className="route-body">
                                <a>Delhi to Chandigarh Outstation Cabs</a>
                                <a>Delhi to Agra Outstation Cabs</a>
                                <a>Delhi to Jaipur Outstation Cabs</a>
                                <a>Delhi to Shimla Outstation Cabs</a>
                                <a>Delhi to Nainital Outstation Cabs</a>
                                <a>Jaipur to Delhi Outstation Cabs</a>
                            </div>
                        </div>
                        <div className="outstation-route">
                            <div className="route-heading">
                                Southern India
                            </div>
                            <div className="route-body">
                                <a>Chennai to Pondicherry Outstation Cabs</a>
                                <a>Chennai to Tirupati Outstation Cabs</a>
                                <a>Chennai to Vellore Outstation Cabs</a>
                                <a>Hyderabad to Vijayawada Outstation Cabs</a>
                                <a>Hyderabad to Warangal Outstation Cabs</a>
                                <a>Hyderabad to Tirupati Outstation Cabs</a>
                            </div>
                        </div>
                        <div className="outstation-route">
                            <div className="route-heading">
                                East & West India
                            </div>
                            <div className="route-body">
                                <a>Mumbai to Pune Outstation Cabs</a>
                                <a>Mumbai to Mahabaleshwar Outstation Cabs</a>
                                <a>Mumbai to Lonavala Outstation Cabs</a>
                                <a>Mumbai to Nashik Outstation Cabs</a>
                                <a>Mumbai to Matheran Outstation Cabs</a>
                                <a>Mumbai to Shirdi Outstation Cabs</a>
                            </div>
                        </div>
                        <div className="outstation-routes-expand">
                            + Expand More Routes
                        </div>
                    </div>
                    <hr />
                    <div className="social-links">
                        <div className="social-link-label">Social Links</div>
                        <div clasName="social-link-icons">
                            <div className="social-link-icon">fw</div>
                            <div className="social-link-icon">wdc</div>
                            <div className="social-link-icon">wc</div>
                            <div className="social-link-icon">wvd</div>
                        </div>
                        <div className="countryselect">
                            <select>
                                <option>India</option>
                                <option>Australia</option>
                                <option>United Kingdom</option>
                            </select>
                        </div>
                    </div>
                    <hr />
                    <div className="discover-ola">
                        <div className="discover-ola-label">Discover Ola</div>
                        <div className="discover-ola-content">
                            <div className="discover-ola-item">About Ola</div>
                            <div className="discover-ola-item">Careers</div>
                            <div className="discover-ola-item">Offers</div>
                            <div className="discover-ola-item">Contact Us</div>
                            <div className="discover-ola-item">Media Center</div>
                        </div>
                        <div clasName="discover-ola-become-book">
                            <div className="discover-ola-item">Become a driver</div>
                            <div className="discover-ola-item">Book a ride</div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Footer;