import React from 'react';
import '../css/TravelOptionsSection.css';
import supportIcon from '../support-icon.svg';
import sosIcon from '../sos-icon.svg';
import hatIcon from '../hat-icon.svg';
import appDownlaod from '../app-download.png';
import microsoftStore from '../microsoft-store.png';
import appStore from '../app-store.png';
import playStore from '../play-store.png';
import autoIcon from '../auto_icon.svg';
import autoIconActive from '../auto_icon_active.svg';
import bikeIcon from '../bike_icon.svg';
import bikeIconActive from '../bike_icon_active.svg';
import shareIcon from '../share_icon.svg';
import shareIconActive from '../share_icon_active.svg';
import microIcon from '../micro_icon.svg';
import microIconActive from '../micro_icon_active.svg';
import miniIcon from '../mini_icon.svg';
import miniIconActive from '../mini_icon_active.svg';
import primeSedanIcon from '../sedan_icon.svg';
import primeSedanIconActive from '../sedan_icon_active.svg';
import primePlayIcon from '../prime_play_icon.svg';
import primePlayIconActive from '../prime_play_icon_active.svg';
import suvIcon from '../suv_icon.svg';
import suvIconActive from '../suv_icon_active.svg';
import luxIcon from '../lux_icon.svg';
import luxIconActive from '../lux_icon_active.svg';
import eRickshawIcon from '../e_rickshaw_icon.svg';
import eRickshawIconActive from '../e_rickshaw_icon_active.svg';
import kaaliPeeliIcon from '../kaali_peeli_icon.svg';
import kaaliPeeliIconActive from '../kaali_peeli_icon_active.svg';
import fleetAutoImage from '../fleet_auto_image.png';
import fleetBikeImage from '../fleet_bike_image.png';
import fleetShareImage from '../fleet_car_image.png';
import fleetERikshawImage from '../fleet_e_rickshaw_image.png';
import fleetKaaliPeeliImage from '../fleet_kaali_peeli_image.png';
import fleetLuxImage from '../fleet_lux_image.png';
import fleetMicroImage from '../fleet_micro_image.png';
import fleetMiniImage from '../fleet_mini_image.png';
import fleetPrimePlayImage from '../fleet_prime_play_image.png';
import fleetPrimeSuvImage from '../fleet_prime_suv_image.png';
import fleetSedanImage from '../fleet_sedan_image.png';
import fleetAdvantages from '../fleet_advantages.png';



