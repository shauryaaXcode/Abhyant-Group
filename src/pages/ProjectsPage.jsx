import React, { useState, useMemo } from 'react';
import { Search, Filter, Compass, MapPin, ShieldCheck, Calculator } from 'lucide-react';
import { PROJECTS_DATA } from '../data/projectsData';
import { ProjectCard } from '../components/ProjectCard';

export const ProjectsPage = ({
  onOpenSiteVisit,
  onOpenEmiCalculator,
  onOpenProjectDetails,
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedStatus, setSelectedStatus] = useState('All');
  const [selectedLocation, setSelectedLocation] = useState('All');
  const [maxBudget, setMaxBudget] = useState(3000000);

  const locations = ['All', 'Gosainganj, Lucknow'];
  const statuses = ['All', 'Ready to Register', 'Fast Selling', 'Under Development'];

  const filteredProjects = useMemo(() => {
    return PROJECTS_DATA.filter((project) => {
      const textToSearch = `${project.name} ${project.location} ${project.shortAbout || ''} ${project.aboutProject || ''} ${project.description || ''}`.toLowerCase();
      const matchesSearch = textToSearch.includes(searchQuery.toLowerCase());

      const matchesStatus =
        selectedStatus === 'All' || project.status === selectedStatus;

      const matchesLocation =
        selectedLocation === 'All' ||
        project.location.toLowerCase().includes(selectedLocation.toLowerCase());

      const matchesBudget = project.startingPriceNum <= maxBudget;

      return matchesSearch && matchesStatus && matchesLocation && matchesBudget;
    });
  }, [searchQuery, selectedStatus, selectedLocation, maxBudget]);

  return (
    <div className="pt-24 pb-20 bg-[#F4F7F5] min-h-screen">
      {/* Page Header Banner */}
      <div className="bg-[#042F24] text-white py-14 px-4 sm:px-6 lg:px-8 relative overflow-hidden border-b border-[#C5A059]/30 geometric-grid-pattern-dark">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-[#064E3B] border border-[#C5A059]/40 text-[#DFC07A] text-xs font-semibold mb-3">
              <ShieldCheck className="w-3.5 h-3.5 text-[#C5A059]" />
              <span>Verified Clear Titles & Immediate Registry</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display tracking-tight text-white">
              Residential Plotted <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#DFC07A] to-[#C5A059]">Townships</span>
            </h1>
            <p className="mt-3 text-slate-300 text-sm sm:text-base leading-relaxed">
              Explore residential plot developments across Lucknow's high growth corridors with wide roads, electricity, immediate registry, and clear documentation.
            </p>
          </div>

          <div className="mt-6 flex flex-wrap items-center gap-3">
            <button
              onClick={() => onOpenEmiCalculator && onOpenEmiCalculator(899000)}
              className="px-4.5 py-2.5 bg-white/10 hover:bg-white/20 text-white text-xs font-bold rounded-md border border-[#C5A059]/40 flex items-center gap-2 transition-colors cursor-pointer"
            >
              <Calculator className="w-4 h-4 text-[#DFC07A]" />
              <span>Calculate Plot EMI</span>
            </button>

            <button
              onClick={() => onOpenSiteVisit && onOpenSiteVisit()}
              className="px-5 py-2.5 bg-[#C5A059] hover:bg-[#DFC07A] text-[#042F24] text-xs font-bold rounded-md flex items-center gap-2 shadow-md transition-colors cursor-pointer"
            >
              <span>Book Free Site Visit</span>
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6 relative z-20">
        {/* Search and Filters Bar */}
        <div className="bg-white rounded-lg shadow-lg border border-[#064E3B]/15 p-4 sm:p-5 mb-10 space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-3">
            {/* Search Input */}
            <div className="md:col-span-5 relative">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
              <input
                type="text"
                placeholder="Search by project name, highway or location..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 text-xs sm:text-sm bg-[#F4F7F5] border border-[#064E3B]/20 rounded-md focus:outline-none focus:ring-2 focus:ring-[#064E3B] focus:bg-white transition-all"
              />
            </div>

            {/* Location Select */}
            <div className="md:col-span-3">
              <select
                value={selectedLocation}
                onChange={(e) => setSelectedLocation(e.target.value)}
                className="w-full px-3 py-2 text-xs sm:text-sm bg-[#F4F7F5] border border-[#064E3B]/20 rounded-md focus:outline-none focus:ring-2 focus:ring-[#064E3B]"
              >
                <option value="All">All Locations in Lucknow</option>
                {locations.filter((l) => l !== 'All').map((loc) => (
                  <option key={loc} value={loc}>
                    {loc}
                  </option>
                ))}
              </select>
            </div>

            {/* Status Select */}
            <div className="md:col-span-4">
              <select
                value={selectedStatus}
                onChange={(e) => setSelectedStatus(e.target.value)}
                className="w-full px-3 py-2 text-xs sm:text-sm bg-[#F4F7F5] border border-[#064E3B]/20 rounded-md focus:outline-none focus:ring-2 focus:ring-[#064E3B]"
              >
                <option value="All">All Project Statuses</option>
                {statuses.filter((s) => s !== 'All').map((st) => (
                  <option key={st} value={st}>
                    {st}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Budget Range and Quick Status Filter Tags */}
          <div className="flex flex-wrap items-center justify-between gap-4 pt-3 border-t border-slate-100 text-xs">
            <div className="flex items-center gap-2">
              <span className="text-slate-500 font-medium">Max Starting Price:</span>
              <span className="font-extrabold text-[#064E3B] bg-[#064E3B]/10 px-2.5 py-1 rounded-md border border-[#064E3B]/20">
                Up to ₹{(maxBudget / 100000).toFixed(2)} Lakh
              </span>
              <input
                type="range"
                min="500000"
                max="2500000"
                step="50000"
                value={maxBudget}
                onChange={(e) => setMaxBudget(Number(e.target.value))}
                className="w-32 sm:w-44 accent-[#064E3B] cursor-pointer"
              />
            </div>

            <div className="text-slate-500">
              Showing <strong className="text-slate-900">{filteredProjects.length}</strong> of{' '}
              <strong>{PROJECTS_DATA.length}</strong> projects
            </div>
          </div>
        </div>

        {/* Projects Grid */}
        {filteredProjects.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {filteredProjects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                onOpenSiteVisit={onOpenSiteVisit}
                onOpenProjectDetails={onOpenProjectDetails}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-16 bg-white rounded-lg border border-slate-200 p-8 space-y-3">
            <Compass className="w-12 h-12 text-slate-300 mx-auto" />
            <h3 className="text-lg font-bold text-slate-800">No Projects Found</h3>
            <p className="text-xs text-slate-500 max-w-sm mx-auto">
              We couldn't find any projects matching your filter criteria. Try resetting your price filter or search query.
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedStatus('All');
                setSelectedLocation('All');
                setMaxBudget(3000000);
              }}
              className="px-4 py-2 bg-[#064E3B] text-white font-semibold text-xs rounded-md shadow-xs cursor-pointer"
            >
              Reset All Filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
