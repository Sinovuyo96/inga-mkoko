import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from "./components/Nav";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Footer from "./components/Footer"
function App() {
  return (
    <div className="App">
      <Router>
        <Nav />
         <Switch>
          <Route path="/" exact component={() => <Home />} />
          <Route path="/services" exact component={() => <Services />} />
          <Route path="/contact" exact component={() => <Contact />} />
          <Route path ="/footer" exact component ={Footer}/>
        </Switch> 
        <Footer/>
      </Router>
    </div>
  );
}

export default App;