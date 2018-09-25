import React from 'react';
import '../css/WhyRideSection.css';
import whyrideimage1 from '../whyride-image1.jpg'
import whyrideimage2 from '../whyride-image2.jpg'
import whyrideimage3 from '../whyride-image3.jpg'
import whyrideimage4 from '../whyride-image4.jpg'
import whyrideimage5 from '../whyride-image5.jpg'
import whyrideimage6 from '../whyride-image6.jpg'
class WhyRideSection extends React.Component {
    render() {
        return (
            <section>
                <div className="whyridemain-div">
                    <div className="maindiv-heading1">Why ride with Ola?</div>
                    <div className="maindiv-heading2">The best way to travel to your destination</div>
                    <div className="maindiv-body">
                        <div className="maindiv-body-panel">
                            <div className="maindiv-body-panel-image">
                                <img src={whyrideimage1} />
                            </div>
                            <div className="maindiv-body-panel-info">
                                <h4>Cabs for Every Pocket</h4>
                                <p>From Sedans and SUVs to Luxury cars for special occasions, we have cabs to suit every pocket</p>
                            </div>
                        </div>
                        <div className="maindiv-body-panel">
                            <div className="maindiv-body-panel-image">
                                <img src={whyrideimage2} />
                            </div>
                            <div className="maindiv-body-panel-info">
                                <h4>Secure and Safer Rides</h4>
                                <p>Verified drivers, an emergency alert button, and live ride tracking are some of the features that we have in place to ensure you a safe travel experience.</p>
                            </div>
                        </div>
                        <div className="maindiv-body-panel">
                            <div className="maindiv-body-panel-image">
                                <img src={whyrideimage3} />
                            </div>
                            <div className="maindiv-body-panel-info">
                                <h4>Ola Select</h4>
                                <p>A membership program with Ola that lets you ride a Prime Sedan at Mini fares, book cabs without peak pricing and has zero wait time</p>
                            </div>
                        </div>
                        <div className="maindiv-body-panel">
                            <div className="maindiv-body-panel-image">
                                <img src={whyrideimage4} />
                            </div>
                            <div className="maindiv-body-panel-info">
                                <h4>In Cab Entertainment</h4>
                                <p>Play music, watch videos and a lot more with Ola Play! Also stay connected even if you are travelling through poor network areas with our free wifi facility.</p>
                            </div>
                        </div>
                        <div className="maindiv-body-panel">
                            <div className="maindiv-body-panel-image">
                                <img src={whyrideimage5} />
                            </div>
                            <div className="maindiv-body-panel-info">
                                <h4>Share and Express</h4>
                                <p>To travel with the lowest fares choose Ola Share. For a faster travel experience we have Share Express on some fixed routes with zero deviations. Choose your ride and zoom away!</p>
                            </div>
                        </div>
                        <div className="maindiv-body-panel">
                            <div className="maindiv-body-panel-image">
                                <img src={whyrideimage6} />
                            </div>
                            <div className="maindiv-body-panel-info">
                                <h4>Cashless Rides</h4>
                                <p>Now go cashless and travel easy. Simply recharge your Ola money or add your credit/debit card to enjoy hassle free payments.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}
export default WhyRideSection;