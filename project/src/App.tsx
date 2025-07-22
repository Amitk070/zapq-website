import React from 'react';
import Hero from './components/Hero';
import Features from './components/Features';
import TerminalShowcase from './components/TerminalShowcase';
import DemoScreenshots from './components/DemoScreenshots';
import UpcomingFeatures from './components/UpcomingFeatures';
import About from './components/About';
import Footer from './components/Footer';
import ThemeProvider from './components/ThemeProvider';

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
        <Hero />
        <Features />
        <TerminalShowcase />
        <DemoScreenshots />
        <UpcomingFeatures />
        <About />
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;