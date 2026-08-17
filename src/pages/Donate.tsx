import React, { useState } from 'react';
import { Heart, Building2, BookOpen, Anchor, ArrowRight, X, Music } from 'lucide-react';
import { PaystackButton } from 'react-paystack';
import { motion } from 'framer-motion';

const CAUSES = [
  { id: 'language', title: 'Language Preservation', icon: <BookOpen className="w-5 h-5" /> },
  { id: 'culture', title: 'Cultural Preservation', icon: <Music className="w-5 h-5" /> },
  { id: 'infra', title: 'Community Infrastructure', icon: <Building2 className="w-5 h-5" /> },
  { id: 'general', title: 'General Support', icon: <Heart className="w-5 h-5" /> }
];

export function Donate() {
  const [amount, setAmount] = useState('10000');
  const [selectedCause, setSelectedCause] = useState('language');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formError, setFormError] = useState('');

  const publicKey = (import.meta as any).env?.VITE_PAYSTACK_PUBLIC_KEY || "pk_test_626dcb202750117e593afeb8d06a5b20da02dc6e";

  const componentProps = {
    email: email || "supporter@acdscommunity.org",
    amount: (parseInt(amount) || 0) * 100, // Paystack requires amount in kobo
    metadata: {
      name: name || "Supporter",
      phone: '',
      custom_fields: []
    },
    publicKey,
    text: "Donate with Paystack",
    onSuccess: (reference: any) => {
      alert("Payment Successful! Thank you for your support. Reference: " + reference.reference);
      setName('');
      setEmail('');
    },
    onClose: () => {
      console.log('Payment modal closed');
    },
  };

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
                        className={`py-3 rounded-xl font-bold transition-all border ${amount === amt
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
                        className={`p-4 rounded-xl flex items-center gap-3 transition-all border text-left ${selectedCause === cause.id
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
                    <input
                      type="text"
                      value={name}
                      onChange={(e) => {
                        setName(e.target.value);
                        setFormError('');
                      }}
                      className="w-full px-4 py-3 rounded-xl border border-stone-200 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 bg-stone-50/50"
                      placeholder="John Doe"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-stone-900">Email or Phone Number</label>
                    <input
                      type="text"
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                        setFormError('');
                      }}
                      className="w-full px-4 py-3 rounded-xl border border-stone-200 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 bg-stone-50/50"
                      placeholder="john@example.com or 080..."
                    />
                  </div>
                </div>

                {formError && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-3 mt-4 bg-red-50 border border-red-200 rounded-xl text-red-600 text-sm font-semibold flex items-center justify-center gap-2"
                  >
                    <X className="w-4 h-4 bg-red-500 text-white rounded-full p-0.5" />
                    {formError}
                  </motion.div>
                )}

                <div className="grid grid-cols-1 gap-4 mt-4">
                  {/* <PaystackButton
                    {...componentProps}
                    className="w-full py-4 bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl font-bold text-lg shadow-lg flex items-center justify-center gap-2 transition-all"
                  /> */}
                  <button
                    onClick={() => {
                      if (!name.trim() || !email.trim()) {
                        setFormError("Please enter your Full Name and Contact Info to proceed.");
                        return;
                      }
                      setShowModal(true);
                    }}
                    className="w-full py-4 bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl font-bold text-lg shadow-lg flex items-center justify-center gap-2 transition-all"
                  >
                    Donate via Bank Transfer <ArrowRight className="w-5 h-5" />
                  </button>
                </div>
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
                    <strong className="block text-white mb-1">Language Preservation</strong>
                    <p className="text-sm text-emerald-200/80">Sponsor young language learners and ACDS programs keeping the Amassoma dialect of Izon alive.</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-emerald-800 flex items-center justify-center flex-shrink-0 mt-1">2</div>
                  <div>
                    <strong className="block text-white mb-1">Cultural Heritage</strong>
                    <p className="text-sm text-emerald-200/80">Support festivals like Seigbein and history documentation that keep our identity alive.</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-emerald-800 flex items-center justify-center flex-shrink-0 mt-1">3</div>
                  <div>
                    <strong className="block text-white mb-1">Community Growth</strong>
                    <p className="text-sm text-emerald-200/80">Fund local infrastructure and programs that strengthen the Amassoma community.</p>
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

      {/* Bank Transfer Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="bg-white rounded-3xl p-8 max-w-md w-full shadow-2xl relative"
          >
            {!showSuccessModal ? (
              <>
                <button
                  onClick={() => setShowModal(false)}
                  className="absolute top-6 right-6 p-2 rounded-full hover:bg-stone-100 transition-colors"
                >
                  <X className="w-5 h-5 text-stone-500" />
                </button>

                <h3 className="text-2xl font-bold text-stone-900 mb-6 flex items-center gap-3">
                  <Building2 className="w-6 h-6 text-emerald-600" />
                  Bank Transfer Details
                </h3>

                <div className="space-y-4 mb-8 text-stone-600">
                  <p>
                    Thank you, <strong className="text-stone-900">{name || 'Supporter'}</strong>!
                    Please transfer your donation of <strong className="text-emerald-700">₦{amount ? parseInt(amount).toLocaleString() : '0'}</strong> to the official account below.
                  </p>

                  <div className="bg-stone-50 rounded-2xl p-6 border border-stone-200 mt-4 space-y-3">
                    <div className="flex flex-col gap-1 border-b border-stone-200 pb-3">
                      <span className="text-xs font-bold text-stone-400 uppercase tracking-wider">Bank Name</span>
                      <span className="font-bold text-stone-900">Polaris Bank</span>
                    </div>
                    <div className="flex flex-col gap-1 border-b border-stone-200 pb-3">
                      <span className="text-xs font-bold text-stone-400 uppercase tracking-wider">Account Number</span>
                      <span className="font-bold text-stone-900 font-mono text-2xl tracking-widest text-emerald-700">1140351284</span>
                    </div>
                    <div className="flex flex-col gap-1">
                      <span className="text-xs font-bold text-stone-400 uppercase tracking-wider">Account Name</span>
                      <span className="font-bold text-stone-900">Amassoma Cultural and Development Society</span>
                    </div>
                  </div>

                  <div className="bg-emerald-50 rounded-xl p-4 mt-4">
                    <p className="text-sm text-emerald-800 text-center font-medium">
                      Please use your name or "{CAUSES.find(c => c.id === selectedCause)?.title}" as the payment reference.
                    </p>
                  </div>
                </div>

                <button
                  disabled={isSubmitting}
                  onClick={async () => {
                    setIsSubmitting(true);

                    try {
                      // Generate donation record data
                      const date = new Date().toLocaleString();
                      const causeName = CAUSES.find(c => c.id === selectedCause)?.title || 'General Support';

                      const formData = new FormData();
                      formData.append("Date", date);
                      formData.append("Name", name || 'Anonymous Supporter');
                      formData.append("Email", email || 'Not provided'); // Used for both Email or Phone
                      formData.append("Amount", amount ? `₦${parseInt(amount).toLocaleString()}` : '0');
                      formData.append("Cause", causeName);
                      formData.append("Status", "Pending Verification");

                      const scriptUrl = (import.meta as any).env?.VITE_GOOGLE_SHEETS_URL;

                      if (scriptUrl) {
                        // Send data to Google Sheets silently
                        await fetch(scriptUrl, {
                          method: 'POST',
                          body: formData,
                          mode: 'no-cors' // Crucial for avoiding CORS errors with Google Apps Script
                        });
                      } else {
                        console.warn("VITE_GOOGLE_SHEETS_URL is not set. Data not logged to Sheets.");
                      }
                    } catch (error) {
                      console.error("Failed to log to Google Sheets", error);
                    } finally {
                      setIsSubmitting(false);
                      setShowSuccessModal(true);
                    }
                  }}
                  className="w-full py-4 bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl font-bold text-lg shadow-lg flex items-center justify-center gap-2 transition-all hover:-translate-y-1 disabled:opacity-70 disabled:hover:translate-y-0"
                >
                  {isSubmitting ? "Processing..." : (
                    <>I have made the transfer</>
                  )}
                </button>
              </>
            ) : (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center py-6"
              >
                <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Heart className="w-10 h-10 text-emerald-600" />
                </div>
                <h3 className="text-2xl font-bold text-stone-900 mb-4">Thank You!</h3>
                <p className="text-stone-600 mb-8 leading-relaxed">
                  Your generous donation has been recorded. We will verify the transfer shortly.
                  Thank you for supporting the Amassoma Cultural and Development Society!
                </p>
                <button
                  onClick={() => {
                    setShowModal(false);
                    setTimeout(() => {
                      setShowSuccessModal(false);
                      setName('');
                      setEmail('');
                    }, 300);
                  }}
                  className="w-full py-4 bg-stone-900 hover:bg-stone-800 text-white rounded-xl font-bold text-lg shadow-lg flex items-center justify-center gap-2 transition-all hover:-translate-y-1"
                >
                  Return to Page
                </button>
              </motion.div>
            )}
          </motion.div>
        </div>
      )}
    </div>
  );
}
