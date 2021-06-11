import React from 'react';
import './App.css';
import Navbar from './Components/navbar/Navbar';
import Heading from './Components/heading/Heading';
import About from './Components/about/About';
import Projects from './Components/projects/Projects';
import Resume from './Components/resume/Resume';
// import Contact from './Components/contact/Contact';
import Footer from './Components/footer/Footer';

function App() {


  return (
    <div className="App">
      <Navbar />
      <Heading />
      <About />
      <Projects />
      <Resume />
      {/* <Contact/> */}
      <Footer />
    </div>
  );
}

export default App;
