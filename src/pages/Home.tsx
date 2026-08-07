import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, BookOpen, Calendar, Users, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';

export function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full h-[80vh] min-h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-stone-900">
          {/* Background image overlay */}
          <div
            className="absolute inset-0 opacity-40 mix-blend-overlay bg-cover"
            style={{
              backgroundImage: 'url("assets/img/head.jpeg")',
              backgroundPosition: 'center 40%'
            }}

          />
          <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-900/70 to-stone-900/20" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block py-1 px-3 rounded-full bg-emerald-900/50 border border-emerald-500/30 text-emerald-400 text-sm font-semibold tracking-wider mb-6">
              SLOGAN: Ó Pọọn Mọ, Éyerin Buọ Mọ !
            </span>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Amassoma Cultural & <br className="hidden md:block" />
              Development Society
            </h1>

            <div className="bg-stone-800/50 backdrop-blur-sm border border-stone-700/50 p-6 rounded-2xl max-w-2xl mx-auto mb-10">
              <p className="text-lg md:text-xl font-semibold text-emerald-300 mb-2">
                "Preserving Our Past, Enriches Our Future"
              </p>
              <p className="text-xl md:text-2xl font-medium text-emerald-400 italic">
                "Ȏ bọdẹi ẹyerin buọ bo kokomẹnẹ mẹ, dẹin bai kpọ zuọmẹnẹ"
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/register"
                className="w-full sm:w-auto px-8 py-4 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-lg transition-all shadow-lg hover:shadow-emerald-600/30 flex items-center justify-center gap-2"
              >
                Join the Society <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/archive"
                className="w-full sm:w-auto px-8 py-4 rounded-full bg-stone-800 hover:bg-stone-700 text-white font-semibold text-lg transition-all border border-stone-700 hover:border-stone-600"
              >
                Explore Archive
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-stone-900 mb-4">Preserving Our Past, Enriching Our Future</h2>
            <p className="text-stone-600 text-lg">
              ACDS is dedicated to uniting the people of Amassoma, promoting our rich cultural heritage, and driving sustainable community development projects in Southern Ijaw.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard
              icon={<BookOpen className="w-8 h-8 text-emerald-600" />}
              title="Community Archive"
              description="Access a rich collection of cultural news, historical articles, and resources about the Amassoma people and Ijaw heritage."
              link="/archive"
            />
            <FeatureCard
              icon={<Calendar className="w-8 h-8 text-emerald-600" />}
              title="Events & Festivals"
              description="Stay updated on community gatherings, cultural festivals like Seigbein, meetings, and society symposiums."
              link="/events"
            />
            <FeatureCard
              icon={<Users className="w-8 h-8 text-emerald-600" />}
              title="Members Directory"
              description="Connect with fellow sons and daughters of Amassoma. View our executive committee and active members."
              link="/directory"
            />
          </div>
        </div>
      </section>

      {/* Development & Donation CTA */}
      <section className="py-24 bg-stone-900 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 p-32 opacity-5 pointer-events-none">
          <MapPin className="w-96 h-96" />
        </div>
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Support Local Development</h2>
          <p className="text-stone-400 text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
            Your contributions directly fund educational scholarships, infrastructure improvements, and cultural preservation initiatives in Amassoma. Join hands with us to build a better tomorrow for our community.
          </p>
          <Link
            to="/donate"
            className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-lg transition-all shadow-lg hover:shadow-emerald-600/30 gap-2"
          >
            Make a Secure Donation
          </Link>
        </div>
      </section>
    </div>
  );
}

function FeatureCard({ icon, title, description, link }: { icon: React.ReactNode, title: string, description: string, link: string }) {
  return (
    <Link to={link} className="block group">
      <div className="bg-white p-8 rounded-2xl shadow-sm border border-stone-100 hover:shadow-md transition-all h-full flex flex-col">
        <div className="w-16 h-16 rounded-xl bg-emerald-50 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
          {icon}
        </div>
        <h3 className="text-xl font-bold text-stone-900 mb-3">{title}</h3>
        <p className="text-stone-600 leading-relaxed flex-grow">{description}</p>
        <div className="mt-6 flex items-center text-emerald-600 font-semibold text-sm">
          Explore <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
        </div>
      </div>
    </Link>
  );
}
