import React, {BrowserRouter as Router, Link, Switch, Route} from 'react-router-dom';
import './App.css';
import Navbar from './Components/navbar/Navbar';
import Heading from './Components/heading/Heading';
import About from './Components/about/About';
import Projects from './Components/projects/Projects';
import Resume from './Components/resume/Resume';
import Contact from './Components/contact/Contact';

function App() {


  return (
    <div className="App">
      <Navbar/>
      <Heading/>
      <About/>
      <Projects/>
      <Resume/>
      <Contact/>
    </div>
  );
}

export default App;
