import React from 'react';
import { User, Cpu, Zap, ShieldCheck, HeartHandshake, Sparkles, Terminal } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function About() {
  const { personal } = portfolioData;

  const highlights = [
    {
      icon: <Zap className="w-5 h-5 text-amber-400" />,
      title: "AI & Geospatial Intelligence",
      desc: "Practical experience analyzing thermal data from NASA FIRMS, satellite imagery (Sentinel-2, Landsat), and OpenStreetMap."
    },
    {
      icon: <ShieldCheck className="w-5 h-5 text-emerald-400" />,
      title: "Algorithmic Problem Solving",
      desc: "Continuously strengthening Data Structures & Algorithms (DSA) alongside object-oriented programming in C++, Java, and Python."
    },
    {
      icon: <Cpu className="w-5 h-5 text-indigo-400" />,
      title: "Full-Stack & Data Tooling",
      desc: "Skilled in Python, PyTorch/TensorFlow, web technologies (HTML, CSS, JS), VS Code, and collaborative Google Colab workflows."
    },
    {
      icon: <HeartHandshake className="w-5 h-5 text-rose-400" />,
      title: "Hackathon-Tested Leadership",
      desc: "Selected for Smart India Hackathon (SIH) 2026 and chosen as 1 of 18 from 500+ applicants for the ISEP program."
    }
  ];

  return (
    <section id="about" className="py-20 md:py-28 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-950/60 border border-indigo-800/60 text-indigo-300 text-xs font-semibold uppercase tracking-wider mb-3">
            <User className="w-3.5 h-3.5" />
            <span>About Me</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Solving Real-World Problems Through Data & AI
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-indigo-500 to-cyan-400 rounded-full mt-4" />
        </div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Personal Narrative Card */}
          <div className="lg:col-span-7 bg-slate-900/60 border border-slate-800/80 rounded-3xl p-6 sm:p-8 backdrop-blur-sm relative overflow-hidden shadow-xl shadow-black/20">
            <div className="absolute top-0 right-0 w-48 h-48 bg-indigo-500/10 rounded-full blur-2xl pointer-events-none" />

            <div className="flex items-center gap-3 mb-6">
              <div className="p-2.5 rounded-xl bg-slate-800/80 border border-slate-700/60 text-indigo-400">
                <Terminal className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white">Who I Am</h3>
                <p className="text-xs text-slate-400">Data Science Undergraduate & AI Researcher</p>
              </div>
            </div>

            <p className="text-slate-300 text-base leading-relaxed mb-4">
              Hello! I'm <strong className="text-white font-semibold">{personal.name}</strong>, a Computer Science (Data Science) undergraduate at Sri Venkateshwara College of Engineering, Bengaluru.
            </p>

            <p className="text-slate-300 text-base leading-relaxed mb-4">
              {personal.bio}
            </p>

            <p className="text-slate-300 text-base leading-relaxed">
              I am driven by projects that bridge deep technology with practical social impact—such as using satellite telemetry to detect industrial fires in real-time and forecasting complex dynamic patterns using machine learning.
            </p>

            {/* Quick Fact Tags */}
            <div className="mt-8 pt-6 border-t border-slate-800/80 grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
              <div className="flex items-center gap-2 text-slate-300">
                <Sparkles className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                <span><strong className="text-slate-200">Major:</strong> B.E. CSE (Data Science)</span>
              </div>
              <div className="flex items-center gap-2 text-slate-300">
                <Sparkles className="w-4 h-4 text-indigo-400 flex-shrink-0" />
                <span><strong className="text-slate-200">College:</strong> SVCE Bengaluru (3rd Sem)</span>
              </div>
              <div className="flex items-center gap-2 text-slate-300">
                <Sparkles className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span><strong className="text-slate-200">Hackathon:</strong> SIH 2026 Nominee</span>
              </div>
              <div className="flex items-center gap-2 text-slate-300">
                <Sparkles className="w-4 h-4 text-violet-400 flex-shrink-0" />
                <span><strong className="text-slate-200">Focus:</strong> AI, Geospatial & DSA</span>
              </div>
            </div>
          </div>


          {/* Right Column: Values & Engineering Pillars */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            {highlights.map((item, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-slate-900/40 border border-slate-800/80 hover:border-slate-700/80 hover:bg-slate-900/70 transition-all duration-200 backdrop-blur-sm group"
              >
                <div className="flex items-start gap-3.5">
                  <div className="p-2.5 rounded-xl bg-slate-800/90 border border-slate-700/50 group-hover:scale-110 transition-transform duration-200 flex-shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="text-base font-semibold text-white group-hover:text-indigo-300 transition-colors">
                      {item.title}
                    </h4>
                    <p className="mt-1 text-sm text-slate-400 leading-relaxed">
                      {item.desc}
                    </p>
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
