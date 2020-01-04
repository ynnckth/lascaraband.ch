import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import {HashRouter, Route, Switch} from 'react-router-dom';
import Home from './components/Home/Home';
import Gigs from './components/Gigs/Gigs';
import Listen from './components/Listen/Listen';
import Footer from './components/Footer/Footer';
import About from './components/About/About';
import Gallery from './components/Gallery/Gallery';
import Booking from './components/Booking/Booking';


const App: React.FC = () => {
  return (
    <div className="app-container">
      <Header/>
      <Navbar/>

      <div className="content">
        <HashRouter>
          <Switch>
            <Route path="/listen">
              <Listen/>
            </Route>

            <Route path="/gigs">
              <Gigs showPastGigs={true}/>
            </Route>

            <Route path="/gallery">
              <Gallery/>
            </Route>

            <Route path="/about">
              <About/>
            </Route>

            <Route path="/booking">
              <Booking/>
            </Route>

            <Route path="/">
              <Home/>
            </Route>
          </Switch>
        </HashRouter>
      </div>

      <Footer/>
    </div>
  );
};

export default App;
