import React, { useState } from 'react';
import { MOCK_MEMBERS } from '../data';
import { Users, Shield, Search, Mail, Phone, Calendar } from 'lucide-react';
import { motion } from 'framer-motion';
import { Member } from '../types';

export function Directory() {
  const [search, setSearch] = useState('');

  const filteredMembers = MOCK_MEMBERS.filter(m =>
    m.name.toLowerCase().includes(search.toLowerCase()) ||
    m.role.toLowerCase().includes(search.toLowerCase()) ||
    (m.description || '').toLowerCase().includes(search.toLowerCase())
  );

  const excos = filteredMembers.filter(m => m.isExco);
  const generalMembers = filteredMembers.filter(m => !m.isExco);

  return (
    <div className="min-h-screen bg-stone-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="mb-12 flex flex-col md:flex-row gap-6 justify-between items-start md:items-center">
          <div>
            <h1 className="text-4xl font-bold text-stone-900 mb-4 flex items-center gap-3">
              <Users className="w-8 h-8 text-emerald-600" />
              Members Directory
            </h1>
            <p className="text-lg text-stone-600 max-w-2xl">
              Meet the executive committee and members driving the vision of the Amassoma Cultural and Development Society.
            </p>
          </div>

          <div className="relative w-full md:w-80">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-stone-400" />
            <input
              type="text"
              placeholder="Search members..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-10 pr-4 py-3 rounded-xl border border-stone-200 bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all"
            />
          </div>
        </div>

        {/* Excos Section */}
        {excos.length > 0 && (
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-stone-900 mb-6 flex items-center gap-2 border-b border-stone-200 pb-4">
              <Shield className="w-6 h-6 text-emerald-600" />
              Executive Committee
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {excos.map((exco, idx) => (
                <MemberCard key={exco.id} member={exco} delay={idx * 0.08} isExco />
              ))}
            </div>
          </div>
        )}

        {/* General Members Section */}
        {generalMembers.length > 0 && (
          <div>
            <h2 className="text-2xl font-bold text-stone-900 mb-6 flex items-center gap-2 border-b border-stone-200 pb-4">
              <Users className="w-6 h-6 text-stone-400" />
              Registered Members
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {generalMembers.map((member, idx) => (
                <MemberCard key={member.id} member={member} delay={idx * 0.08} />
              ))}
            </div>
          </div>
        )}

        {filteredMembers.length === 0 && (
          <div className="text-center py-20">
            <p className="text-stone-500 text-lg">No members found matching your search.</p>
          </div>
        )}

      </div>
    </div>
  );
}

function MemberCard({ member, delay, isExco }: { member: Member; delay: number; isExco?: boolean; key?: React.Key }) {
  const TITLES = ['mr', 'mrs', 'ms', 'dr', 'chief', 'prof', 'engr', 'hon', 'rev', 'pastor', 'barr', 'sir', 'dame', 'lady', 'alhaji', 'alhaja'];
  const initials = member.name
    .split(' ')
    .filter(n => !TITLES.includes(n.replace(/\./g, '').toLowerCase()))
    .map(n => n.charAt(0).toUpperCase())
    .slice(0, 2)
    .join('');

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.4, ease: 'easeOut' }}
      whileHover={{
        y: -6,
        boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
        transition: { duration: 0.25, ease: 'easeOut' },
      }}
      className={`directory-card group relative bg-white rounded-2xl overflow-hidden border ${isExco
        ? 'border-emerald-200/60 shadow-md'
        : 'border-stone-100 shadow-sm'
        }`}
    >
      {/* Accent bar at top */}
      <div
        className={`h-1.5 w-full ${isExco
          ? 'bg-gradient-to-r from-emerald-500 via-teal-400 to-emerald-600'
          : 'bg-gradient-to-r from-stone-300 via-stone-200 to-stone-300'
          }`}
      />

      <div className="p-6 flex flex-col items-center text-center">
        {/* Avatar */}
        <div
          className={`w-24 h-24 shrink-0 rounded-full flex items-center justify-center text-2xl font-bold transition-transform duration-300 group-hover:scale-110 mb-4 overflow-hidden ${member.image?.trim()
            ? ''
            : isExco
              ? 'bg-gradient-to-br from-emerald-500 to-teal-600 text-white shadow-lg shadow-emerald-200'
              : 'bg-gradient-to-br from-stone-200 to-stone-300 text-stone-600'
            }`}
        >
          {member.image?.trim() ? (
            <img
              src={member.image}
              alt={member.name}
              className="w-full h-full rounded-full object-cover"
            />
          ) : (
            initials
          )}
        </div>

        {/* Name + Role */}
        <h3 className="text-lg font-bold text-stone-900 leading-tight mb-2">
          {member.name}
        </h3>
        <span
          className={`inline-block text-xs font-semibold px-3 py-1 rounded-full mb-3 ${isExco
            ? 'bg-emerald-50 text-emerald-700 ring-1 ring-emerald-200/60'
            : 'bg-stone-100 text-stone-500 ring-1 ring-stone-200/60'
            }`}
        >
          {member.role}
        </span>

        {/* Description */}
        {member.description && (
          <p className="text-sm text-stone-500 leading-relaxed mb-4 line-clamp-3">
            {member.description}
          </p>
        )}

        {/* Divider */}
        <div className="border-t border-stone-100 pt-4 mt-auto">
          {/* Contact details */}
          <div className="space-y-2 opacity-70 group-hover:opacity-100 transition-opacity duration-300">
            {member.email && (
              <a
                href={`mailto:${member.email}`}
                className="flex items-center gap-2 text-xs text-stone-500 hover:text-emerald-600 transition-colors"
              >
                <Mail className="w-3.5 h-3.5 shrink-0" />
                <span className="truncate">{member.email}</span>
              </a>
            )}
            {member.phone && (
              <a
                href={`tel:${member.phone}`}
                className="flex items-center gap-2 text-xs text-stone-500 hover:text-emerald-600 transition-colors"
              >
                <Phone className="w-3.5 h-3.5 shrink-0" />
                <span>{member.phone}</span>
              </a>
            )}
          </div>

          {/* Join date */}
          {/* <div className="flex items-center gap-1.5 text-xs text-stone-400 mt-3">
            <Calendar className="w-3 h-3" />
            <span>Joined {new Date(member.joinDate).getFullYear()}</span>
          </div> */}
        </div>
      </div>
    </motion.div>
  );
}
