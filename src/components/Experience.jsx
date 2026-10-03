import React from 'react';
import { Trophy, Award, GraduationCap, MapPin, FileBadge } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Experience() {
  const { achievements, certifications, education } = portfolioData;


  return (
    <section id="experience" className="py-20 md:py-28 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-950/60 border border-amber-800/60 text-amber-300 text-xs font-semibold uppercase tracking-wider mb-3">
            <Trophy className="w-3.5 h-3.5" />
            <span>Honors & Qualifications</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Achievements, Certifications & Education
          </h2>
          <p className="mt-3 text-slate-400 max-w-xl text-center text-sm sm:text-base">
            Recognitions from Smart India Hackathon 2026, competitive programs, professional simulations, and academic excellence.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-amber-500 via-indigo-500 to-cyan-400 rounded-full mt-4" />
        </div>

        {/* Part 1: Key Honors & Hackathon Achievements Grid */}
        <div className="mb-16">
          <div className="flex items-center gap-2.5 mb-6">
            <div className="p-2 rounded-xl bg-amber-500/20 text-amber-400 border border-amber-500/30">
              <Trophy className="w-5 h-5" />
            </div>
            <h3 className="text-xl font-bold text-white">Competitive Honors & Achievements</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {achievements.map((item, idx) => (
              <div
                key={idx}
                className="p-6 sm:p-7 rounded-3xl bg-gradient-to-br from-amber-950/20 via-slate-900/60 to-slate-900/40 border border-amber-500/30 hover:border-amber-500/60 transition-all duration-300 shadow-xl shadow-black/20 group hover:-translate-y-1"
              >
                <div className="flex items-start justify-between gap-3 mb-3">
                  <span className="px-3 py-1 rounded-full text-xs font-bold bg-amber-500/20 border border-amber-500/40 text-amber-300">
                    {item.tag}
                  </span>
                  <span className="text-xs font-mono text-slate-400 bg-slate-950/60 px-2.5 py-1 rounded-lg border border-slate-800">
                    {item.year}
                  </span>
                </div>

                <h4 className="text-lg sm:text-xl font-bold text-white group-hover:text-amber-300 transition-colors">
                  {item.title}
                </h4>

                <div className="text-xs font-semibold text-indigo-400 mt-1">
                  Issued by: {item.issuer}
                </div>

                <p className="mt-3 text-sm text-slate-300 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Part 2: Certifications */}
        <div className="mb-16">
          <div className="flex items-center gap-2.5 mb-6">
            <div className="p-2 rounded-xl bg-indigo-500/20 text-indigo-400 border border-indigo-500/30">
              <FileBadge className="w-5 h-5" />
            </div>
            <h3 className="text-xl font-bold text-white">Industry Certifications & Job Simulations</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {certifications.map((cert, idx) => (
              <div
                key={idx}
                className="p-6 rounded-3xl bg-slate-900/60 border border-slate-800/80 hover:border-indigo-500/40 transition-all duration-200 backdrop-blur-sm flex flex-col justify-between shadow-lg shadow-black/20 group"
              >
                <div>
                  <div className="flex items-center justify-between text-xs text-slate-400 mb-3">
                    <span className="font-semibold text-indigo-400 bg-indigo-950/60 border border-indigo-900/60 px-2.5 py-0.5 rounded-full">
                      {cert.organization}
                    </span>
                    <span className="font-mono text-slate-400">{cert.date}</span>
                  </div>

                  <h4 className="text-base font-bold text-white group-hover:text-indigo-300 transition-colors">
                    {cert.name}
                  </h4>

                  <p className="mt-2.5 text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {cert.details}
                  </p>
                </div>

                <div className="mt-4 pt-4 border-t border-slate-800/80 flex flex-wrap gap-1.5">
                  {cert.skills.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="px-2 py-0.5 rounded-md text-[10px] font-medium bg-slate-800 text-slate-300 border border-slate-700/60"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Part 3: Education History */}
        <div>
          <div className="flex items-center gap-2.5 mb-6">
            <div className="p-2 rounded-xl bg-cyan-500/20 text-cyan-400 border border-cyan-500/30">
              <GraduationCap className="w-5 h-5" />
            </div>
            <h3 className="text-xl font-bold text-white">Academic Journey</h3>
          </div>

          <div className="space-y-4">
            {education.map((edu, idx) => (
              <div
                key={idx}
                className="p-6 sm:p-7 rounded-3xl bg-slate-900/60 border border-slate-800/80 hover:border-slate-750 transition-all duration-200 backdrop-blur-sm shadow-lg shadow-black/20 flex flex-col sm:flex-row sm:items-center justify-between gap-4"
              >
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xs font-semibold px-2.5 py-0.5 rounded-md bg-cyan-950/60 border border-cyan-800/40 text-cyan-300">
                      {edu.period}
                    </span>
                    <span className="text-xs text-slate-400 flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-rose-400" />
                      {edu.location}
                    </span>
                  </div>

                  <h4 className="text-lg font-bold text-white mt-1">
                    {edu.degree}
                  </h4>

                  <div className="text-sm font-semibold text-indigo-400 mt-0.5">
                    {edu.institution}
                  </div>

                  {edu.details && (
                    <p className="text-xs sm:text-sm text-slate-300 mt-2 max-w-2xl leading-relaxed">
                      {edu.details}
                    </p>
                  )}
                </div>

                <div className="flex-shrink-0 sm:text-right">
                  <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-2xl bg-emerald-950/60 border border-emerald-500/40 text-sm font-bold text-emerald-300">
                    <Award className="w-4 h-4 text-emerald-400" />
                    <span>{edu.grade}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
