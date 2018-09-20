import React from 'react';
import '../css/Home.css';
import Header from './Header';
import BookingSection from './Bookingsection';

class Home extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Header />
                <BookingSection />
            </React.Fragment>
        )
    }
}
export default Home;