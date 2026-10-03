import React from 'react';
import { ArrowDown, FileText, Send, Sparkles, MapPin, Mail } from 'lucide-react';
import { GithubIcon, LinkedinIcon, TwitterIcon } from './SocialIcons';
import { portfolioData } from '../data/portfolioData';


export default function Hero() {
  const { personal, socials, stats } = portfolioData;

  const getSocialIcon = (iconName) => {
    switch (iconName) {
      case 'Github':
        return <GithubIcon className="w-5 h-5" />;
      case 'Linkedin':
        return <LinkedinIcon className="w-5 h-5" />;
      case 'Mail':
        return <Mail className="w-5 h-5" />;
      case 'Twitter':
        return <TwitterIcon className="w-5 h-5" />;
      default:
        return <Sparkles className="w-5 h-5" />;
    }
  };


  return (
    <section id="hero" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Background Decorative Glow Orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-tr from-indigo-600/20 via-violet-600/15 to-cyan-500/10 rounded-full blur-3xl pointer-events-none -z-10 animate-glow" />
      <div className="absolute top-1/3 left-10 w-72 h-72 bg-blue-600/10 rounded-full blur-2xl pointer-events-none -z-10" />
      <div className="absolute top-1/2 right-10 w-80 h-80 bg-violet-600/10 rounded-full blur-2xl pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center">
          {/* Availability Status Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900/80 border border-emerald-500/30 text-emerald-400 text-xs sm:text-sm font-medium mb-6 shadow-lg shadow-emerald-950/40">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
            </span>
            <span>{personal.status}</span>
          </div>

          {/* Intro Heading */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white max-w-4xl leading-[1.15]">
            Hi, I'm{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-violet-400 to-cyan-400">
              {personal.name}
            </span>
            .
          </h1>

          <p className="mt-4 text-xl sm:text-2xl font-semibold text-slate-300 max-w-2xl">
            {personal.title}
          </p>

          <p className="mt-4 text-base sm:text-lg text-slate-400 max-w-2xl leading-relaxed">
            {personal.tagline}
          </p>

          {/* Location Chip */}
          <div className="mt-3 flex items-center gap-1.5 text-xs sm:text-sm text-slate-400">
            <MapPin className="w-4 h-4 text-rose-400" />
            <span>{personal.location}</span>
          </div>

          {/* Action CTAs */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-white bg-gradient-to-r from-indigo-600 via-indigo-500 to-violet-600 hover:from-indigo-500 hover:to-violet-500 shadow-xl shadow-indigo-600/30 hover:shadow-indigo-600/50 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
            >
              <span>Explore My Work</span>
              <ArrowDown className="w-4 h-4" />
            </a>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-slate-200 bg-slate-900/90 hover:bg-slate-800 border border-slate-700 hover:border-slate-600 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 shadow-lg shadow-black/30"
            >
              <Send className="w-4 h-4 text-indigo-400" />
              <span>Contact Me</span>
            </a>

            <a
              href={personal.resumeUrl}
              className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl font-medium text-slate-300 bg-slate-900/50 hover:bg-slate-800/80 border border-slate-800 hover:border-slate-700 transition-all duration-200"
              title="Download or view resume"
            >
              <FileText className="w-4 h-4 text-cyan-400" />
              <span>Resume</span>
            </a>
          </div>

          {/* Social Links Bar */}
          <div className="mt-10 flex items-center gap-3">
            {socials.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noreferrer"
                aria-label={social.name}
                className="p-3 rounded-xl bg-slate-900/70 border border-slate-800 text-slate-400 hover:text-white hover:bg-slate-800/90 hover:border-slate-700 hover:scale-110 active:scale-95 transition-all duration-200 shadow-md shadow-black/20"
              >
                {getSocialIcon(social.icon)}
              </a>
            ))}
          </div>

          {/* Quick Metrics / Stats Grid */}
          <div className="mt-16 w-full max-w-4xl grid grid-cols-2 sm:grid-cols-4 gap-4">
            {stats.map((stat, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-slate-900/50 border border-slate-800/80 backdrop-blur-sm hover:border-slate-700 transition-all duration-200 text-center"
              >
                <div className="text-2xl sm:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">
                  {stat.value}
                </div>
                <div className="mt-1 text-xs sm:text-sm font-medium text-slate-400">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
