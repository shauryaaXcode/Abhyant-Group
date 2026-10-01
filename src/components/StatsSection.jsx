import React from 'react';
import { Users, FolderGit2, ShieldCheck, Award, ThumbsUp } from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';
import { ScrollReveal } from './common/ScrollReveal';

export const StatsSection = () => {
  const stats = [
    {
      icon: Users,
      value: COMPANY_INFO.stats.happyCustomers,
      label: 'Happy Customers',
    },
    {
      icon: FolderGit2,
      value: COMPANY_INFO.stats.activeProjects,
      label: 'Active Projects',
    },
    {
      icon: ShieldCheck,
      value: COMPANY_INFO.stats.legalPlotsPercentage,
      label: 'Legal Plots',
    },
    {
      icon: Award,
      value: COMPANY_INFO.stats.yearsExperience,
      label: 'Years Experience',
    },
    {
      icon: ThumbsUp,
      value: COMPANY_INFO.stats.customerSatisfaction,
      label: 'Customer Satisfaction',
    },
  ];

  return (
    <div className="relative z-20 -mt-8 sm:-mt-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <ScrollReveal
        animation="fade-up"
        duration={700}
        threshold={0.1}
        className="w-full"
      >
        <div
          id="statistics-bar"
          className="bg-white rounded-lg shadow-xl shadow-[#042F24]/8 border border-[#064E3B]/15 p-5 sm:p-6 lg:p-7"
        >
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 lg:gap-6 divide-y sm:divide-y-0 sm:divide-x divide-[#064E3B]/10">
            {stats.map((stat, idx) => {
              const Icon = stat.icon;
              return (
                <div
                  key={idx}
                  className={`flex items-center gap-3.5 ${
                    idx > 0 ? 'pt-3 sm:pt-0 sm:pl-4 lg:pl-6' : ''
                  } ${idx === 4 ? 'col-span-2 sm:col-span-1' : ''}`}
                >
                  <div className="w-11 h-11 rounded-lg bg-[#F4F7F5] flex items-center justify-center shrink-0 border border-[#C5A059]/40 text-[#064E3B]">
                    <Icon className="w-5 h-5 text-[#064E3B]" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xl sm:text-2xl lg:text-[26px] font-extrabold text-[#042F24] font-display tracking-tight leading-none">
                      {stat.value}
                    </span>
                    <span className="text-xs font-medium text-slate-500 mt-1 leading-tight">
                      {stat.label}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </ScrollReveal>
    </div>
  );
};