class TravelOptionsSection extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            vehicleIcons: [autoIcon, bikeIcon, shareIcon, microIcon, miniIcon, primeSedanIcon, primePlayIcon, suvIcon, luxIcon, eRickshawIcon, kaaliPeeliIcon],
            fleetVehicleOnHoverStyle: ["fleet-vehicle", "fleet-vehicle", "fleet-vehicle", "fleet-vehicle", "fleet-vehicle", "fleet-vehicle", "fleet-vehicle", "fleet-vehicle"],
            permVehicleIcons: [autoIcon, bikeIcon, shareIcon, microIcon, miniIcon, primeSedanIcon, primePlayIcon, suvIcon, luxIcon, eRickshawIcon, kaaliPeeliIcon],
            fleetVehicleImage: fleetAutoImage,
            fleetVehicleHeading: "Auto",
            fleetVehicleSubHeading: "Get an Auto at your doorstep.",
            fleetVehicleContent: "The all too familiar auto ride, minus the hassle of waiting and hangling for price. A convenient way to travel everyday"
        };
        this.changeSrcAndBackground = this.changeSrcAndBackground.bind(this);
        this.resetArrayValues = this.resetArrayValues.bind(this);
    }
    resetArrayValues() {
        let temp = this.state.vehicleIcons;
        var vehicles = [autoIcon, bikeIcon, shareIcon, microIcon, miniIcon, primeSedanIcon, primePlayIcon, suvIcon, luxIcon, eRickshawIcon, kaaliPeeliIcon];
        for (var i = 0; i < temp.length; i++) {
            temp[i] = vehicles[i];
        }
        this.setState({ vehicleIcons: temp });
        temp = this.state.fleetVehicleOnHoverStyle;
        var names = ["fleet-vehicle", "fleet-vehicle", "fleet-vehicle", "fleet-vehicle", "fleet-vehicle", "fleet-vehicle", "fleet-vehicle", "fleet-vehicle"];
        for (var i = 0; i < temp.length; i++) {
            temp[i] = names[i];
        }
        this.setState({ fleetVehicleOnHoverStyle: temp });
    }
    changeSrcAndBackground(e, srcImage, index) {
        console.log(index);
        this.resetArrayValues();
        let tempArray = this.state.vehicleIcons;
        tempArray[index] = srcImage;
        this.setState({ vehicleIcons: tempArray });
        tempArray = this.state.fleetVehicleOnHoverStyle;
        tempArray[index] = "fleet-vehicle-onhover";
        this.setState({ fleetVehicleOnHoverStyle: tempArray });
        switch (index) {
            case 0: this.setState({
                fleetVehicleImage: fleetAutoImage,
                fleetVehicleHeading: "Auto",
                fleetVehicleSubHeading: "Get an Auto at your doorstep.",
                fleetVehicleContent: "The all too familiar auto ride, minus the hassle of waiting and hangling for price. A convenient way to travel everyday"
                });
                break;
            case 1: this.setState({
                fleetVehicleImage: fleetBikeImage,
                fleetVehicleHeading: "Bike",
                fleetVehicleSubHeading: "On time, every time.",
                fleetVehicleContent: "Hate waiting In the snarling traffic each day? Not anymore as with Ola Bike you can now reduce your travel time by at least 50%. Simply book a bike with a tap of a button and ride away within minutes and all this at the most affordable rates in town! "
                });
                break;
            case 2: this.setState({
                fleetVehicleImage: fleetShareImage,
                fleetVehicleHeading: "Share",
                fleetVehicleSubHeading: "Eco-friendly rights at pocket-friendly rates.",
                fleetVehicleContent: "Fully air conditioned cars that you can share with others depending on your route and location. "
                });
                break;
            case 3: this.setState({
                fleetVehicleImage: fleetMicroImage,
                fleetVehicleHeading: "Micro",
                fleetVehicleSubHeading: "Small fares for short rides.",
                fleetVehicleContent: "Compact yet comfortable AC cars that seat up to 3 people and give you great value for your money. Small fares for short rides. "
                });
                break;
            case 4: this.setState({
                fleetVehicleImage: fleetMiniImage,
                fleetVehicleHeading: "Mini",
                fleetVehicleSubHeading: "Everyday dependable rides.",
                fleetVehicleContent: "A regular comfortable AC hatchback that becomes your everyday dependable ride. An economical option for daily commute. "
                });
                break;
            case 5: this.setState({
                fleetVehicleImage: fleetSedanImage,
                fleetVehicleHeading: "Prime Sedan",
                fleetVehicleSubHeading: "Sedans with free Wi-Fi and top drivers.",
                fleetVehicleContent: "Top rated drivers, and a hand-picked fleet of the best cars with extra legroom and boot space."
                });
                break;
            case 6: this.setState({
                fleetVehicleImage: fleetPrimePlayImage,
                fleetVehicleHeading: "Prime Play",
                fleetVehicleSubHeading: "Enjoy music, radio, videos on the go.",
                fleetVehicleContent: "Cars with in-cab entertainment consoles that allow you to watch movies, listen to music and stay connected while on the move."
                });
                break;
            case 7: this.setState({
                fleetVehicleImage: fleetPrimeSuvImage,
                fleetVehicleHeading: "Prime SUV",
                fleetVehicleSubHeading: "SUVs with free Wi-Fi and top drivers.",
                fleetVehicleContent: "A perfect choice of car for your weekend getaways, with plenty of room for everyone including that extra bag."
                });
                break;
            default: this.setState({
                fleetVehicleImage: fleetLuxImage,
                fleetVehicleHeading: "LUX",
                fleetVehicleSubHeading: "The new luxury ride in town.",
                fleetVehicleContent: "Top-of-the-line luxury cars like Mercedes, BMW, and Audis powered by auto-connect Wi-Fi, at unbeatable fares & attractive hourly rental packages."
                });
                break;
        }
    }
    render() {
        return (
            <section>
                <div className="ola-fleet">
                    <h2>Meet our Awesome Fleet</h2>
                    <div>The widest variety of cars to choose from</div>
                </div>
                <div className="fleet-options">
                    <div className={this.state.fleetVehicleOnHoverStyle[0]}>
                        <img src={this.state.vehicleIcons[0]} className="fleet-vehicle-image"
                            onMouseOver={e => (e.currentTarget.src = autoIconActive)}
                            onMouseOut={e => {
                                e.currentTarget.src = this.state.vehicleIcons[0];
                            }
                            }
                            onClick={(event) => this.changeSrcAndBackground(event, autoIconActive, 0)} />
                        <div className="fleet-label">Auto</div>
                    </div>

                    <div className={this.state.fleetVehicleOnHoverStyle[1]}>
                        <img src={this.state.vehicleIcons[1]} className="fleet-vehicle-image"
                            onMouseOver={e => (e.currentTarget.src = bikeIconActive)}
                            onMouseOut={e => {
                                e.currentTarget.src = this.state.vehicleIcons[1];
                            }
                            }
                            onClick={(event) => this.changeSrcAndBackground(event, bikeIconActive, 1)} />
                        <div className="fleet-label">Bike</div>
                    </div>
                    <div className={this.state.fleetVehicleOnHoverStyle[2]}>
                        <img src={this.state.vehicleIcons[2]} className="fleet-vehicle-image"
                            onMouseOver={e => (e.currentTarget.src = shareIconActive)}
                            onMouseOut={e => {
                                e.currentTarget.src = this.state.vehicleIcons[2];
                            }
                            }
                            onClick={(event) => this.changeSrcAndBackground(event, shareIconActive, 2)} />
                        <div className="fleet-label">Share</div>
                    </div>
                    <div className={this.state.fleetVehicleOnHoverStyle[3]}>
                        <img src={this.state.vehicleIcons[3]} className="fleet-vehicle-image"
                            onMouseOver={e => (e.currentTarget.src = microIconActive)}
                            onMouseOut={e => {
                                e.currentTarget.src = this.state.vehicleIcons[3];
                            }
                            }
                            onClick={(event) => this.changeSrcAndBackground(event, microIconActive, 3)} />
                        <div className="fleet-label">Micro</div>
                    </div>
                    <div className={this.state.fleetVehicleOnHoverStyle[4]}>
                        <img src={this.state.vehicleIcons[4]} className="fleet-vehicle-image"
                            onMouseOver={e => (e.currentTarget.src = miniIconActive)}
                            onMouseOut={e => {
                                e.currentTarget.src = this.state.vehicleIcons[4];
                            }
                            }
                            onClick={(event) => this.changeSrcAndBackground(event, miniIconActive, 4)} />
                        <div className="fleet-label">Mini</div>
                    </div>
                    <div className={this.state.fleetVehicleOnHoverStyle[5]}>
                        <img src={this.state.vehicleIcons[5]} className="fleet-vehicle-image"
                            onMouseOver={e => (e.currentTarget.src = primeSedanIconActive)}
                            onMouseOut={e => {
                                e.currentTarget.src = this.state.vehicleIcons[5];
                            }
                            }
                            onClick={(event) => this.changeSrcAndBackground(event, primeSedanIconActive, 5)} />
                        <div className="fleet-label">Prime Sedan</div>
                    </div>
                    <div className={this.state.fleetVehicleOnHoverStyle[6]}>
                        <img src={this.state.vehicleIcons[6]} className="fleet-vehicle-image"
                            onMouseOver={e => (e.currentTarget.src = primePlayIconActive)}
                            onMouseOut={e => {
                                e.currentTarget.src = this.state.vehicleIcons[6];
                            }
                            }
                            onClick={(event) => this.changeSrcAndBackground(event, primePlayIconActive, 6)} />
                        <div className="fleet-label">Prime Play</div>
                    </div>
                    <div className={this.state.fleetVehicleOnHoverStyle[7]}>
                        <img src={this.state.vehicleIcons[7]} className="fleet-vehicle-image"
                            onMouseOver={e => (e.currentTarget.src = suvIconActive)}
                            onMouseOut={e => {
                                e.currentTarget.src = this.state.vehicleIcons[7];
                            }
                            }
                            onClick={(event) => this.changeSrcAndBackground(event, suvIconActive, 7)} />
                        <div className="fleet-label">Prime SUV</div>
                    </div>
                    <div className="fleet-vehicle gone">
                        <img src={luxIcon} className="fleet-vehicle-image"
                            onMouseOver={e => (e.currentTarget.src = luxIconActive)}
                            onMouseOut={e => (e.currentTarget.src = luxIcon)} />
                        <div className="fleet-label">LUX</div>
                    </div>
                    <div className="fleet-vehicle gone">
                        <img src={eRickshawIcon} className="fleet-vehicle-image"
                            onMouseOver={e => (e.currentTarget.src = eRickshawIconActive)}
                            onMouseOut={e => (e.currentTarget.src = eRickshawIcon)} />
                        <div className="fleet-label">E-Rick</div>
                    </div>
                    <div className="fleet-vehicle gone">
                        <img src={kaaliPeeliIcon} className="fleet-vehicle-image"
                            onMouseOver={e => (e.currentTarget.src = kaaliPeeliIconActive)}
                            onMouseOut={e => (e.currentTarget.src = kaaliPeeliIcon)} />
                        <div className="fleet-label">Kaali Pelli</div>
                    </div>
                </div>
                <div className="fleet-option-display">
                    <div className="fleet-option-display-image">
                        <img src={this.state.fleetVehicleImage} className="fleet-option-image" />
                    </div>
                    <div className="fleet-option-display-info">
                        <h4>{this.state.fleetVehicleHeading}</h4>
                        <p className="fleet-option-display-info-subheading">{this.state.fleetVehicleSubHeading}</p>
                        <p className="fleet-option-display-info-content">{this.state.fleetVehicleContent}</p>
                        <img src={fleetAdvantages}></img>
                    </div>
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