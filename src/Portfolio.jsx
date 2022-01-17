import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Header from './Components/Header/Header';
import  Projects from './Components/Projects/Projects';
import { BrowserRouter as Router ,Routes,Route } from 'react-router-dom';
import Skills from './Components/Skills/Skills';
import About from './Components/About/About';
import Contact from './Contact/Contact';
const Portfolio = () => {
    return (
        <>
         
            <Router>
            <Navbar/>
         
                <Routes>
               
               
                    <Route path="/"  exact element={<Header/>}/>
                    <Route path="/projects"  exact  element={<Projects/>}/>
                    <Route path="/skills"  exact  element={<Skills/>}/>
                    <Route path="/about"  exact  element={<About/>}/>
                    <Route path="/contact"  exact element={<Contact/>}/>
                    
                </Routes>
                
            </Router>

            
        </>
    )
}

export default Portfolio
