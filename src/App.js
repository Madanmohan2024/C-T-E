import React, { useEffect } from 'react';
import GlobalStyle from './globalStyles';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/HomePage/Home';
import Course from './pages/Course';
import About from './pages/About';
import Login from './pages/Login';
import "./pages/Feedback.css";
import { Feedback } from './pages/Feedback';
import {Navbar, Footer} from "./Components";
import {auth} from "./firebase";
 
function App() {

    useEffect(()=>{

        auth.onAuthStateChanged(authUser =>{
            console.log('the user is >>>',authUser);

        if(authUser){

        }else{

        }
        })

    },[])

  return (
    <Router>
        <GlobalStyle />
        
        
        <Navbar />
            
        <Routes>

            <Route path="/sign-Up" exact element={<Login />} />
            <Route path="/home" exact element={<Home />} />
            <Route path="/" exact element={<Home />} />
            <Route path="/course" exact element={<Course />} />
            <Route path="/about" exact element={<About />} />
            <Route path="/feedback" exact element={<Feedback />} />     
        </Routes>
        <Footer /> 
    </Router>
  )
}

export default App




