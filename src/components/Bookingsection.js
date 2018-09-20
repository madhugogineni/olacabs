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
                        
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}
export default BookingSection;