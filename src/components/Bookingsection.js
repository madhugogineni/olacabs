import React from 'react';
import '../css/Bookingsection.css';
import previousButtonImage from '../previous_button_image.png';
import nextButtonImage from '../next_button_image.png';
import dataShifterImage1 from '../data_shifter_image1.jpeg';
import dataShifterImage2 from '../data_shifter_image2.svg';
import dataShifterImage3 from '../data_shifter_image3.jpeg';
import dataShifterImage4 from '../data_shifter_image4.jpeg';
class BookingSection extends React.Component {
    constructor(props) {
        super(props);
        this.state = { dataItemClasses: ["data-item", "data-item", "data-item", "data-item-invisible"] };
        this.handleLeftClick = this.handleLeftClick.bind(this);
        this.handleRightClick = this.handleRightClick.bind(this);
    }
    handleRightClick() {
        var dataItems = this.state.dataItemClasses;
        var data = dataItems.pop();
        dataItems.unshift(data);

        console.log("final data items are");
        console.log(dataItems);
        this.setState({ dataItemClasses: dataItems });
        console.log(this.state.dataItemClasses);
    }
    handleLeftClick() {
        var dataItems = this.state.dataItemClasses;
        var data = dataItems.shift();
        dataItems.push(data);

        console.log("final data items are");
        console.log(dataItems);
        this.setState({ dataItemClasses: dataItems });
        console.log(this.state.dataItemClasses);

    }
    render() {
        return (
            <section>
                <div className="bookingsection">
                    <h1 className="bookingsection-heading1">Book a City Taxi to your destination in town</h1>
                    <h1 className="bookingsection-heading2">Choose from a range of categories and prices</h1>
                    <div className="rental-form">
                        <div className="options">
                            <div className="links"><a>CITY TAXI</a></div>
                            <div className="links"><a>OUTSTATION</a></div>
                            <div className="links"><a>RENTALS</a></div>
                        </div>
                        <div className="option-result">
                            <div className="option-result-heading1">Your everyday travel partner</div>
                            <div className="option-result-heading2">AC Cabs for point to point travel</div>
                            <div className="inputfields">
                                <div className="inputfield-labels">PICKUP</div>
                                <div className="inputfield-body">Current Location</div>
                            </div>
                            <div className="inputfields">
                                <div className="inputfield-labels">DROP</div>
                                <div className="inputfield-body">Enter drop for Ride Estimate</div>
                            </div>
                            <div className="inputfields">
                                <div className="inputfield-labels">WHEN</div>
                                <select className="inputfield-body-select">
                                    <option>Now</option>
                                    <option>Sechedule for Later</option>
                                </select>
                            </div>
                            <div className="inputfield-button">
                                Search Cabs
                            </div>
                        </div>
                    </div>
                </div>
                <div className="data-shifter">
                    <div className="data-shifter-body">
                        <div className="left-click-button">
                            <img src={previousButtonImage} onClick={this.handleLeftClick} />
                        </div>
                        <div className="data">
                            <div className={this.state.dataItemClasses[0]} id="data-item0">
                                <div className="data-shifter-image">
                                    <img src={dataShifterImage2} />
                                </div>
                                <div className="data-shifter-content">
                                    <h5>Be entertained with Ola Play</h5>
                                    <div>Discover movies and music with your daily ride</div>
                                </div>
                            </div>
                            <div className={this.state.dataItemClasses[1]} id="data-item1">
                                <div className="data-shifter-image">
                                    <img src={dataShifterImage2} />
                                </div>
                                <div className="data-shifter-content">
                                    <h5>Get yourself a Share pass</h5>
                                    <div>Enjoy the cheapest rides on the go</div>
                                </div>
                            </div>
                            <div className={this.state.dataItemClasses[2]} id="data-item2">
                                <div className="data-shifter-image">
                                    <img src={dataShifterImage2} />
                                </div>
                                <div className="data-shifter-content">
                                    <h5>Upgrade to Ola Select</h5>
                                    <div>Explore the benefits of Ola Select</div>
                                </div>
                            </div>
                            <div className={this.state.dataItemClasses[3]} id="data-item3">
                                <div className="data-shifter-image">
                                    <img src={dataShifterImage2} />
                                </div>
                                <div className="data-shifter-content">
                                    <h5>Signup for Ola Corporate</h5>
                                    <div>Employee travel management made easy</div>
                                </div>
                            </div>

                        </div>
                        <div className="right-click-button">
                            <img src={nextButtonImage} onClick={this.handleRightClick} />
                        </div>
                    </div>
                </div>
            </section >
        )
    }
}
export default BookingSection;