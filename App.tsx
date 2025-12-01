import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import AiDemo from './components/AiDemo';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-black text-white selection:bg-orange-500 selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <AiDemo />
      </main>
      <Footer />
    </div>
  );
};

export default App;