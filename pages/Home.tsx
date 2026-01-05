import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { CheckCircle, Tv, Wifi, Globe, PlayCircle, Shield } from 'lucide-react';
import { FAMILIES } from '../data/mockData';

const Home: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      
      {/* HERO SECTION */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        {/* Background Gradients */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full z-0 pointer-events-none opacity-20">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-brand-600 rounded-full blur-[128px]"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-600 rounded-full blur-[128px]"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block py-1 px-3 rounded-full bg-slate-800 border border-slate-700 text-brand-400 text-xs font-bold tracking-wider mb-6">
              #1 RATED SPORTS IPTV
            </span>
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-white mb-6">
              All US & CA Sports. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-500 to-orange-500">
                One Subscription.
              </span>
            </h1>
            <p className="mt-4 text-xl text-slate-400 max-w-2xl mx-auto mb-10">
              Access 85+ premium sports channels in HD, FHD & 4K. NFL, NBA, NHL, MLB, UFC, Soccer and more without blackouts.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link to="/pricing" className="bg-brand-600 hover:bg-brand-700 text-white text-lg px-8 py-4 rounded-full font-bold transition-transform hover:scale-105 shadow-xl shadow-brand-600/20">
                Start Free Trial
              </Link>
              <Link to="/sports" className="bg-slate-800 hover:bg-slate-700 text-white border border-slate-700 text-lg px-8 py-4 rounded-full font-bold transition-colors flex items-center justify-center gap-2">
                <Tv className="w-5 h-5" /> View Channels
              </Link>
            </div>

            <div className="mt-12 flex flex-wrap justify-center gap-8 text-slate-500 text-sm font-medium">
               <div className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-brand-500" /> No Buffering</div>
               <div className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-brand-500" /> 4K Ultra HD</div>
               <div className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-brand-500" /> 99.9% Uptime</div>
               <div className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-brand-500" /> Multi-Device</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CATEGORIES PREVIEW */}
      <section className="py-20 bg-slate-900/50 border-y border-slate-800">
        <div className="container mx-auto px-4">
           <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-white mb-4">Unlimited Sports Access</h2>
              <p className="text-slate-400">Browse our comprehensive catalog of sports packages</p>
           </div>

           <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {FAMILIES.map((fam, idx) => (
                <Link key={fam.id} to={`/sports?family=${fam.id}`}>
                  <motion.div 
                    whileHover={{ y: -5 }}
                    className="bg-slate-800 hover:bg-slate-700 p-6 rounded-2xl border border-slate-700 hover:border-brand-500/50 text-center group cursor-pointer h-full flex flex-col items-center justify-center transition-colors"
                  >
                    <div className="bg-slate-900 p-4 rounded-full mb-4 group-hover:bg-brand-600/20 group-hover:text-brand-500 transition-colors">
                      {/* Using a generic icon for mock purposes since we can't dynamic import easily in this string format, 
                          but in real app we'd map string to Lucide component */}
                      <Tv className="w-8 h-8" />
                    </div>
                    <h3 className="text-white font-semibold mb-1">{fam.name}</h3>
                    <p className="text-xs text-slate-400">{fam.description}</p>
                  </motion.div>
                </Link>
              ))}
           </div>
        </div>
      </section>

      {/* FEATURES GRID */}
      <section className="py-20 bg-slate-950">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-12">
            <div className="bg-slate-900/40 p-8 rounded-3xl border border-slate-800">
               <Wifi className="w-10 h-10 text-brand-500 mb-6" />
               <h3 className="text-xl font-bold text-white mb-3">Anti-Freeze Technology</h3>
               <p className="text-slate-400 leading-relaxed">
                 Our proprietary CDN routing ensures you never miss a knockout or a touchdown. Zero buffering, instant load times.
               </p>
            </div>
            <div className="bg-slate-900/40 p-8 rounded-3xl border border-slate-800">
               <Globe className="w-10 h-10 text-blue-500 mb-6" />
               <h3 className="text-xl font-bold text-white mb-3">Geo-Unblocked</h3>
               <p className="text-slate-400 leading-relaxed">
                 Watch local blackouts and international events from anywhere. No VPN required, we handle the routing for you.
               </p>
            </div>
            <div className="bg-slate-900/40 p-8 rounded-3xl border border-slate-800">
               <Shield className="w-10 h-10 text-emerald-500 mb-6" />
               <h3 className="text-xl font-bold text-white mb-3">Secure & Private</h3>
               <p className="text-slate-400 leading-relaxed">
                 We respect your privacy. No logs, secure encrypted connections, and anonymous payment options available.
               </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-brand-900/20"></div>
        <div className="container mx-auto px-4 relative z-10 text-center">
           <h2 className="text-4xl font-bold text-white mb-6">Ready to upgrade your game?</h2>
           <p className="text-slate-300 text-lg mb-8 max-w-xl mx-auto">Join 15,000+ happy subscribers. Get instant access immediately after payment.</p>
           <Link to="/pricing" className="inline-block bg-white text-brand-600 hover:bg-slate-100 text-xl px-10 py-5 rounded-full font-bold shadow-2xl transition-all hover:scale-105">
             Get Started Now
           </Link>
           <p className="mt-6 text-sm text-slate-500">Compatible with Smart TV, Firestick, Android, iOS, PC & Mac</p>
        </div>
      </section>

    </div>
  );
};

export default Home;
