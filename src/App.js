import React from "react";

import Footer from "./components/Footer";
import Home from "./pages/Home";
import {BrowserRouter, Route} from "react-router-dom";



function App() {
  
  
  return (
    <BrowserRouter>
 
    <Home />
    <Footer />
    </BrowserRouter>
  );
}

export default App;