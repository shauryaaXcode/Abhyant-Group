import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { PROJECTS_DATA } from '../data/projectsData';
import { ProjectHeroShowcase } from '../components/ProjectDetail/ProjectHeroShowcase';
import { ProjectOverviewCards } from '../components/ProjectDetail/ProjectOverviewCards';
import { ProjectMasterLayoutSection } from '../components/ProjectDetail/ProjectMasterLayoutSection';
import { ProjectNearbyDistances } from '../components/ProjectDetail/ProjectNearbyDistances';
import { ProjectAdvisorSidebar } from '../components/ProjectDetail/ProjectAdvisorSidebar';

export const ProjectDetailPage = ({
  onOpenSiteVisit,
  onOpenEmiCalculator,
  onSelectPlot,
}) => {
  const { id } = useParams();
  const project = PROJECTS_DATA.find((p) => p.id === id) || PROJECTS_DATA[0];

  return (
    <div className="pt-24 pb-20 bg-[#F4F7F5] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Navigation Breadcrumb */}
        <div className="mb-6 flex items-center justify-between">
          <Link
            to="/projects"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#064E3B] hover:text-[#042F24] bg-white px-3 py-1.5 rounded-lg border border-[#064E3B]/20 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to All Projects</span>
          </Link>

          <div className="flex items-center gap-2">
            <span className="text-xs text-slate-500 font-medium">Status:</span>
            <span className="text-xs font-bold text-[#064E3B] bg-white px-2.5 py-1 rounded-md border border-[#064E3B]/20 shadow-xs">
              {project.status}
            </span>
          </div>
        </div>

        {/* Project Main Hero Showcase */}
        <ProjectHeroShowcase
          project={project}
          onOpenSiteVisit={onOpenSiteVisit}
          onOpenEmiCalculator={onOpenEmiCalculator}
        />

        {/* Detailed Content & Sidebar Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Main Info Column (8 cols) */}
          <div className="lg:col-span-8 space-y-8">
            {/* About Project & Metrics */}
            <ProjectOverviewCards project={project} />

            {/* Master Layout Plan & Plot Selector */}
            <ProjectMasterLayoutSection
              project={project}
              onSelectPlot={onSelectPlot}
            />

            {/* Strategic Landmarks */}
            <ProjectNearbyDistances project={project} />
          </div>

          {/* Right Sidebar Form & Sales Advisor (4 cols) */}
          <ProjectAdvisorSidebar project={project} />

        </div>

      </div>
    </div>
  );
};
