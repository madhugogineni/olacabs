import React from 'react';
import '../css/BookCab.css';
import bookNowImage from '../book_now_image.jpg';
import menuIcon from '../menu_icon.png';
import olaImage from '../ola-image.png';
import locationOffImage from '../location_off.png';
class BookCab extends React.Component {
    render() {
        return (
            <React.Fragment>
                <div className="bookcabs">
                    <div className="booking-div">
                        <div className="heading">
                            <div className="menu-div">
                                <img src={menuIcon} className="menu-image" />
                            </div>
                            <div className="heading-icon">
                                <img src={olaImage} className="heading-icon-image" />
                            </div>
                            <div className="login-button">
                                <a>LOG IN</a>
                            </div>
                        </div>
                        <div className="booking-form">
                            <div className="booking-options">
                                <div className="booking-option1"><a>DAILY RIDES</a></div>
                                <div className="booking-option2"><a>OUTSTATION</a></div>
                                <div className="booking-option2"><a>RENTALS</a></div>
                            </div>
                            <div className="booking-options-content">
                                <div className="input-field">
                                    <div className="input-field-label">
                                        FROM
                                    </div>
                                    <div className="input-field-content">
                                        Enter Pickup Location
                                    </div>
                                </div>
                                <div className="input-field">
                                    <div className="input-field-label">
                                        TO
                                    </div>
                                    <div className="input-field-content">
                                        Search for Locality ot Landmark
                                    </div>
                                </div>
                                <div className="input-field">
                                    <div className="input-field-label">
                                        FROM
                                    </div>
                                    <select className="input-field-select-content">
                                        <option>Now</option>
                                        <option>Schedule for Later</option>  
                                    </select>
                                </div>
                            </div>
                            <div className="location-off">
                            <img src={locationOffImage} className="location-off-image"/>
                            </div>
                        </div>
                    </div>
                    <div className="main-image-div">
                        <img src={bookNowImage} className="main-image" />
                    </div>
                </div>
            </React.Fragment>
        )
    }
}
export default BookCab;