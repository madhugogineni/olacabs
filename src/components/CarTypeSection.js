import React from 'react';
import '../css/CarTypeSection.css';
import bookingtypeimage1 from '../bookingtype-image1.jpg';
import bookingtypeimage2 from '../bookingtype-image2.jpg';
import bookingtypeimage3 from '../bookingtype-image3.jpg';
import image1 from '../image1.png';
import image2 from '../image2.png';
import image3 from '../image3.png';
class CarTypeSection extends React.Component {
    render() {
        return (
            <section>
                <div className="cartypemain-div">
                    <div className="main-div-heading1">A car for every occasion</div>
                    <div className="main-div-heading2">Ola offers city taxis, inter-city cabs, and local cabs at hourly packages</div>
                    <div className="main-div-body">
                        <div className="columns">
                            <a className="column-as-link">
                                <div className="column-image-div1">
                                    <img src={bookingtypeimage1} className="column-image" />
                                </div>
                                <div className="column-body">
                                    <h4>CITY TAXI</h4>
                                    <p>The perfect way to get through your everyday travel needs. City taxis are available 24/7 and can book and travel in an instant. With rides starting as low as Rs.6/km, you can choose from a wide range of options! You can also opt to do your bit for with the Ola Share! </p>
                                    <img src={image1} />
                                </div>
                            </a>
                        </div>
                        <div className="columns">
                            <a className="column-as-link">
                                <div className="column-image-div2">
                                    <img src={bookingtypeimage2} className="column-image" />
                                </div>
                                <div className="column-body">
                                    <h4>OUTSTATION</h4>
                                    <p>The perfect way to get through your everyday travel needs. City taxis are available 24/7 and can book and travel in an instant. With rides starting as low as Rs.6/km, you can choose from a wide range of options! You can also opt to do your bit for with the Ola Share! </p>
                                    <img src={image2} />
                                </div>
                            </a>
                        </div>
                        <div className="columns">
                            <a className="column-as-link">
                                <div className="column-image-div3">
                                    <img src={bookingtypeimage3} className="column-image" />
                                </div>
                                <div className="column-body">
                                    <h4>RENTALS</h4>
                                    <p>The perfect way to get through your everyday travel needs. City taxis are available 24/7 and can book and travel in an instant. With rides starting as low as Rs.6/km, you can choose from a wide range of options! You can also opt to do your bit for with the Ola Share! </p>
                                    <img src={image3} />
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}
export default CarTypeSection;