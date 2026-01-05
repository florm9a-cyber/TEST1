import React, { useState } from 'react';
import { Check, Star, Zap, Shield, Tv } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Pricing: React.FC = () => {
  // State for toggling price view: false = Monthly breakdown, true = Annual Total
  const [showAnnualPrice, setShowAnnualPrice] = useState(false);

  const features = [
    'Access to all 85+ Premium Sports Channels',
    'Includes NBA, NFL, NHL, MLB, UFC & Soccer',
    'All PPV Events Included (UFC, Boxing, WWE)',
    '4K Ultra HD & FHD Quality',
    'Anti-Freeze Technology (99.9% Uptime)',
    '4 Simultaneous Connections',
    'Catch-up & DVR Functionality',
    'Priority 24/7 VIP Support',
    'Compatible with All Devices',
    'No Contract, Cancel Anytime'
  ];

  return (
    <div className="pt-32 pb-20 min-h-screen bg-slate-950">
      <div className="container mx-auto px-4">
        
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-brand-500 font-bold tracking-wider text-sm uppercase mb-2 block">Premium Access</span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6">One Plan. Unlimited Sports.</h1>
          <p className="text-slate-400 text-lg">
            Stop paying for multiple subscriptions. Get everything you need in one secure, high-quality package.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="relative bg-gradient-to-b from-slate-900 to-slate-900/50 rounded-3xl border border-brand-500/50 p-1 shadow-2xl shadow-brand-900/40 overflow-hidden"
          >
            {/* Top Banner */}
            <div className="absolute top-0 inset-x-0 h-2 bg-gradient-to-r from-brand-600 via-red-500 to-brand-600"></div>
            
            <div className="grid md:grid-cols-2 gap-8 p-8 md:p-12">
              
              {/* Left Side: Pitch */}
              <div className="flex flex-col justify-center">
                <div className="flex items-center gap-2 mb-4">
                  <div className="bg-brand-500/20 p-2 rounded-lg text-brand-500">
                    <Star className="w-6 h-6 fill-current" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Annual Elite Pass</h3>
                </div>
                
                {/* Toggle Switch */}
                <div className="flex items-center gap-2 mb-6 bg-slate-800/50 p-1 pr-4 rounded-full w-fit border border-slate-700/50">
                    <button 
                        onClick={() => setShowAnnualPrice(false)}
                        className={`px-4 py-1.5 rounded-full text-sm font-bold transition-all ${!showAnnualPrice ? 'bg-brand-600 text-white shadow-lg' : 'text-slate-400 hover:text-white'}`}
                    >
                        Monthly
                    </button>
                    <button 
                        onClick={() => setShowAnnualPrice(true)}
                        className={`px-4 py-1.5 rounded-full text-sm font-bold transition-all ${showAnnualPrice ? 'bg-brand-600 text-white shadow-lg' : 'text-slate-400 hover:text-white'}`}
                    >
                        Yearly
                    </button>
                </div>

                <div className="mb-6">
                  <p className="text-slate-400 mb-2 text-sm uppercase tracking-wider font-semibold">
                    {showAnnualPrice ? 'Total Annual Price' : 'Equivalent Monthly Price'}
                  </p>
                  <motion.div 
                    key={showAnnualPrice ? 'annual' : 'monthly'}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-baseline gap-2"
                  >
                    <span className="text-6xl font-extrabold text-white">
                        {showAnnualPrice ? '$150' : '$12.50'}
                    </span>
                    <span className="text-xl text-slate-500 font-medium">
                        {showAnnualPrice ? '/ year' : '/ month'}
                    </span>
                  </motion.div>
                  
                  {!showAnnualPrice && (
                      <p className="text-slate-400 text-sm mt-2 italic">
                          * Billed as one payment of $150
                      </p>
                  )}

                  <p className="text-emerald-400 text-sm mt-3 font-medium bg-emerald-400/10 inline-block px-3 py-1 rounded-full border border-emerald-400/20">
                    Save 65% compared to monthly subs
                  </p>
                </div>

                <Link 
                  to="/checkout"
                  className="w-full block text-center bg-brand-600 hover:bg-brand-500 text-white text-lg font-bold py-4 rounded-xl shadow-lg shadow-brand-600/20 transition-all transform hover:scale-[1.02] mb-4"
                >
                  Get Instant Access
                </Link>
                
                <p className="text-center text-slate-500 text-xs flex items-center justify-center gap-1">
                  <Shield className="w-3 h-3" /> 30-Day Money-Back Guarantee
                </p>
              </div>

              {/* Right Side: Features */}
              <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50">
                <h4 className="text-white font-semibold mb-6 flex items-center gap-2">
                  <Tv className="w-5 h-5 text-slate-400" />
                  What's included:
                </h4>
                <ul className="space-y-4">
                  {features.map((feat, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="bg-brand-500/20 rounded-full p-1 mt-0.5">
                        <Check className="w-3 h-3 text-brand-500" />
                      </div>
                      <span className="text-slate-300 text-sm leading-relaxed">{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

            </div>
          </motion.div>
        </div>

        {/* Trust Badges */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
          <div className="flex items-center justify-center gap-2">
             <Shield className="w-8 h-8 text-white" />
             <span className="text-white font-bold">Secure SSL</span>
          </div>
          <div className="flex items-center justify-center gap-2">
             <Zap className="w-8 h-8 text-white" />
             <span className="text-white font-bold">Instant Activation</span>
          </div>
          <div className="flex items-center justify-center gap-2">
             <Tv className="w-8 h-8 text-white" />
             <span className="text-white font-bold">Any Device</span>
          </div>
          <div className="flex items-center justify-center gap-2">
             <Star className="w-8 h-8 text-white" />
             <span className="text-white font-bold">Top Rated</span>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Pricing;