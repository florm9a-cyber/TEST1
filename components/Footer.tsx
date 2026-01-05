import React from 'react';
import { Tv, Mail, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 border-t border-slate-900 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <div className="bg-brand-600 p-1.5 rounded-lg">
                <Tv className="h-5 w-5 text-white" />
              </div>
              <span className="text-xl font-bold text-white">StreamPulse</span>
            </div>
            <p className="text-slate-500 text-sm leading-relaxed mb-6">
              The premier destination for USA & Canadian sports. Watch live, zero freeze, anywhere in the world.
            </p>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4">Browse</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li><Link to="/" className="hover:text-brand-500 transition-colors">Home</Link></li>
              <li><Link to="/sports" className="hover:text-brand-500 transition-colors">Channels Catalog</Link></li>
              <li><Link to="/schedule" className="hover:text-brand-500 transition-colors">Live Schedule</Link></li>
              <li><Link to="/pricing" className="hover:text-brand-500 transition-colors">Pricing</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4">Support</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li><Link to="/support" className="hover:text-brand-500 transition-colors">Help Center</Link></li>
              <li><Link to="/support" className="hover:text-brand-500 transition-colors">Setup Guide</Link></li>
              <li><Link to="/support" className="hover:text-brand-500 transition-colors">FAQ</Link></li>
              <li><Link to="/support" className="hover:text-brand-500 transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          <div>
             <h4 className="text-white font-bold mb-4">Legal</h4>
             <ul className="space-y-2 text-sm text-slate-400">
              <li><span className="cursor-pointer hover:text-white">Terms of Service</span></li>
              <li><span className="cursor-pointer hover:text-white">Privacy Policy</span></li>
              <li><span className="cursor-pointer hover:text-white">DMCA</span></li>
            </ul>
            <div className="mt-6 flex items-center gap-2 text-slate-600 text-xs">
              <ShieldCheck className="w-4 h-4" /> SSL Encrypted Payment
            </div>
          </div>

        </div>

        <div className="border-t border-slate-900 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-slate-600 text-sm">© 2024 StreamPulse IPTV. All rights reserved.</p>
          <div className="mt-4 md:mt-0">
             <span className="text-slate-700 text-xs">Design concept only. No real streams.</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;