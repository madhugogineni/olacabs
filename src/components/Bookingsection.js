import React from 'react';
import '../css/Bookingsection.css';
class BookingSection extends React.Component {
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
                        <hr />
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
                        ejngvdafoskjvbef
                </div>
                </div>
            </section>
        )
    }
}
export default BookingSection;