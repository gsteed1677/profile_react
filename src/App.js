import React from "react";
import Navbar from "./components/navBar";
import Header from "./components/header"
import Footer from './components/footer'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/home";
import Contact from "./components/contact";
import Portfolio from "./components/portfolio";
import 'bootstrap/dist/css/bootstrap.min.css';
import Resume from "./assets/Garrett Steed Resume 2020.pdf";

function App() { 
  return (
    <Router>
      <div>
        <Header />
        <Navbar></Navbar>
        <Route exact path="/" component={Home} />
        <Route exact path="/Contact" component={Contact} />
        <Route exact path="/Portfolio" component={Portfolio} />
        <Route exact path="/Resume" component={Resume} />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
