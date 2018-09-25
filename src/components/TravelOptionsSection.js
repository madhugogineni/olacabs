import React from 'react';
import '../css/TravelOptionsSection.css';
import supportIcon from '../support-icon.svg';
import sosIcon from '../sos-icon.svg';
import hatIcon from '../hat-icon.svg';
import appDownlaod from '../app-download.png';
import microsoftStore from '../microsoft-store.png';
import appStore from '../app-store.png';
import playStore from '../play-store.png';
import fleetAutoImage from '../fleet_auto_image.png';
import fleetBikeImage from '../fleet_bike_image.png';
import fleetCarImage from '../fleet_car_image.png';
import fleetERikshawImage from '../fleet_e_rickshaw_image.png';
import fleetKaaliPeeliImage from '../fleet_kaali_peeli_image.png';
import fleetLuxImage from '../fleet_lux_image.png';
import fleetMicroImage from '../fleet_micro_image.png';
import fleetMiniImage from '../fleet_mini_image.png';
import fleetPrimePlayImage from '../fleet_prime_play_image.png';
import fleetPrimeSuvImage from '../fleet_prime_suv_image.png';
import fleetSedanImage from '../fleet_sedan_image.png';
import IconImage from '../_icon_image.png';



class TravelOptionsSection extends React.Component {
    constructor(props) {
        super(props);
        this.setState = {};
    }
    render() {
        return (
            <section>
                <div className="ola-fleet">
                    <h2>Meet our Awesome Fleet</h2>
                    <div>The widest variety of cars to choose from</div>
                </div>
                <div class="fleet-options">

                </div>
                <hr />
                <div className="download-div">
                    <div className="download-body">
                        <div className="download-heading">
                            <h2>Book an Ola from the App</h2>
                            <div>Download the app for exclusive deals and ease of booking</div>
                        </div>
                        <div className="download-links">
                            <a><img src={playStore} /></a>
                            <a><img src={appStore} /></a>
                            <a><img src={microsoftStore} /></a>
                        </div>
                    </div>
                    <div className="download-image-display">
                        <img src={appDownlaod} className="download-image" />
                    </div>
                </div>
                <hr className="no-margin" />
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