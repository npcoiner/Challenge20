import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes, NavLink } from 'react-router-dom'; // Import Routes
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import project1image from './assets/images/horiseon code refactor.png';
import project2image from './assets/images/Screenshot 2023-05-05 084335.png';
import project3image from './assets/images/You are what you EAT.png';
import project4image from './assets/images/image.png';
import selfie from './assets/images/2.jpg';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import './App.css';

function Home() {
  return (
    <div>
      <h1>Welcome to My Portfolio</h1>
    </div>
  );
}
function Project({name,source,image}){
  return(
    <div class="card w-50">
      <h3>{name}</h3>
      <div class="cardImage">
          <a href={source} ><img src={image} alt = ""  width='300px'/></a>
      </div>
    </div>
  )
}
function Portfolio() {
  return (
    <div>
      <h2>Portfolio</h2>
      <div class=" col-sm-auto d-flex flex-shrink-1 flex-grow-1 justify-content-center">
        <Project 
          name = {"Horiseon Code Refactoring"}
          source = {"https://npcoiner.github.io/Week1ChallengeHoriseonRefactoring/"}
          image = {project1image}
        />
        <Project 
          name = {"You Are What You Eat"}
          source = {"https://patrickwlowe.github.io/Super-Team-Project/"}
          image = {project2image}
        />
        <Project 
          name = {"You Are What You Eat v2"}
          source = {"https://thawing-eyrie-67221-bd008bd79efe.herokuapp.com/"}
          image = {project3image}
        />
      </div>
      <div class=" col-sm-auto d-flex flex-shrink-1 flex-grow-1 justify-content-center">
      <Project 
          name = {"Sudoku Shuffle"}
          source = {"https://mighty-ridge-19238-3e456d2c37f3.herokuapp.com/"}
          image = {project4image}
        />
    </div>
    </div>
  );
}

function Resume() {
  return (
    <div>
      <h2>Resume</h2>
    </div>
  );
}

function About() {
  return (
    <div>
      <h2>Hi, i'm Nick</h2>
        <img class="img-thumbnail img-fluid" alt=""  width="250" src={selfie}/>
      <div class="description">
        
        <div>
            I'm a motivated UC Davis computer science student with 
            experience in customer service and a strong desire to learn. 
            I'm proficient in Python, C++, and C# with coursework in discrete mathematics, 
            physics, and probability & statistical modeling. I enrolled in a full 
            stack development course at UC Davis to further develop front end and back end skills.
            Hopefully you will enjoy my website!
        </div>   
    </div> 
    </div>
  );
}

function Contact() {
  return (
    <div>
      <h2>Contact Me</h2>
    </div>
  );
}
function Header() {
  return(
    <header className="App-header">
        <nav>
            <Navigation />
        </nav>
    </header>
  );
}

function Footer() {
  return(
    <footer>
      <ul>
        <li>
          <a href="https://github.com/npcoiner/"><h3>Github</h3></a>
          <a href="mailto:npcoiner@ucdavis.edu" alt="mail"><h3>Gmail</h3></a>
        </li>
      </ul>
    </footer>
  )
}

function Navigation() {
  return(
  <Navbar expand="sm" >
      <Container>
        <Navbar.Collapse id="navbar">
          <Nav>
          <NavLink to="/react-portfolio/" role="button" className={"nav-link mx-2"}>Home</NavLink>
            <NavLink to="/portfolio" role="button" className={"nav-link mx-2"}>Portfolio</NavLink>
            <NavLink to="/resume" role="button" className={"nav-link mx-2"}>Resume</NavLink>
            <NavLink to="/contact" role="button" className={"nav-link mx-2"}>Contact</NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    )
}


function App() {
  return (
      <div className="App">
        
      <Header />
      <h1>Portfolio| Nicholas Coiner</h1>
      <div className='mainBody'>

        <Routes> 
          <Route path="/react-portfolio/" element={<About />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/resume" element={<Resume />} />
        </Routes>
      </div>
      <Footer />
      </div>
      
  );
}

export default App;
