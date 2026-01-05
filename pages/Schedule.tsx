import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Filter, Lock, Play, ChevronRight, ChevronLeft } from 'lucide-react';
import { SCHEDULE_EVENTS, FAMILIES } from '../data/mockData';
import { Link } from 'react-router-dom';

const Schedule: React.FC = () => {
  const [selectedFamilyId, setSelectedFamilyId] = useState('all');

  // Generate category list from FAMILIES data
  const categories = useMemo(() => {
    return [
      { id: 'all', name: 'All Sports' },
      ...FAMILIES
    ];
  }, []);

  // Filter events based on selected family ID
  const filteredEvents = useMemo(() => {
    if (selectedFamilyId === 'all') return SCHEDULE_EVENTS;
    return SCHEDULE_EVENTS.filter(event => event.familyId === selectedFamilyId);
  }, [selectedFamilyId]);

  // Group events by date
  const eventsByDate = useMemo(() => {
    const groups: { [key: string]: typeof SCHEDULE_EVENTS } = {};
    filteredEvents.forEach(event => {
      if (!groups[event.date]) {
        groups[event.date] = [];
      }
      groups[event.date].push(event);
    });
    return groups;
  }, [filteredEvents]);

  // Get unique dates for display order
  const sortedDates = Object.keys(eventsByDate).sort();

  return (
    <div className="pt-24 pb-20 min-h-screen bg-slate-950 text-white">
      <div className="container mx-auto px-4 md:px-8">
        
        {/* Header Area */}
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
          <div>
            <h1 className="text-3xl font-bold flex items-center gap-3">
              <Calendar className="text-brand-500 w-8 h-8" />
              Live Schedule
            </h1>
            <p className="text-slate-400 mt-1">Upcoming games, matches, and exclusive events.</p>
          </div>
          
          <div className="flex gap-2">
             <Link to="/pricing" className="bg-brand-600 hover:bg-brand-500 text-white px-6 py-2 rounded-full font-bold text-sm transition-colors shadow-lg shadow-brand-900/20">
               Unlock All Events
             </Link>
          </div>
        </div>

        {/* Categories Toolbar (Families) */}
        <div className="flex items-center gap-4 mb-10 overflow-x-auto pb-4 scrollbar-hide">
           <div className="flex items-center gap-2 text-slate-400 text-sm font-bold uppercase tracking-wider min-w-max">
              <Filter className="w-4 h-4" /> Families
           </div>
           <div className="h-6 w-px bg-slate-800 mx-2 flex-shrink-0"></div>
           <div className="flex gap-2">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setSelectedFamilyId(cat.id)}
                  className={`px-5 py-2 rounded-lg text-sm font-bold whitespace-nowrap transition-all border ${
                    selectedFamilyId === cat.id 
                      ? 'bg-slate-100 text-slate-900 border-white' 
                      : 'bg-slate-900 text-slate-400 border-slate-800 hover:border-slate-600 hover:text-white'
                  }`}
                >
                  {cat.name}
                </button>
              ))}
           </div>
        </div>

        {/* Schedule Grid by Date */}
        <div className="space-y-12">
          {sortedDates.map((date) => {
            const events = eventsByDate[date];
            const displayDate = events[0].displayDate.split(' '); // ["SUN", "28", "DEC"]
            
            return (
              <div key={date} className="relative">
                {/* Date Header Row */}
                <div className="flex items-start mb-6 group">
                   <div className="flex flex-col items-center mr-6 min-w-[60px]">
                      <span className="text-xs text-brand-500 font-bold uppercase tracking-wider mb-1">{displayDate[0]}</span>
                      <span className="text-3xl font-extrabold text-white leading-none">{displayDate[1]}</span>
                      <span className="text-xs text-slate-500 font-bold uppercase mt-1">{displayDate[2]}</span>
                   </div>
                   
                   {/* Events Horizontal Scroll */}
                   <div className="flex-1 overflow-x-auto pb-6 scrollbar-hide">
                      <div className="flex gap-6 min-w-max">
                        {events.map((event) => (
                          <motion.div 
                            key={event.id}
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4 }}
                            className="w-[300px] flex-shrink-0 group/card cursor-pointer"
                          >
                            {/* Image Container */}
                            <div className="relative aspect-video rounded-xl overflow-hidden mb-3 border border-slate-800 group-hover/card:border-brand-500/50 transition-all shadow-lg bg-slate-900">
                               <img 
                                 src={event.image} 
                                 alt={`${event.homeTeam} vs ${event.awayTeam}`}
                                 className="w-full h-full object-cover opacity-60 group-hover/card:opacity-40 transition-opacity duration-300"
                               />
                               
                               {/* Gradient Overlay */}
                               <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent"></div>

                               {/* Lock Icon */}
                               {event.isLocked && (
                                 <div className="absolute top-3 left-3 bg-slate-950/80 backdrop-blur-md p-1.5 rounded-lg border border-slate-700">
                                   <Lock className="w-3 h-3 text-slate-300" />
                                 </div>
                               )}

                               {/* League Badge */}
                               <div className="absolute top-3 right-3">
                                  <img 
                                    src={`https://ui-avatars.com/api/?name=${event.league}&background=0f172a&color=fff&size=64&font-size=0.4&length=3&bold=true`} 
                                    alt={event.league} 
                                    className="w-8 h-8 rounded border border-slate-700 shadow-lg"
                                  />
                               </div>

                               {/* VS Text or Play Icon on Hover */}
                               <div className="absolute inset-0 flex items-center justify-center">
                                  <div className="bg-brand-600 rounded-full p-3 opacity-0 group-hover/card:opacity-100 transform scale-50 group-hover/card:scale-100 transition-all duration-300 shadow-xl shadow-brand-600/40">
                                    <Play className="w-6 h-6 text-white ml-1" />
                                  </div>
                               </div>

                               {/* Team Logos Overlay (Simulated) */}
                               <div className="absolute bottom-3 left-3 right-3 flex justify-between items-end">
                                  <div className="flex items-center gap-2">
                                     <div className="bg-white text-slate-900 text-[10px] font-bold px-1.5 rounded h-5 flex items-center justify-center">
                                       {event.awayLogo}
                                     </div>
                                     <span className="text-white font-bold text-shadow-sm drop-shadow-md text-sm">{event.awayTeam}</span>
                                  </div>
                                  <span className="text-slate-400 text-xs font-bold px-2">@</span>
                                  <div className="flex items-center gap-2 flex-row-reverse">
                                     <div className="bg-brand-600 text-white text-[10px] font-bold px-1.5 rounded h-5 flex items-center justify-center">
                                       {event.homeLogo}
                                     </div>
                                     <span className="text-white font-bold text-shadow-sm drop-shadow-md text-sm">{event.homeTeam}</span>
                                  </div>
                               </div>
                            </div>

                            {/* Info */}
                            <div>
                               <h3 className="text-white font-bold text-base mb-1 truncate group-hover/card:text-brand-500 transition-colors">
                                 {event.awayTeam} @ {event.homeTeam}
                               </h3>
                               <div className="flex items-center justify-between text-xs text-slate-400">
                                  <span className="flex items-center gap-1.5">
                                    <span className="w-1.5 h-1.5 rounded-full bg-brand-500"></span>
                                    {event.channelName}
                                  </span>
                                  <span>{event.startTime} EST</span>
                               </div>
                            </div>
                          </motion.div>
                        ))}
                      </div>
                   </div>
                </div>
                
                {/* Divider */}
                <div className="h-px bg-slate-900 w-full mb-8"></div>
              </div>
            );
          })}
          
          {sortedDates.length === 0 && (
             <div className="text-center py-20 bg-slate-900/30 rounded-2xl border border-slate-800 border-dashed">
                <Calendar className="w-12 h-12 text-slate-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">No events found</h3>
                <p className="text-slate-500">Try selecting a different family.</p>
                <button 
                   onClick={() => setSelectedFamilyId('all')} 
                   className="mt-4 text-brand-500 hover:text-white text-sm font-bold"
                >
                   View All Sports
                </button>
             </div>
          )}

        </div>
      </div>
    </div>
  );
};

export default Schedule;