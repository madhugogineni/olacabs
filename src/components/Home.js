import React from 'react';
import '../css/Home.css';
import Header from './Header';
import BookingSection from './Bookingsection';
import CarTypeSection from './CarTypeSection';
import WhyRideSection from './WhyRideSection';
import TravelOptionsSection from './TravelOptionsSection';
class Home extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Header />
                <BookingSection />
                <CarTypeSection />
                <WhyRideSection />
                <TravelOptionsSection />
                <hr />
            </React.Fragment>
        )
    }
}
export default Home;