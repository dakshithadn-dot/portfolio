import React, { useState } from 'react';
import {
  Code, Globe, FileCode, Palette, Layout, Cpu,
  Server, Layers, Terminal, Workflow, Boxes,
  Database, HardDrive, Zap, Key,
  GitBranch, Container, Cloud, Activity, Package,
  Wrench, CheckCircle2
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Skills() {
  const { skills } = portfolioData;
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', ...skills.map((s) => s.category)];

  const getSkillIcon = (iconName) => {
    const iconProps = { className: "w-5 h-5 text-indigo-400 group-hover:text-cyan-300 transition-colors" };
    switch (iconName) {
      case 'Code': return <Code {...iconProps} />;
      case 'Globe': return <Globe {...iconProps} />;
      case 'FileCode': return <FileCode {...iconProps} />;
      case 'Palette': return <Palette {...iconProps} />;
      case 'Layout': return <Layout {...iconProps} />;
      case 'Cpu': return <Cpu {...iconProps} />;
      case 'Server': return <Server {...iconProps} />;
      case 'Layers': return <Layers {...iconProps} />;
      case 'Terminal': return <Terminal {...iconProps} />;
      case 'Workflow': return <Workflow {...iconProps} />;
      case 'Boxes': return <Boxes {...iconProps} />;
      case 'Database': return <Database {...iconProps} />;
      case 'HardDrive': return <HardDrive {...iconProps} />;
      case 'Zap': return <Zap {...iconProps} />;
      case 'Key': return <Key {...iconProps} />;
      case 'GitBranch': return <GitBranch {...iconProps} />;
      case 'Container': return <Container {...iconProps} />;
      case 'Cloud': return <Cloud {...iconProps} />;
      case 'Activity': return <Activity {...iconProps} />;
      case 'Package': return <Package {...iconProps} />;
      default: return <CheckCircle2 {...iconProps} />;
    }
  };

  const getLevelBadgeColor = (level) => {
    switch (level) {
      case 'Expert':
        return 'text-emerald-400 bg-emerald-950/50 border-emerald-800/40';
      case 'Advanced':
        return 'text-indigo-400 bg-indigo-950/50 border-indigo-800/40';
      case 'Intermediate':
        return 'text-cyan-400 bg-cyan-950/50 border-cyan-800/40';
      default:
        return 'text-slate-400 bg-slate-800 border-slate-700';
    }
  };

  // Filter skills based on selected category
  const filteredCategories = selectedCategory === 'All'
    ? skills
    : skills.filter((s) => s.category === selectedCategory);

  return (
    <section id="skills" className="py-20 md:py-28 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-800/60 text-cyan-300 text-xs font-semibold uppercase tracking-wider mb-3">
            <Wrench className="w-3.5 h-3.5" />
            <span>Technical Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Skills & Modern Stack
          </h2>
          <p className="mt-3 text-slate-400 max-w-xl text-center text-sm sm:text-base">
            Technologies and frameworks I specialize in to build end-to-end, production-grade applications.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-indigo-500 to-cyan-400 rounded-full mt-4" />
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all duration-200 ${
                selectedCategory === cat
                  ? 'bg-gradient-to-r from-indigo-600 to-violet-600 text-white shadow-lg shadow-indigo-600/25 scale-105'
                  : 'bg-slate-900/60 text-slate-400 border border-slate-800/80 hover:bg-slate-800/60 hover:text-slate-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Categories & Skill Cards Grid */}
        <div className="space-y-10">
          {filteredCategories.map((catGroup, idx) => (
            <div key={idx} className="space-y-4">
              <h3 className="text-lg font-bold text-slate-200 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-indigo-500"></span>
                <span>{catGroup.category}</span>
                <span className="text-xs font-normal text-slate-500 ml-1">
                  ({catGroup.items.length} technologies)
                </span>
              </h3>

              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3.5">
                {catGroup.items.map((skill, sIdx) => (
                  <div
                    key={sIdx}
                    className="p-3.5 rounded-2xl bg-slate-900/50 border border-slate-800/80 hover:border-indigo-500/40 hover:bg-slate-900/90 transition-all duration-200 group flex flex-col justify-between backdrop-blur-sm hover:-translate-y-1 hover:shadow-lg hover:shadow-indigo-500/10"
                  >
                    <div className="flex items-center justify-between mb-3">
                      <div className="p-2 rounded-xl bg-slate-800/80 border border-slate-700/50 group-hover:scale-105 transition-transform">
                        {getSkillIcon(skill.icon)}
                      </div>
                      <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full border ${getLevelBadgeColor(skill.level)}`}>
                        {skill.level}
                      </span>
                    </div>

                    <div>
                      <h4 className="text-sm font-semibold text-slate-200 group-hover:text-white transition-colors">
                        {skill.name}
                      </h4>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
