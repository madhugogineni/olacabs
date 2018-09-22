import React from 'react';
import '../css/TravelOptionsSection.css';
import supportIcon from '../support-icon.svg';
import sosIcon from '../sos-icon.svg';
import hatIcon from '../hat-icon.svg';
class TravelOptionsSection extends React.Component {
    render() {
        return (
            <section>
                <hr />
                <div className="download-div">
                    <div className="download-body">
                        <div className="download-heading">
                            <h3>Download the app for exclusive deals and ease of booking</h3>
                            <h6>Download the app for exclusive deals and ease of booking</h6>
                        </div>
                        <div className="download-links">

                        </div>
                    </div>
                    <div className="download-image">

                    </div>
                </div>
                <hr />
                <div className="services-provided">
                    <div className="service">
                        <div className="service-image">
                            <img src={supportIcon} />
                        </div>
                        <div className="service-body">
                            <div className="service-heading">
                                24/7 Customer Support
                            </div>
                            <div className="service-content">
                                A dedicated 24x7 customer support team always at your service to help solve any problem
                            </div>
                        </div>
                    </div>
                    <div className="service">
                        <div className="service-image">
                            <img src={sosIcon} />
                        </div>
                        <div className="service-body">
                            <div className="service-heading">
                                24/7 Customer Support
                            </div>
                            <div className="service-content">
                                A dedicated 24x7 customer support team always at your service to help solve any problem
                            </div>
                        </div>
                    </div>
                    <div className="service">
                        <div className="service-image">
                            <img src={hatIcon} />
                        </div>
                        <div className="service-body">
                            <div className="service-heading">
                                24/7 Customer Support
                            </div>
                            <div className="service-content">
                                A dedicated 24x7 customer support team always at your service to help solve any problem
                            </div>
                        </div>
                    </div>
                </div>
            </section >
        )
    }
}
export default TravelOptionsSection;