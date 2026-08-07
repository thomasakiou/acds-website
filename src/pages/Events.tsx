import React from 'react';
import { MOCK_EVENTS } from '../data';
import { Calendar as CalendarIcon, MapPin, Clock, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';

export function Events() {
  return (
    <div className="min-h-screen bg-stone-50 py-12">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="mb-12 text-center">
          <h1 className="text-4xl font-bold text-stone-900 mb-4 flex items-center justify-center gap-3">
            <CalendarIcon className="w-8 h-8 text-emerald-600" />
            Events Calendar
          </h1>
          <p className="text-lg text-stone-600 max-w-2xl mx-auto">
            Stay connected with the community. Join our upcoming meetings, festivals, and symposiums.
          </p>
        </div>

        <div className="space-y-6">
          {MOCK_EVENTS.map((event, idx) => (
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: idx * 0.1 }}
              key={event.id}
              className="bg-white rounded-2xl p-6 border border-stone-100 shadow-sm hover:shadow-md transition-shadow flex flex-col md:flex-row gap-6 items-start md:items-center"
            >
              {/* Date Badge */}
              <div className="flex-shrink-0 w-24 h-24 bg-stone-50 rounded-2xl border border-stone-100 flex flex-col items-center justify-center text-center">
                <CalendarIcon className="w-8 h-8 text-emerald-600 mb-1" />
                <span className="text-xs font-semibold text-stone-500 uppercase tracking-wide">Event</span>
              </div>

              {/* Details */}
              <div className="flex-grow">
                <h3 className="text-2xl font-bold text-stone-900 mb-2">{event.title}</h3>
                <div className="flex flex-wrap gap-4 text-sm text-stone-500 font-medium mb-3">
                  <span className="flex items-center gap-1">
                    <Clock className="w-4 h-4 text-emerald-500" />
                    {event.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <MapPin className="w-4 h-4 text-emerald-500" />
                    {event.location}
                  </span>
                </div>
                <p className="text-stone-600 leading-relaxed max-w-3xl">
                  {event.description}
                </p>
              </div>

              {/* CTA */}
              <div className="flex-shrink-0 w-full md:w-auto mt-4 md:mt-0">
                {event.link ? (
                  <a
                    href={event.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full md:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white font-semibold rounded-full transition-colors text-sm shadow-sm"
                  >
                    <ExternalLink className="w-4 h-4" />
                    {event.linkLabel || 'Join Group'}
                  </a>
                ) : (
                  <button className="w-full md:w-auto px-6 py-2.5 bg-stone-900 hover:bg-stone-800 text-white font-semibold rounded-full transition-colors text-sm shadow-sm">
                    RSVP
                  </button>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
