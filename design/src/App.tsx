import React from 'react';
import './App.css';
import Header from './Header';
import About from './About';
import Portfolio from './Portfolio';
import Contact from './Contact';
import Footer from './Footer';
import Timeline from './Timeline';


const App: React.FC = () => {
  return (
      <div className="App">
        <Header />
        <main>
          <About />
          <Timeline />
          <Portfolio />
          <Contact />
        </main>
        <Footer />
      </div>
  );
};

export default App;
