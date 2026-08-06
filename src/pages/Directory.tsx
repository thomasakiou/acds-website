import React, { useState } from 'react';
import { MOCK_MEMBERS } from '../data';
import { Users, Shield, Search } from 'lucide-react';
import { motion } from 'framer-motion';

export function Directory() {
  const [search, setSearch] = useState('');

  const filteredMembers = MOCK_MEMBERS.filter(m => 
    m.name.toLowerCase().includes(search.toLowerCase()) ||
    m.role.toLowerCase().includes(search.toLowerCase())
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
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {excos.map((exco, idx) => (
                <MemberCard key={exco.id} member={exco} delay={idx * 0.05} />
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
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {generalMembers.map((member, idx) => (
                <MemberCard key={member.id} member={member} delay={idx * 0.05} />
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

function MemberCard({ member, delay }: { member: any, delay: number, key?: React.Key }) {
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay }}
      className="bg-white rounded-2xl p-6 border border-stone-100 shadow-sm text-center flex flex-col items-center hover:shadow-md transition-shadow"
    >
      <div className="w-20 h-20 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center text-2xl font-bold mb-4">
        {member.name.charAt(0)}
      </div>
      <h3 className="text-lg font-bold text-stone-900 mb-1">{member.name}</h3>
      <p className="text-sm font-medium text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full mb-3">
        {member.role}
      </p>
      <p className="text-xs text-stone-400 mt-auto">
        Joined {new Date(member.joinDate).getFullYear()}
      </p>
    </motion.div>
  );
}
