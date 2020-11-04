import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import {BrowserRouter, Route} from "react-router-dom";



function App() {
  
  
  
  return (
    <BrowserRouter>
    <Navbar />
    <Route exact path={"/"} component={Home}/>
    <Footer />
    </BrowserRouter>
  );
}

export default App;