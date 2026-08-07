import React from 'react';
import { MOCK_PROJECTS } from '../data';
import { Rocket, ExternalLink, ShieldCheck, Clock } from 'lucide-react';
import { motion } from 'framer-motion';

export function Projects() {
    return (
        <div className="min-h-screen bg-stone-50 py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <div className="mb-12 text-center">
                    <h1 className="text-4xl font-bold text-stone-900 mb-4 flex items-center justify-center gap-3">
                        <Rocket className="w-8 h-8 text-emerald-600" />
                        ACDS Projects
                    </h1>
                    <p className="text-lg text-stone-600 max-w-2xl mx-auto">
                        Explore our initiatives and active projects dedicated to the preservation of our language and the development of the Amassoma community.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {MOCK_PROJECTS.map((project, idx) => (
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: idx * 0.1 }}
                            key={project.id}
                            className="bg-white rounded-2xl p-8 border border-stone-100 shadow-sm hover:shadow-md transition-shadow flex flex-col h-full"
                        >
                            <div className="flex justify-between items-start mb-6">
                                <StatusBadge status={project.status} />
                            </div>

                            <h3 className="text-3xl font-bold text-stone-900 mb-3">{project.title}</h3>
                            <p className="text-lg text-emerald-600 font-medium mb-4">
                                {project.summary}
                            </p>
                            <p className="text-stone-600 leading-relaxed mb-8 flex-grow">
                                {project.description}
                            </p>

                            {project.link && (
                                <div className="mt-auto pt-6 border-t border-stone-100">
                                    <a
                                        href={project.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-emerald-600 hover:bg-emerald-500 text-white font-semibold rounded-full transition-colors shadow-sm w-full sm:w-auto"
                                    >
                                        <ExternalLink className="w-4 h-4" />
                                        {project.linkLabel || 'View Project'}
                                    </a>
                                </div>
                            )}
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
}

function StatusBadge({ status }: { status: string }) {
    if (status === 'Active') {
        return (
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-semibold ring-1 ring-emerald-200/60">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                Active Project
            </span>
        );
    }
    if (status === 'Upcoming') {
        return (
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-semibold ring-1 ring-blue-200/60">
                <Clock className="w-3 h-3" />
                Upcoming
            </span>
        );
    }
    return (
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-stone-100 text-stone-600 text-xs font-semibold ring-1 ring-stone-200/60">
            <ShieldCheck className="w-3 h-3" />
            Completed
        </span>
    );
}
