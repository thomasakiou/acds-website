import React, { useState } from 'react';
import { MOCK_MEMBERS } from '../data';
import { Users, Shield, Search, Mail, Phone, Calendar, Crown, BookOpen, Star, UserCheck } from 'lucide-react';
import { motion } from 'framer-motion';
import { Member } from '../types';

type MemberCategory = Member['category'];

interface CategorySection {
  category: MemberCategory;
  label: string;
  icon: React.ReactNode;
  accentColor: string;
  badgeClasses: string;
  avatarClasses: string;
}

const CATEGORY_SECTIONS: CategorySection[] = [
  {
    category: 'Founder',
    label: 'Founders',
    icon: <Crown className="w-6 h-6 text-amber-600" />,
    accentColor: 'bg-gradient-to-r from-amber-500 via-yellow-400 to-amber-600',
    badgeClasses: 'bg-amber-50 text-amber-700 ring-1 ring-amber-200/60',
    avatarClasses: 'bg-gradient-to-br from-amber-500 to-yellow-600 text-white shadow-lg shadow-amber-200',
  },
  {
    category: 'Trustee',
    label: 'Trustees',
    icon: <Shield className="w-6 h-6 text-indigo-600" />,
    accentColor: 'bg-gradient-to-r from-indigo-500 via-purple-400 to-indigo-600',
    badgeClasses: 'bg-indigo-50 text-indigo-700 ring-1 ring-indigo-200/60',
    avatarClasses: 'bg-gradient-to-br from-indigo-500 to-purple-600 text-white shadow-lg shadow-indigo-200',
  },
  {
    category: 'Management Committee',
    label: 'Management Committee',
    icon: <Star className="w-6 h-6 text-emerald-600" />,
    accentColor: 'bg-gradient-to-r from-emerald-500 via-teal-400 to-emerald-600',
    badgeClasses: 'bg-emerald-50 text-emerald-700 ring-1 ring-emerald-200/60',
    avatarClasses: 'bg-gradient-to-br from-emerald-500 to-teal-600 text-white shadow-lg shadow-emerald-200',
  },
  {
    category: 'Full Member',
    label: 'Full Members',
    icon: <UserCheck className="w-6 h-6 text-sky-600" />,
    accentColor: 'bg-gradient-to-r from-sky-500 via-blue-400 to-sky-600',
    badgeClasses: 'bg-sky-50 text-sky-700 ring-1 ring-sky-200/60',
    avatarClasses: 'bg-gradient-to-br from-sky-500 to-blue-600 text-white shadow-lg shadow-sky-200',
  },
  {
    category: 'Associate Member',
    label: 'Associate Members',
    icon: <Users className="w-6 h-6 text-stone-400" />,
    accentColor: 'bg-gradient-to-r from-stone-300 via-stone-200 to-stone-300',
    badgeClasses: 'bg-stone-100 text-stone-500 ring-1 ring-stone-200/60',
    avatarClasses: 'bg-gradient-to-br from-stone-200 to-stone-300 text-stone-600',
  },
];

export function Directory() {
  const [search, setSearch] = useState('');

  const filteredMembers = MOCK_MEMBERS.filter(m =>
    m.name.toLowerCase().includes(search.toLowerCase()) ||
    m.role.toLowerCase().includes(search.toLowerCase()) ||
    (m.description || '').toLowerCase().includes(search.toLowerCase())
  );

  // Trustees are the same people as Founders
  const getMembersForCategory = (category: MemberCategory): Member[] => {
    if (category === 'Trustee') {
      return filteredMembers.filter(m => m.category === 'Founder');
    }
    return filteredMembers.filter(m => m.category === category);
  };

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
              Meet the founders, trustees, management committee, and members driving the vision of the Amassoma Cultural and Development Society.
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

        {CATEGORY_SECTIONS.map((section) => {
          const members = getMembersForCategory(section.category);
          if (members.length === 0) return null;
          return (
            <div key={section.category} className="mb-16">
              <h2 className="text-2xl font-bold text-stone-900 mb-6 flex items-center gap-2 border-b border-stone-200 pb-4">
                {section.icon}
                {section.label}
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {members.map((member, idx) => (
                  <MemberCard
                    key={member.id}
                    member={member}
                    delay={idx * 0.08}
                    accentColor={section.accentColor}
                    badgeClasses={section.badgeClasses}
                    avatarClasses={section.avatarClasses}
                  />
                ))}
              </div>
            </div>
          );
        })}

        {filteredMembers.length === 0 && (
          <div className="text-center py-20">
            <p className="text-stone-500 text-lg">No members found matching your search.</p>
          </div>
        )}

      </div>
    </div>
  );
}

function MemberCard({
  member,
  delay,
  accentColor,
  badgeClasses,
  avatarClasses,
}: {
  member: Member;
  delay: number;
  accentColor: string;
  badgeClasses: string;
  avatarClasses: string;
  key?: React.Key;
}) {
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
      className="directory-card group relative bg-white rounded-2xl overflow-hidden border border-stone-100 shadow-sm"
    >
      {/* Accent bar at top */}
      <div className={`h-1.5 w-full ${accentColor}`} />

      <div className="p-6 flex flex-col items-center text-center">
        {/* Avatar */}
        <div
          className={`w-24 h-24 shrink-0 rounded-full flex items-center justify-center text-2xl font-bold transition-transform duration-300 group-hover:scale-110 mb-4 overflow-hidden ${member.image?.trim()
            ? ''
            : avatarClasses
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
          className={`inline-block text-xs font-semibold px-3 py-1 rounded-full mb-3 ${badgeClasses}`}
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
        </div>
      </div>
    </motion.div>
  );
}
