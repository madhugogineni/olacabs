import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import Share from './components/Share';
import BookCab from './components/BookCab';
class App extends React.Component {
  render() {
    return (
      <Router>
        <React.Fragment>
          <Route exact path="/" component={Home} />
          <Route path="/bookcab" component={BookCab} />
        </React.Fragment>
      </Router>
    )
  }
}
export default App;
