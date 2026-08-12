import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Heart } from 'lucide-react';
import { cn } from '../../lib/utils';
import { motion, AnimatePresence } from 'framer-motion';

const NAV_LINKS = [
  { name: 'Home', path: '/' },
  { name: 'Archive & News', path: '/archive' },
  { name: 'Events', path: '/events' },
  { name: 'Projects', path: '/projects' },
  { name: 'Exco & Members', path: '/directory' },
  { name: 'Register', path: '/register' },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="sticky top-0 z-50 w-full bg-stone-900 text-stone-100 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0 flex items-center gap-3">
            <Link to="/" className="flex items-center gap-3 group">
              <motion.img
                src="/assets/img/logo/acds-logo3.png"
                alt="ACDS Logo"
                className="w-15 h-15 object-contain"
                whileHover={{ rotate: [0, -10, 10, -6, 6, 0], scale: 1.15 }}
                transition={{ duration: 0.5, ease: 'easeInOut' }}
              />
              <div className="flex flex-col">
                <span className="font-bold text-xl tracking-tight leading-none">ACDS</span>
                <span className="text-[10px] text-emerald-400 font-medium tracking-wider uppercase mt-1">Amassoma Cultural & Development Society</span>
              </div>
            </Link>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-1">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={cn(
                  "px-4 py-2 rounded-md text-sm font-medium transition-colors",
                  location.pathname === link.path
                    ? "bg-emerald-900/50 text-emerald-400"
                    : "text-stone-300 hover:bg-stone-800 hover:text-white"
                )}
              >
                {link.name}
              </Link>
            ))}
            <div className="ml-4 pl-4 border-l border-stone-700">
              <Link
                to="/donate"
                className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white px-5 py-2 rounded-full text-sm font-semibold transition-all shadow-lg hover:shadow-emerald-500/25"
              >
                <Heart className="w-4 h-4" />
                Donate
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-stone-300 hover:text-white focus:outline-none p-2"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t border-stone-800 bg-stone-900 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-1">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    "block px-3 py-3 rounded-md text-base font-medium",
                    location.pathname === link.path
                      ? "bg-emerald-900/30 text-emerald-400"
                      : "text-stone-300 hover:bg-stone-800 hover:text-white"
                  )}
                >
                  {link.name}
                </Link>
              ))}
              <Link
                to="/donate"
                onClick={() => setIsOpen(false)}
                className="mt-4 flex items-center justify-center gap-2 w-full bg-emerald-600 hover:bg-emerald-500 text-white px-5 py-3 rounded-md text-base font-semibold transition-all"
              >
                <Heart className="w-5 h-5" />
                Donate to ACDS
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
