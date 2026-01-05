import React, { useState, useEffect, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { CHANNELS, FAMILIES, SUB_FAMILIES } from '../data/mockData';
import { Channel, Country, Language } from '../types';
import ChannelCard from '../components/ChannelCard';
import { Search, Filter, X } from 'lucide-react';
import { motion } from 'framer-motion';

const Catalog: React.FC = () => {
  const [searchParams] = useSearchParams();
  const initialFamily = searchParams.get('family') || 'all';

  const [search, setSearch] = useState('');
  const [selectedFamily, setSelectedFamily] = useState<string>(initialFamily);
  const [selectedCountry, setSelectedCountry] = useState<Country | 'All'>('All');
  const [selectedLang, setSelectedLang] = useState<Language | 'All'>('All');

  // Update selected family if URL param changes
  useEffect(() => {
    const fam = searchParams.get('family');
    if (fam) setSelectedFamily(fam);
  }, [searchParams]);

  const filteredChannels = useMemo(() => {
    return CHANNELS.filter((channel) => {
      // 1. Text Search
      if (search && !channel.name.toLowerCase().includes(search.toLowerCase())) return false;
      
      // 2. Family Filter
      if (selectedFamily !== 'all') {
         if (channel.familyId !== selectedFamily) return false;
      }

      // 3. Country Filter
      if (selectedCountry !== 'All' && channel.country !== selectedCountry) return false;

      // 4. Lang Filter
      if (selectedLang !== 'All' && channel.language !== selectedLang) return false;

      return true;
    });
  }, [search, selectedFamily, selectedCountry, selectedLang]);

  // Get active subfamilies for current view (optional enhancement, kept simple for now)

  return (
    <div className="pt-24 pb-20 min-h-screen bg-slate-950">
      <div className="container mx-auto px-4">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
          <div>
            <h1 className="text-3xl font-bold text-white">Live Sports Catalog</h1>
            <p className="text-slate-400 mt-1">{filteredChannels.length} Channels Available</p>
          </div>

          {/* Search Bar */}
          <div className="relative w-full md:w-96">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
            <input 
              type="text" 
              placeholder="Search channels (e.g. ESPN, UFC)..." 
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full bg-slate-900 border border-slate-700 text-white pl-10 pr-4 py-3 rounded-xl focus:ring-2 focus:ring-brand-500 focus:border-transparent outline-none transition-all placeholder:text-slate-600"
            />
            {search && (
              <button onClick={() => setSearch('')} className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-500 hover:text-white">
                <X className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>

        {/* Filters Toolbar */}
        <div className="bg-slate-900/50 p-4 rounded-2xl border border-slate-800 mb-8 overflow-x-auto scrollbar-hide">
          <div className="flex flex-nowrap items-center gap-4 min-w-max">
            <div className="flex items-center gap-2 text-slate-400 text-sm font-semibold mr-2">
              <Filter className="w-4 h-4" /> FILTERS:
            </div>
            
            {/* Family Tabs */}
            <div className="flex bg-slate-900 rounded-lg p-1 border border-slate-700">
              <button 
                onClick={() => setSelectedFamily('all')}
                className={`px-4 py-1.5 rounded-md text-sm font-medium transition-all ${selectedFamily === 'all' ? 'bg-slate-700 text-white shadow' : 'text-slate-400 hover:text-white'}`}
              >
                All
              </button>
              {FAMILIES.map(f => (
                <button 
                  key={f.id}
                  onClick={() => setSelectedFamily(f.id)}
                  className={`px-4 py-1.5 rounded-md text-sm font-medium transition-all whitespace-nowrap ${selectedFamily === f.id ? 'bg-brand-600 text-white shadow' : 'text-slate-400 hover:text-white'}`}
                >
                  {f.name}
                </button>
              ))}
            </div>

            <div className="h-6 w-px bg-slate-700 mx-2"></div>

            {/* Country Select */}
            <select 
              value={selectedCountry} 
              onChange={(e) => setSelectedCountry(e.target.value as any)}
              className="bg-slate-900 border border-slate-700 text-slate-300 text-sm rounded-lg px-3 py-2 outline-none focus:border-brand-500"
            >
              <option value="All">All Countries</option>
              <option value="USA">USA</option>
              <option value="Canada">Canada</option>
              <option value="International">International</option>
            </select>

             {/* Language Select */}
             <select 
              value={selectedLang} 
              onChange={(e) => setSelectedLang(e.target.value as any)}
              className="bg-slate-900 border border-slate-700 text-slate-300 text-sm rounded-lg px-3 py-2 outline-none focus:border-brand-500"
            >
              <option value="All">All Languages</option>
              <option value="EN">English</option>
              <option value="FR">French</option>
              <option value="ES">Spanish</option>
            </select>
          </div>
        </div>

        {/* Grid */}
        {filteredChannels.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredChannels.map((channel) => (
              <ChannelCard key={channel.id} channel={channel} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20 bg-slate-900/30 rounded-3xl border border-slate-800/50">
             <div className="inline-block p-4 bg-slate-800 rounded-full mb-4">
                <Search className="w-8 h-8 text-slate-500" />
             </div>
             <h3 className="text-xl font-bold text-white mb-2">No channels found</h3>
             <p className="text-slate-400">Try adjusting your filters or search terms.</p>
             <button 
               onClick={() => {setSearch(''); setSelectedFamily('all'); setSelectedCountry('All');}}
               className="mt-6 text-brand-500 hover:text-brand-400 font-medium hover:underline"
             >
               Clear all filters
             </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Catalog;
