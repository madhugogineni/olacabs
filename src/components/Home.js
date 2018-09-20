import React from 'react';
import '../css/Home.css';
import Header from './Header';
import BookingSection from './Bookingsection';
import CarTypeSection from './CarTypeSection';

class Home extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Header />
                <BookingSection />
                <CarTypeSection />
            </React.Fragment>
        )
    }
}
export default Home;