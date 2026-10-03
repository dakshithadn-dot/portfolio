import React, { useState } from 'react';
import { ExternalLink, FolderGit2, Star } from 'lucide-react';
import { GithubIcon } from './SocialIcons';
import { portfolioData } from '../data/portfolioData';


export default function Projects() {
  const { projects } = portfolioData;
  const [filter, setFilter] = useState('All');

  const categories = ['All', ...new Set(projects.map((p) => p.category))];

  const filteredProjects = filter === 'All'
    ? projects
    : projects.filter((p) => p.category.toLowerCase() === filter.toLowerCase());

  return (
    <section id="projects" className="py-20 md:py-28 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-950/60 border border-violet-800/60 text-violet-300 text-xs font-semibold uppercase tracking-wider mb-3">
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>Applied Engineering & Research</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Featured Projects & Hackathon Works
          </h2>
          <p className="mt-3 text-slate-400 max-w-xl text-center text-sm sm:text-base">
            Real-world systems applying AI, machine learning, and satellite geospatial data.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-indigo-500 to-cyan-400 rounded-full mt-4" />
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all duration-200 ${
                filter === cat
                  ? 'bg-gradient-to-r from-indigo-600 to-violet-600 text-white shadow-lg shadow-indigo-600/25 scale-105'
                  : 'bg-slate-900/60 text-slate-400 border border-slate-800/80 hover:bg-slate-800/60 hover:text-slate-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="flex flex-col rounded-3xl bg-slate-900/60 border border-slate-800/80 hover:border-indigo-500/40 overflow-hidden group hover:-translate-y-1.5 transition-all duration-300 shadow-xl shadow-black/20"
            >
              {/* Project Image & Overlay */}
              <div className="relative h-56 w-full overflow-hidden bg-slate-950">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />

                {/* Category & Badges */}
                <div className="absolute top-3 left-3 right-3 flex flex-wrap items-center justify-between gap-2">
                  <span className="px-3 py-1 rounded-full text-xs font-semibold bg-slate-950/80 border border-slate-700/80 text-cyan-300 backdrop-blur-md">
                    {project.category}
                  </span>

                  {project.badge && (
                    <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-semibold bg-indigo-950/90 border border-indigo-500/50 text-indigo-300 backdrop-blur-md shadow-md shadow-indigo-950">
                      <Star className="w-3.5 h-3.5 fill-indigo-400 text-indigo-400" />
                      <span>{project.badge}</span>
                    </span>
                  )}
                </div>

                {project.period && (
                  <div className="absolute bottom-3 right-3 text-xs text-slate-300 bg-slate-900/80 px-2.5 py-1 rounded-lg backdrop-blur-md border border-slate-800">
                    {project.period}
                  </div>
                )}
              </div>

              {/* Card Body */}
              <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-indigo-300 transition-colors">
                    {project.title}
                  </h3>

                  <p className="mt-3 text-sm text-slate-300 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Workflow Pipeline */}
                  {project.workflow && (
                    <div className="mt-4 p-3 rounded-2xl bg-slate-950/70 border border-slate-800/80">
                      <div className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider mb-1">
                        Architecture & Workflow
                      </div>
                      <div className="text-xs font-mono text-cyan-300">
                        {project.workflow}
                      </div>
                    </div>
                  )}

                  {/* Highlight Metrics */}
                  {project.metrics && (
                    <div className="mt-3 px-3 py-1.5 rounded-xl bg-indigo-950/40 border border-indigo-800/40 text-xs font-medium text-indigo-300 inline-block">
                      {project.metrics}
                    </div>
                  )}

                  {/* Tech Stack Pills */}
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {project.technologies.map((tech, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2.5 py-1 rounded-lg text-xs font-medium bg-slate-800/80 text-slate-300 border border-slate-700/60"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>


                {/* Card Action Links */}
                <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between gap-3">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-300 hover:text-white px-3 py-2 rounded-xl bg-slate-800/60 hover:bg-slate-800 border border-slate-700/60 transition-colors"
                  >
                    <GithubIcon className="w-4 h-4" />
                    <span>Source Code</span>
                  </a>

                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-white px-3.5 py-2 rounded-xl bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-500 hover:to-violet-500 shadow-md shadow-indigo-600/30 transition-all"
                  >
                    <span>Live Demo</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
