import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import {HashRouter, Route} from 'react-router-dom';
import Home from './components/Home/Home';
import Gigs from './components/Gigs/Gigs';
import Listen from './components/Listen/Listen';
import Footer from './components/Footer/Footer';
import Infos from './components/Infos/Infos';
import Gallery from './components/Gallery/Gallery';


const App: React.FC = () => {
  return (
    <div className="app-container">
      <Header/>
      <Navbar/>

      <HashRouter>
        <Route path="/" exact component={Home}/>
        <Route path="/listen" component={Listen}/>
        <Route path="/gigs" component={Gigs}/>
        <Route path="/gallery" component={Gallery}/>
        <Route path="/infos" component={Infos}/>
      </HashRouter>

      <Footer/>
    </div>
  );
};

export default App;
