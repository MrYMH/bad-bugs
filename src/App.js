import React , {Component} from "react";

// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";

import './style.css';
import './App.css';

// import { BrowserRouter, Routes, Route } from "react-router-dom";
import {Route , Routes} from 'react-router-dom';

import MainPage from "./routres/MainPage";
import Categories from "./routres/Categories";

class App extends Component {
  state = {  } 
  render() { 
    return (

      <React.Fragment>

            <Routes>
              <Route path='/bad-bugs/categories' element={<Categories />}/>
              <Route path='/bad-bugs' element={<MainPage />}/>
              
            </Routes>
        </React.Fragment>
    );
  }
}
 
export default App;
