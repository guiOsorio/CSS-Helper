import React, { Component } from 'react';
import Navbar from '../Navbar/Navbar.jsx';
import Footer from '../Footer/Footer.jsx';
import Home from '../Home/Home.jsx';
import Option1 from '../Options/Option1/Option1';
import Option2 from '../Options/Option2/Option2';
import PreviewFull from '../Options/Preview/PreviewFull';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import { FaList } from 'react-icons/fa';

/* main goal is to be a tool to help with positioning, sizing, and responsiveness of websites */
/* who should I target? beginners OR developers who have CSS as their bottleneck and want to speed it up */
/* partnership with a service like Marvel? */
/* think about other business implications */
/* use Marvel for preview of website */
/* fullScreen preview (navbar links don't work on fullScreen because of something overfilling the screen */
/* component for prevTitle */
/* connect to express + set up different routes */
/* state bgColor needs to be the value of the select list option in the Form component */
/* OPTION 2 page */
/* contact / feedback page */
/* developer page */
/* markdown can be useful in some cases (for example to write text in a page or to create a live preview for option 2) */

class App extends Component {
  state = {

  }
  render() {
    const normalRoutes = () => {
      return (
        <div>
          <Navbar icon={ <FaList /> } />
          <Router>
            <Switch>  
              <Route exact path="/CSS-Helper/">
                <Home />
              </Route>
              <Route exact path="/CSS-Helper/demo">
                <Option1 />
              </Route>
              <Route exact path="/CSS-Helper/secret">
                <Option2 />
              </Route>
            </Switch>  
          </Router>
          <Footer />
        </div>
      )}
    return (
      <div className="app">
        <Router>
          <Switch>
            <Route exact path="/CSS-Helper/preview">
              <PreviewFull />
            </Route>
            <Route path="/CSS-Helper/" component={normalRoutes} />
          </Switch>
        </Router>
      </div>
    );
  }
}
 
export default App;


/* render() { 
    return (
      <div className="app">
        <Navbar icon={ <FaList /> } />
        <Router>
          <Switch>  
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/option1">
              <Option1 />
            </Route>
            <Route exact path="/option2">
              <Option2 />
            </Route>
          </Switch>  
        </Router>
        <Footer />
      </div>
    );
  } */
