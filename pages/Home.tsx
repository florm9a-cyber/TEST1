import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { CheckCircle, Wifi, Globe, Shield, Trophy, Dribbble, Target, Activity, GraduationCap, Swords, Flag, Award, Gauge, Mountain, ThermometerSnowflake } from 'lucide-react';
import { FAMILIES } from '../data/mockData';

// Helper to map icon string to Lucide component
const IconMap: { [key: string]: React.ElementType } = {
  'Trophy': Trophy,
  'Dribbble': Dribbble,
  'ThermometerSnowflake': ThermometerSnowflake,
  'Target': Target,
  'Activity': Activity,
  'GraduationCap': GraduationCap,
  'Swords': Swords,
  'Flag': Flag,
  'Award': Award,
  'Gauge': Gauge,
  'Mountain': Mountain,
  'Wifi': Wifi,
};

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
                <Trophy className="w-5 h-5" /> View Channels
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
              <p className="text-slate-400 max-w-2xl mx-auto">
                Stream your favorite leagues and events live. Choose a category to explore our extensive channel lineup.
              </p>
           </div>

           <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {FAMILIES.map((fam) => {
                const IconComponent = IconMap[fam.icon] || Trophy; // Default icon if not found

                return (
                  <Link key={fam.id} to={`/sports?family=${fam.id}`}>
                    <motion.div 
                      whileHover={{ scale: 1.02, y: -5 }}
                      whileTap={{ scale: 0.98 }}
                      className="group relative aspect-[4/3] md:aspect-[16/9] lg:aspect-[4/3] rounded-2xl overflow-hidden cursor-pointer shadow-lg border border-slate-800"
                    >
                      {/* Background Image */}
                      <img 
                        src={fam.image} 
                        alt={fam.name} 
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      
                      {/* Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent opacity-90 group-hover:opacity-80 transition-opacity"></div>
                      
                      {/* Content */}
                      <div className="absolute inset-0 p-6 flex flex-col justify-end">
                         <div className="bg-brand-600/90 w-12 h-12 rounded-xl flex items-center justify-center mb-4 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                            <IconComponent className="w-6 h-6 text-white" />
                         </div>
                         <div>
                           <h3 className="text-2xl font-bold text-white mb-1 group-hover:text-brand-400 transition-colors">{fam.name}</h3>
                           <p className="text-xs text-slate-300 font-medium opacity-80">{fam.description}</p>
                         </div>
                      </div>
                    </motion.div>
                  </Link>
                );
              })}
           </div>
        </div>
      </section>

      {/* FEATURES GRID */}
      <section className="py-20 bg-slate-950">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-12">
            <div className="bg-slate-900/40 p-8 rounded-3xl border border-slate-800 hover:border-brand-500/30 transition-colors">
               <Wifi className="w-10 h-10 text-brand-500 mb-6" />
               <h3 className="text-xl font-bold text-white mb-3">Anti-Freeze Technology</h3>
               <p className="text-slate-400 leading-relaxed">
                 Our proprietary CDN routing ensures you never miss a knockout or a touchdown. Zero buffering, instant load times.
               </p>
            </div>
            <div className="bg-slate-900/40 p-8 rounded-3xl border border-slate-800 hover:border-brand-500/30 transition-colors">
               <Globe className="w-10 h-10 text-blue-500 mb-6" />
               <h3 className="text-xl font-bold text-white mb-3">Geo-Unblocked</h3>
               <p className="text-slate-400 leading-relaxed">
                 Watch local blackouts and international events from anywhere. No VPN required, we handle the routing for you.
               </p>
            </div>
            <div className="bg-slate-900/40 p-8 rounded-3xl border border-slate-800 hover:border-brand-500/30 transition-colors">
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