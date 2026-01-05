import React from 'react';
import { Channel } from '../types';
import { motion } from 'framer-motion';
import { Play, ShieldCheck, Tv, MonitorPlay } from 'lucide-react';

interface ChannelCardProps {
  channel: Channel;
}

const ChannelCard: React.FC<ChannelCardProps> = ({ channel }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.03, y: -5 }}
      transition={{ duration: 0.3 }}
      className="group relative bg-slate-800/50 hover:bg-slate-800 border border-slate-700/50 hover:border-brand-500/50 rounded-2xl overflow-hidden cursor-pointer shadow-lg hover:shadow-brand-900/20 backdrop-blur-sm"
    >
      {/* Top Badges */}
      <div className="absolute top-3 left-3 flex gap-2 z-10">
        {channel.tags.includes('LIVE') && (
          <span className="bg-red-600 text-white text-[10px] font-bold px-2 py-0.5 rounded-full flex items-center animate-pulse">
            <span className="w-1.5 h-1.5 bg-white rounded-full mr-1"></span> LIVE
          </span>
        )}
        {channel.tags.includes('PPV') && (
          <span className="bg-amber-500 text-black text-[10px] font-bold px-2 py-0.5 rounded-full">
            PPV
          </span>
        )}
      </div>

      <div className="absolute top-3 right-3 flex gap-1 z-10">
        {channel.quality.includes('4K') && (
           <span className="bg-slate-900/80 text-brand-500 border border-brand-500/30 text-[10px] font-bold px-1.5 py-0.5 rounded">4K</span>
        )}
        <span className="bg-slate-900/80 text-slate-300 border border-slate-700 text-[10px] font-bold px-1.5 py-0.5 rounded">{channel.language}</span>
      </div>

      {/* Image Area */}
      <div className="relative h-40 w-full flex items-center justify-center p-6 bg-gradient-to-b from-slate-900 to-slate-800 group-hover:from-slate-800 group-hover:to-slate-700 transition-colors">
        <img 
          src={channel.logo} 
          alt={channel.name} 
          className="max-h-full max-w-full object-contain drop-shadow-xl transition-transform duration-300 group-hover:scale-110" 
        />
        
        {/* Hover Overlay Play Button */}
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
           <div className="bg-brand-600 rounded-full p-3 shadow-lg shadow-brand-600/50 transform scale-50 group-hover:scale-100 transition-transform duration-300">
              <Play fill="white" className="w-6 h-6 text-white ml-1" />
           </div>
        </div>
      </div>

      {/* Info Area */}
      <div className="p-4">
        <div className="flex justify-between items-start mb-1">
          <h3 className="text-white font-semibold text-lg leading-tight truncate pr-2">{channel.name}</h3>
          <img 
            src={`https://flagcdn.com/24x18/${channel.country === 'USA' ? 'us' : channel.country === 'Canada' ? 'ca' : 'un'}.png`} 
            alt={channel.country} 
            className="w-5 h-3.5 mt-1 opacity-70"
          />
        </div>
        
        {/* Fake EPG */}
        <div className="mt-3">
          <div className="flex justify-between text-xs text-slate-400 mb-1">
            <span className="truncate max-w-[70%]">{channel.currentProgram || 'Live Stream'}</span>
            <span>Live</span>
          </div>
          <div className="w-full bg-slate-700 rounded-full h-1">
            <div 
              className="bg-brand-600 h-1 rounded-full transition-all duration-1000" 
              style={{ width: `${channel.progress || 0}%` }}
            ></div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ChannelCard;
