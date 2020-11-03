import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Portfolio from "./pages/Portfolio";
import {BrowserRouter, Route} from "react-router-dom";



function App() {
  
  
  
  return (
    <BrowserRouter>
    
    <Navbar />
    <Route exact path={"/"} component={About}/>
    <Route exact path={"/portfolio"} component={Portfolio}/>
    <Route exact path={"/contact"} component={Contact}/>

    
    <Footer />
    </BrowserRouter>
  );
}

export default App;