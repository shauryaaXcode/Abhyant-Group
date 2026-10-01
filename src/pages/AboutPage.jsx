import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Eye, Compass, HeartHandshake } from 'lucide-react';
import { ScrollReveal } from '../components/common/ScrollReveal';

export const AboutPage = () => {
  return (
    <div className="bg-white min-h-screen text-slate-800 selection:bg-[#064E3B] selection:text-white">
      {/* 1. HERO SECTION */}
      <section className="pt-32 pb-16 sm:pt-36 sm:pb-20 lg:pt-40 lg:pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <ScrollReveal animation="fade-up" duration={650}>
          <div className="max-w-3xl">
            <span className="text-xs sm:text-sm font-bold tracking-[0.2em] text-[#C5A059] uppercase block mb-4">
              About Us
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-normal text-[#042F24] tracking-tight leading-[1.15]">
              About Abhyant Group
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-slate-600 font-light leading-relaxed">
              &ldquo;We believe finding the right piece of land should feel simple, clear and stress-free.&rdquo;
            </p>
            <div className="mt-8 flex flex-wrap gap-4 items-center">
              <Link
                to="/projects"
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full bg-[#064E3B] text-white font-medium text-sm hover:bg-[#042F24] transition-colors duration-200 shadow-sm group"
              >
                <span>Explore Our Projects</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform duration-200 text-[#DFC07A]" />
              </Link>
            </div>
          </div>
        </ScrollReveal>

        {/* Premium land / plotted development hero image */}
        <ScrollReveal animation="fade-up" delay={150} duration={750}>
          <div className="mt-12 sm:mt-16 rounded-3xl overflow-hidden shadow-sm border border-slate-200/80 bg-slate-100 aspect-[16/9] sm:aspect-[21/9] relative">
            <img
              src="/Abhyant City.jpeg"
              alt="Plotted land development by Abhyant Group in Lucknow"
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent pointer-events-none" />
          </div>
        </ScrollReveal>
      </section>

      {/* 2. WHO WE ARE */}
      <section className="py-16 sm:py-24 bg-[#FAFBF9] border-y border-slate-200/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            {/* Text Side */}
            <div className="lg:col-span-6 space-y-6">
              <ScrollReveal animation="fade-up" duration={650}>
                <span className="text-xs sm:text-sm font-bold tracking-[0.2em] text-[#C5A059] uppercase block">
                  Who We Are
                </span>
                <h2 className="text-3xl sm:text-4xl font-serif text-[#042F24] font-normal tracking-tight mt-2">
                  A Little About Us
                </h2>
                <div className="mt-6 space-y-5 text-slate-600 text-base sm:text-lg leading-relaxed font-normal">
                  <p>
                    Abhyant Group is focused on developing and offering thoughtfully planned plots in and around Gosainganj, Lucknow. Our aim is simple — to create spaces where people can build their homes, plan for the future, or make a long-term investment.
                  </p>
                  <p>
                    We believe real estate is not just about land. It is about the plans people have for that land. That&apos;s why we try to keep our approach straightforward, transparent and focused on what actually matters to our customers.
                  </p>
                </div>
              </ScrollReveal>
            </div>

            {/* Clean Image Alongside Text */}
            <div className="lg:col-span-6">
              <ScrollReveal animation="fade-up" delay={150} duration={650}>
                <div className="rounded-2xl overflow-hidden border border-slate-200/80 shadow-sm bg-slate-100 aspect-[4/3] relative">
                  <img
                    src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1200&q=80"
                    alt="Serene open landscape and natural plotted area"
                    className="w-full h-full object-cover object-center"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* 3. OUR VISION */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <ScrollReveal animation="fade-up" duration={700}>
          <div className="relative rounded-3xl overflow-hidden border border-slate-200/80 bg-[#042F24] text-white p-8 sm:p-14 lg:p-20">
            {/* Background Image with Muted Tone */}
            <img
              src="/amenities/outer-ring-road.jpg"
              alt="Looking ahead road and landscape"
              className="absolute inset-0 w-full h-full object-cover object-center opacity-25 mix-blend-luminosity scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#042F24] via-[#042F24]/90 to-[#042F24]/80 pointer-events-none" />

            <div className="relative z-10 max-w-2xl">
              <span className="text-xs sm:text-sm font-bold tracking-[0.2em] text-[#DFC07A] uppercase block mb-3">
                Our Vision
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-normal text-white tracking-tight">
                Looking Ahead
              </h2>
              <p className="mt-6 text-lg sm:text-xl text-slate-200 leading-relaxed font-light">
                &ldquo;Our vision is to create well-planned spaces in locations with good potential, while building a real estate brand that people can trust for the long term.&rdquo;
              </p>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* 4. OUR VALUES */}
      <section className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal animation="fade-up" duration={600}>
          <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
            <span className="text-xs sm:text-sm font-bold tracking-[0.2em] text-[#C5A059] uppercase block mb-2">
              What Guides Us
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif text-[#042F24] font-normal tracking-tight">
              Our Values
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {/* Transparency */}
          <ScrollReveal animation="fade-up" delay={50} duration={650}>
            <div className="h-full bg-[#FAFBF9] rounded-2xl p-7 sm:p-9 border border-slate-200/80 hover:border-[#064E3B]/30 transition-colors duration-200 flex flex-col">
              <div className="w-12 h-12 rounded-xl bg-white border border-slate-200/80 flex items-center justify-center text-[#064E3B] mb-6 shadow-2xs">
                <Eye className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-serif text-[#042F24] font-medium mb-2">
                Transparency
              </h3>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                Keeping things clear and straightforward.
              </p>
            </div>
          </ScrollReveal>

          {/* Planning */}
          <ScrollReveal animation="fade-up" delay={120} duration={650}>
            <div className="h-full bg-[#FAFBF9] rounded-2xl p-7 sm:p-9 border border-slate-200/80 hover:border-[#064E3B]/30 transition-colors duration-200 flex flex-col">
              <div className="w-12 h-12 rounded-xl bg-white border border-slate-200/80 flex items-center justify-center text-[#064E3B] mb-6 shadow-2xs">
                <Compass className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-serif text-[#042F24] font-medium mb-2">
                Planning
              </h3>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                Creating spaces with practical planning in mind.
              </p>
            </div>
          </ScrollReveal>

          {/* Trust */}
          <ScrollReveal animation="fade-up" delay={190} duration={650}>
            <div className="h-full bg-[#FAFBF9] rounded-2xl p-7 sm:p-9 border border-slate-200/80 hover:border-[#064E3B]/30 transition-colors duration-200 flex flex-col">
              <div className="w-12 h-12 rounded-xl bg-white border border-slate-200/80 flex items-center justify-center text-[#064E3B] mb-6 shadow-2xs">
                <HeartHandshake className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-serif text-[#042F24] font-medium mb-2">
                Trust
              </h3>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                Building relationships that go beyond a single transaction.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* 5. CLOSING CTA */}
      <section className="pb-20 sm:pb-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <ScrollReveal animation="fade-up" duration={650}>
          <div className="rounded-3xl bg-[#042F24] text-white p-8 sm:p-12 lg:p-16 border border-[#C5A059]/30 text-center max-w-4xl mx-auto relative overflow-hidden shadow-sm">
            <div className="relative z-10">
              <h2 className="text-3xl sm:text-4xl font-serif font-normal text-white tracking-tight">
                Have a Plan for Your Future?
              </h2>
              <p className="mt-4 text-slate-300 text-base sm:text-lg max-w-xl mx-auto leading-relaxed">
                Take a look at our projects and see if one of them fits your plans.
              </p>
              <div className="mt-8 flex flex-wrap gap-4 justify-center items-center">
                <Link
                  to="/projects"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-[#C5A059] text-[#042F24] font-semibold text-sm hover:bg-[#DFC07A] transition-colors duration-200 shadow-sm group"
                >
                  <span>View Projects</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform duration-200" />
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-white/10 hover:bg-white/15 text-white font-medium text-sm border border-white/20 transition-colors duration-200 group"
                >
                  <span>Contact Us</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform duration-200 text-slate-300" />
                </Link>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </section>
    </div>
  );
};

export default AboutPage;
