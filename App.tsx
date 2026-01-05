import React, { useEffect } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Catalog from './pages/Catalog';
import Pricing from './pages/Pricing';
import Checkout from './pages/Checkout';
import Schedule from './pages/Schedule';

// Scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen bg-slate-950 text-white font-sans antialiased selection:bg-brand-500 selection:text-white">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sports" element={<Catalog />} />
            <Route path="/schedule" element={<Schedule />} />
            <Route path="/ppv" element={<Schedule />} /> {/* Redirect/Alias for compatibility */}
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/support" element={
              <div className="pt-32 pb-20 text-center container mx-auto">
                <h1 className="text-3xl font-bold">Support Center</h1>
                <p className="text-slate-400 mt-4">Coming soon...</p>
              </div>
            } />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;