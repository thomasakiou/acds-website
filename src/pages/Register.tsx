import React, { useState, useRef } from 'react';
import { UserPlus, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';

const FORM_ACTION = 'https://docs.google.com/forms/d/e/1FAIpQLSdsdHPiFaexRS3REL8j7RUYm1JOwdmiO3jOkadJI0dMETf9cw/formResponse';

export function Register() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    const form = e.currentTarget;
    const data = new FormData(form);

    // Post silently via fetch (no-cors) — response is opaque but submission goes through
    try {
      await fetch(FORM_ACTION, { method: 'POST', body: data, mode: 'no-cors' });
    } catch (_) {
      // no-cors always throws on read, but the submission succeeds
    }

    setLoading(false);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="min-h-[80vh] flex items-center justify-center bg-stone-50 p-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-white max-w-md w-full p-8 rounded-3xl shadow-xl text-center border border-stone-100"
        >
          <div className="w-20 h-20 bg-gold-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle2 className="w-10 h-10 text-forest-600" />
          </div>
          <h2 className="text-2xl font-bold text-stone-900 mb-4">Application Received!</h2>
          <p className="text-stone-600 mb-8">
            Thank you for registering. Your application will be reviewed by the society's committee, and we will contact you shortly.
          </p>
          <button
            onClick={() => window.location.href = '/'}
            className="w-full py-3 bg-stone-900 hover:bg-stone-800 text-white rounded-xl font-semibold transition-colors"
          >
            Return to Home
          </button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-stone-50 py-12">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-10">
          <div className="w-16 h-16 bg-gold-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <UserPlus className="w-8 h-8 text-forest-600" />
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-stone-900 mb-4">Join ACDS</h1>
          <p className="text-lg text-stone-600">
            Become a part of our growing society. Connect with your roots and contribute to the development of Amassoma.
          </p>
        </div>

        <div className="bg-white rounded-3xl p-8 md:p-10 shadow-sm border border-stone-100">
          <form onSubmit={handleSubmit} className="space-y-6">

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-semibold text-stone-900">First Name</label>
                <input name="entry.1523477619" required type="text" className="w-full px-4 py-3 rounded-xl border border-stone-200 focus:outline-none focus:ring-2 focus:ring-gold-400/20 focus:border-gold-500 bg-stone-50/50" placeholder="e.g. Ebimieowei" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-stone-900">Last Name</label>
                <input name="entry.432051855" required type="text" className="w-full px-4 py-3 rounded-xl border border-stone-200 focus:outline-none focus:ring-2 focus:ring-gold-400/20 focus:border-gold-500 bg-stone-50/50" placeholder="e.g. Owei" />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-semibold text-stone-900">Email Address</label>
              <input name="entry.1015832944" type="email" className="w-full px-4 py-3 rounded-xl border border-stone-200 focus:outline-none focus:ring-2 focus:ring-gold-400/20 focus:border-gold-500 bg-stone-50/50" placeholder="you@example.com" />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-semibold text-stone-900">Phone Number</label>
              <input name="entry.690912932" required type="tel" className="w-full px-4 py-3 rounded-xl border border-stone-200 focus:outline-none focus:ring-2 focus:ring-gold-400/20 focus:border-gold-500 bg-stone-50/50" placeholder="+234..." />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-semibold text-stone-900">Connection to Amassoma</label>
              <select name="entry.977823996" required className="w-full px-4 py-3 rounded-xl border border-stone-200 focus:outline-none focus:ring-2 focus:ring-gold-400/20 focus:border-gold-500 bg-stone-50/50 text-stone-700">
                <option value="">Select an option</option>
                <option value="Indigene by birth">Indigene by birth</option>
                <option value="Indigene by marriage">Indigene by marriage</option>
                <option value="Resident of Amassoma">Resident of Amassoma</option>
                <option value="Friend of the community">Friend of the community</option>
              </select>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-semibold text-stone-900">Why do you want to join ACDS?</label>
              <textarea name="entry.150514367" rows={4} className="w-full px-4 py-3 rounded-xl border border-stone-200 focus:outline-none focus:ring-2 focus:ring-gold-400/20 focus:border-gold-500 bg-stone-50/50 resize-none" placeholder="Share your motivation..." />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-4 bg-gold-500 hover:bg-gold-400 text-forest-900 rounded-xl font-bold text-lg shadow-lg hover:shadow-gold-400/30 transition-all disabled:opacity-60"
            >
              {loading ? 'Submitting...' : 'Submit Application'}
            </button>
            <p className="text-xs text-center text-stone-500 mt-4">
              By submitting this form, you agree to the ACDS constitution and code of conduct.
            </p>
          </form>
        </div>

      </div>
    </div>
  );
}
