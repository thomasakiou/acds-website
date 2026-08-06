import React from 'react';
import { Heart } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-stone-950 text-stone-400 py-12 border-t border-stone-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="md:col-span-1">
            <h3 className="text-white font-bold text-lg mb-4">ACDS</h3>
            <p className="text-sm leading-relaxed max-w-xs">
              Amassoma Cultural and Development Society (ACDS) promotes the culture, heritage, and language of the Amassoma people in Southern Ijaw Local Government Area, Bayelsa State.
            </p>
          </div>
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="/archive" className="hover:text-emerald-400 transition-colors">Archive & News</a></li>
              <li><a href="/events" className="hover:text-emerald-400 transition-colors">Events Calendar</a></li>
              <li><a href="/directory" className="hover:text-emerald-400 transition-colors">Members Directory</a></li>
              <li><a href="/donate" className="hover:text-emerald-400 transition-colors">Donate</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-2 text-sm">
              <li>Amassoma, Southern Ijaw LGA</li>
              <li>Bayelsa State, Nigeria</li>
              <li>Email: info@acds-amassoma.org</li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Newsletter</h3>
            <p className="text-sm leading-relaxed mb-4">
              Subscribe to get the latest society news and event announcements.
            </p>
            <form className="flex flex-col gap-2" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="Your email address" 
                className="bg-stone-900 border border-stone-800 rounded-md px-3 py-2 text-sm text-stone-200 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all"
                required
              />
              <button 
                type="submit" 
                className="bg-emerald-600 hover:bg-emerald-500 text-white rounded-md px-3 py-2 text-sm font-semibold transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        
        <div className="pt-8 border-t border-stone-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs">
            © {new Date().getFullYear()} Amassoma Cultural and Development Society. All rights reserved.
          </p>
          <p className="text-xs flex items-center gap-1">
            Ó Pọọn Mọ, Éyerin Buọ Mọ ! <Heart className="w-3 h-3 text-emerald-500 fill-emerald-500 ml-1" />
          </p>
        </div>
      </div>
    </footer>
  );
}
