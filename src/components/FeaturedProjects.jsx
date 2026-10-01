import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, ArrowRight } from 'lucide-react';
import { PROJECTS_DATA } from '../data/projectsData';
import { ProjectCard } from './ProjectCard';
import { ScrollReveal } from './common/ScrollReveal';

export const FeaturedProjects = ({ onOpenSiteVisit, onOpenProjectDetails }) => {
  // Exactly 3 featured project cards arranged in a clean 3-column responsive grid
  const featuredProjects = PROJECTS_DATA.slice(0, 3);

  return (
    <section id="featured-projects-section" className="py-16 sm:py-24 bg-[#F4F7F5] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <ScrollReveal animation="fade-up" duration={700}>
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-[#064E3B]/10 text-[#064E3B] text-xs font-bold uppercase tracking-wider mb-2.5 border border-[#C5A059]/40">
                <Sparkles className="w-3.5 h-3.5 text-[#C5A059]" />
                <span>Investment Hotspots</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#042F24] font-display tracking-tight">
                Featured <span className="text-[#064E3B]">Projects</span>
              </h2>

              <p className="mt-2.5 text-slate-600 text-sm sm:text-base">
                Explore our prime plotted developments across Lucknow's highest-growth corridors.
              </p>
            </div>

            <div className="shrink-0">
              <Link
                to="/projects"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-white hover:bg-[#064E3B] text-[#064E3B] hover:text-white font-bold text-sm rounded-md border border-[#064E3B]/20 hover:border-[#C5A059] shadow-xs hover:shadow-md transition-all group"
              >
                <span>View All Projects</span>
                <ArrowRight className="w-4 h-4 text-[#C5A059] group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </ScrollReveal>

        {/* Exactly 3 Projects Grid (grid-cols-1 md:grid-cols-3) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {featuredProjects.map((project, idx) => (
            <ScrollReveal
              key={project.id}
              animation="fade-up"
              delay={idx * 120}
              duration={750}
              className="h-full"
            >
              <ProjectCard
                project={project}
                onOpenSiteVisit={onOpenSiteVisit}
                onOpenProjectDetails={onOpenProjectDetails}
              />
            </ScrollReveal>
          ))}
        </div>

        {/* Bottom View All Button */}
        <ScrollReveal animation="fade-up" delay={200} duration={650}>
          <div className="mt-12 text-center">
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#064E3B] hover:bg-[#042F24] text-white font-bold text-base rounded-md shadow-md hover:shadow-lg border border-[#C5A059]/40 transition-all hover:-translate-y-0.5"
            >
              <span>View All Projects</span>
              <ArrowRight className="w-4 h-4 text-[#DFC07A]" />
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};
