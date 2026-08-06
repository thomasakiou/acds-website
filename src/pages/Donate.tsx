import React, { useState } from 'react';
import { Heart, Building2, Book, Anchor, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const CAUSES = [
  { id: 'edu', title: 'Scholarship Fund', icon: <Book className="w-5 h-5" /> },
  { id: 'infra', title: 'Community Infrastructure', icon: <Building2 className="w-5 h-5" /> },
  { id: 'culture', title: 'Cultural Preservation', icon: <Anchor className="w-5 h-5" /> },
  { id: 'general', title: 'General Support', icon: <Heart className="w-5 h-5" /> }
];

export function Donate() {
  const [amount, setAmount] = useState('10000');
  const [selectedCause, setSelectedCause] = useState('general');

  return (
    <div className="min-h-screen bg-stone-50 py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-stone-900 mb-4 flex items-center justify-center gap-3">
            <Heart className="w-8 h-8 text-emerald-600" />
            Support Our Community
          </h1>
          <p className="text-lg text-stone-600 max-w-2xl mx-auto">
            Your generous contributions empower the Amassoma Cultural and Development Society to fund vital projects and preserve our rich heritage.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12">
          
          {/* Donation Form */}
          <div className="lg:w-2/3">
            <div className="bg-white rounded-3xl p-8 shadow-sm border border-stone-100">
              <h2 className="text-2xl font-bold text-stone-900 mb-8">Make a Secure Donation</h2>
              
              <div className="space-y-8">
                {/* Select Amount */}
                <div>
                  <label className="text-sm font-semibold text-stone-900 block mb-4">Select Amount (NGN)</label>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {['5000', '10000', '20000', '50000'].map((amt) => (
                      <button
                        key={amt}
                        onClick={() => setAmount(amt)}
                        className={`py-3 rounded-xl font-bold transition-all border ${
                          amount === amt 
                            ? 'bg-emerald-600 border-emerald-600 text-white' 
                            : 'bg-stone-50 border-stone-200 text-stone-700 hover:bg-stone-100'
                        }`}
                      >
                        ₦{parseInt(amt).toLocaleString()}
                      </button>
                    ))}
                  </div>
                  <div className="mt-4">
                    <div className="relative">
                      <span className="absolute left-4 top-1/2 -translate-y-1/2 text-stone-500 font-bold">₦</span>
                      <input 
                        type="number" 
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                        className="w-full pl-10 pr-4 py-4 rounded-xl border border-stone-200 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 bg-stone-50/50 font-bold text-lg"
                        placeholder="Custom Amount"
                      />
                    </div>
                  </div>
                </div>

                {/* Select Cause */}
                <div>
                  <label className="text-sm font-semibold text-stone-900 block mb-4">Select Cause</label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {CAUSES.map((cause) => (
                      <button
                        key={cause.id}
                        onClick={() => setSelectedCause(cause.id)}
                        className={`p-4 rounded-xl flex items-center gap-3 transition-all border text-left ${
                          selectedCause === cause.id
                            ? 'bg-emerald-50 border-emerald-500 text-emerald-900'
                            : 'bg-white border-stone-200 text-stone-600 hover:bg-stone-50'
                        }`}
                      >
                        <div className={`w-10 h-10 rounded-full flex items-center justify-center ${selectedCause === cause.id ? 'bg-emerald-200/50 text-emerald-700' : 'bg-stone-100 text-stone-500'}`}>
                          {cause.icon}
                        </div>
                        <span className="font-semibold">{cause.title}</span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Personal Info */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-stone-100">
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-stone-900">Full Name</label>
                    <input type="text" className="w-full px-4 py-3 rounded-xl border border-stone-200 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 bg-stone-50/50" placeholder="John Doe" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-stone-900">Email Address</label>
                    <input type="email" className="w-full px-4 py-3 rounded-xl border border-stone-200 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 bg-stone-50/50" placeholder="john@example.com" />
                  </div>
                </div>

                <button className="w-full py-4 bg-stone-900 hover:bg-stone-800 text-white rounded-xl font-bold text-lg shadow-lg flex items-center justify-center gap-2 transition-all">
                  Proceed to Payment <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>

          {/* Info Sidebar */}
          <div className="lg:w-1/3">
            <div className="bg-emerald-900 text-emerald-50 rounded-3xl p-8 sticky top-24">
              <h3 className="text-xl font-bold text-white mb-6">Why Donate?</h3>
              <ul className="space-y-6">
                <li className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-emerald-800 flex items-center justify-center flex-shrink-0 mt-1">1</div>
                  <div>
                    <strong className="block text-white mb-1">Education First</strong>
                    <p className="text-sm text-emerald-200/80">Help us sponsor brilliant sons and daughters of Amassoma through university.</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-emerald-800 flex items-center justify-center flex-shrink-0 mt-1">2</div>
                  <div>
                    <strong className="block text-white mb-1">Cultural Festivals</strong>
                    <p className="text-sm text-emerald-200/80">Support events like Seigbein that keep our heritage alive.</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-emerald-800 flex items-center justify-center flex-shrink-0 mt-1">3</div>
                  <div>
                    <strong className="block text-white mb-1">Community Growth</strong>
                    <p className="text-sm text-emerald-200/80">Fund local infrastructure repairs and youth empowerment programs.</p>
                  </div>
                </li>
              </ul>
              
              <div className="mt-8 pt-8 border-t border-emerald-800">
                <p className="text-sm text-emerald-300 italic text-center">
                  "Ó Pọọn Mọ, Éyerin Buọ Mọ !"<br />
                  Together we build Amassoma.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
