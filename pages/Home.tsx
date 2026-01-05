import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, Variants } from 'framer-motion';
import { 
  CheckCircle, Wifi, Globe, Shield, Trophy, Zap, ImageOff,
  Dribbble, ThermometerSnowflake, Target, Activity, GraduationCap, 
  Swords, Flag, Award, Gauge, Mountain, Volume2, VolumeX
} from 'lucide-react';
import { FAMILIES } from '../data/mockData';

// Map icons purely for display logic since we can't dynamic import easily in this setup
const iconMap: Record<string, React.ElementType> = {
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
  'Wifi': Wifi
};

const Home: React.FC = () => {
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Toggle Audio Function
  const toggleAudio = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(videoRef.current.muted);
    }
  };

  // Scroll Animation Variants
  const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 60 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-slate-950">
      
      {/* HERO SECTION WITH VIDEO BACKGROUND */}
      <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
        
        {/* Video Element */}
        <div className="absolute inset-0 z-0">
          <video
            ref={videoRef}
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
            // Using a high-quality sports placeholder. Replace this URL with your local file or hosted video link.
            src="https://assets.mixkit.co/videos/preview/mixkit-athlete-running-on-a-track-in-a-stadium-43615-large.mp4"
          />
          {/* Dark Overlay for text readability */}
          <div className="absolute inset-0 bg-slate-950/70 bg-gradient-to-t from-slate-950 via-slate-950/50 to-transparent"></div>
        </div>

        {/* Audio Control Button */}
        <button 
          onClick={toggleAudio}
          className="absolute bottom-10 right-6 z-30 p-3 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 text-white transition-all duration-300 group"
          aria-label="Toggle sound"
        >
          {isMuted ? (
            <VolumeX className="w-6 h-6 group-hover:scale-110 transition-transform" />
          ) : (
            <Volume2 className="w-6 h-6 text-brand-500 group-hover:scale-110 transition-transform" />
          )}
        </button>

        <div className="container mx-auto px-4 relative z-10 text-center pt-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="inline-block py-1 px-3 rounded-full bg-slate-800/80 backdrop-blur border border-slate-600 text-brand-400 text-xs font-bold tracking-wider mb-6 shadow-lg">
              #1 RATED SPORTS IPTV
            </span>
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-white mb-6 drop-shadow-2xl">
              All US & CA Sports. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-500 to-emerald-400">
                One Subscription.
              </span>
            </h1>
            <p className="mt-4 text-xl text-slate-200 max-w-2xl mx-auto mb-10 font-medium drop-shadow-md">
              Access 85+ premium sports channels in HD, FHD & 4K. NFL, NBA, NHL, MLB, UFC, Soccer and more without blackouts.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link to="/pricing" className="bg-brand-600 hover:bg-brand-700 text-slate-950 text-lg px-8 py-4 rounded-full font-bold transition-transform hover:scale-105 shadow-xl shadow-brand-600/30">
                Start Free Trial
              </Link>
              <Link to="/sports" className="bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/20 text-lg px-8 py-4 rounded-full font-bold transition-colors flex items-center justify-center gap-2">
                <Trophy className="w-5 h-5" /> View Channels
              </Link>
            </div>

            <div className="mt-12 flex flex-wrap justify-center gap-8 text-slate-300 text-sm font-semibold">
               <div className="flex items-center gap-2 drop-shadow-md"><CheckCircle className="w-4 h-4 text-brand-500" /> No Buffering</div>
               <div className="flex items-center gap-2 drop-shadow-md"><CheckCircle className="w-4 h-4 text-brand-500" /> 4K Ultra HD</div>
               <div className="flex items-center gap-2 drop-shadow-md"><CheckCircle className="w-4 h-4 text-brand-500" /> 99.9% Uptime</div>
               <div className="flex items-center gap-2 drop-shadow-md"><CheckCircle className="w-4 h-4 text-brand-500" /> Multi-Device</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* COMPETITIONS / FAMILIES GRID - Animated on Scroll */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeInUp}
        className="py-16 bg-gradient-to-b from-slate-950 to-black border-t border-slate-900 relative z-20"
      >
        <div className="container mx-auto px-4">
           
           <div className="flex items-center justify-between mb-10">
              <h2 className="text-3xl font-bold text-white">Competitions</h2>
              <div className="h-px bg-slate-800 flex-grow ml-6 hidden md:block"></div>
           </div>

           {/* Responsive Grid: 2 columns mobile, 3 on tablet, 6 on desktop */}
           <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {FAMILIES.map((fam) => {
                const IconComponent = iconMap[fam.icon] || Trophy;

                return (
                  <Link key={fam.id} to={`/sports?family=${fam.id}`} className="group block">
                      {/* Card Container - Changed to aspect-[3/4] for portrait mode */}
                      <motion.div 
                        whileHover={{ scale: 1.05, y: -5 }}
                        whileTap={{ scale: 0.98 }}
                        className="aspect-[3/4] rounded-3xl flex items-center justify-center shadow-2xl relative overflow-hidden mb-3 border border-white/5 group-hover:border-white/20 transition-all"
                        style={{ 
                            // Dynamic gradient based on family color
                            background: `linear-gradient(135deg, ${fam.bgColor || '#1e293b'} 0%, #050505 100%)`,
                            boxShadow: `0 10px 30px -5px ${fam.bgColor || '#000'}33`
                        }}
                      >
                         {/* Glossy Overlay Top Right */}
                         <div className="absolute top-0 right-0 w-3/4 h-3/4 bg-white opacity-[0.08] rounded-full blur-2xl transform translate-x-4 -translate-y-4 pointer-events-none"></div>
                         
                         {/* Center Logo/Icon */}
                         <div className="w-full h-full flex items-center justify-center p-6 z-10 relative">
                            {fam.image ? (
                              <img 
                                src={fam.image}
                                alt={fam.name}
                                className="w-full h-full object-contain filter drop-shadow-[0_5px_15px_rgba(0,0,0,0.5)] transition-transform duration-300 group-hover:scale-110"
                                onError={(e) => {
                                  // Fallback logic if image fails (though images are removed now)
                                  e.currentTarget.style.display = 'none';
                                  e.currentTarget.parentElement?.querySelector('.fallback-icon')?.classList.remove('hidden');
                                }}
                              />
                            ) : (
                               // No Image? Show the Icon nicely - Increased size slightly for 3:4 ratio
                               <div className="fallback-icon flex flex-col items-center justify-center text-white/90 group-hover:text-white transition-colors">
                                  <IconComponent strokeWidth={1.5} className="w-14 h-14 md:w-20 md:h-20 mb-2 drop-shadow-lg" />
                               </div>
                            )}
                            
                            {/* Hidden fallback container if image load fails */}
                            <div className="fallback-icon hidden flex flex-col items-center justify-center text-white/50">
                               <ImageOff className="w-10 h-10 mb-2 opacity-50" />
                            </div>
                         </div>
                      </motion.div>
                      
                      {/* Title Below Card */}
                      <h3 className="text-white font-bold text-base md:text-lg leading-tight group-hover:text-brand-500 transition-colors text-center">
                        {fam.name}
                      </h3>
                  </Link>
                );
              })}
           </div>

        </div>
      </motion.section>

      {/* FEATURES GRID - Animated on Scroll */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeInUp}
        className="py-20 bg-black"
      >
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-12">
            <div className="bg-white/5 p-8 rounded-3xl border border-white/10 hover:border-brand-500/30 transition-colors">
               <Wifi className="w-10 h-10 text-brand-500 mb-6" />
               <h3 className="text-xl font-bold text-white mb-3">Anti-Freeze Technology</h3>
               <p className="text-slate-400 leading-relaxed">
                 Our proprietary CDN routing ensures you never miss a knockout or a touchdown. Zero buffering, instant load times.
               </p>
            </div>
            <div className="bg-white/5 p-8 rounded-3xl border border-white/10 hover:border-brand-500/30 transition-colors">
               <Globe className="w-10 h-10 text-emerald-400 mb-6" />
               <h3 className="text-xl font-bold text-white mb-3">Geo-Unblocked</h3>
               <p className="text-slate-400 leading-relaxed">
                 Watch local blackouts and international events from anywhere. No VPN required, we handle the routing for you.
               </p>
            </div>
            <div className="bg-white/5 p-8 rounded-3xl border border-white/10 hover:border-brand-500/30 transition-colors">
               <Shield className="w-10 h-10 text-brand-400 mb-6" />
               <h3 className="text-xl font-bold text-white mb-3">Secure & Private</h3>
               <p className="text-slate-400 leading-relaxed">
                 We respect your privacy. No logs, secure encrypted connections, and anonymous payment options available.
               </p>
            </div>
          </div>
        </div>
      </motion.section>

      {/* CTA SECTION - Animated on Scroll */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
        className="py-20 relative overflow-hidden bg-black"
      >
        <div className="absolute inset-0 bg-brand-900/10"></div>
        <div className="container mx-auto px-4 relative z-10 text-center">
           <h2 className="text-4xl font-bold text-white mb-6">Ready to upgrade your game?</h2>
           <p className="text-slate-300 text-lg mb-8 max-w-xl mx-auto">Join 15,000+ happy subscribers. Get instant access immediately after payment.</p>
           <Link to="/pricing" className="inline-block bg-brand-500 text-slate-950 hover:bg-brand-400 text-xl px-10 py-5 rounded-full font-bold shadow-2xl transition-all hover:scale-105">
             Get Started Now
           </Link>
           <p className="mt-6 text-sm text-slate-500">Compatible with Smart TV, Firestick, Android, iOS, PC & Mac</p>
        </div>
      </motion.section>

    </div>
  );
};

export default Home;