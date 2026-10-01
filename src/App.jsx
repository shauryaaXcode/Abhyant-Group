import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { FloatingActions } from './components/FloatingActions';
import { HomePage } from './pages/HomePage';
import { ProjectsPage } from './pages/ProjectsPage';
import { ProjectDetailPage } from './pages/ProjectDetailPage';
import { AboutPage } from './pages/AboutPage';
import { GalleryPage } from './pages/GalleryPage';
import { WhyInvestPage } from './pages/WhyInvestPage';
import { ContactPage } from './pages/ContactPage';
import { SiteVisitModal } from './components/Modals/SiteVisitModal';
import { PlotDetailModal } from './components/Modals/PlotDetailModal';
import { VideoTourModal } from './components/Modals/VideoTourModal';
import { EmiCalculatorModal } from './components/Modals/EmiCalculatorModal';
import { ProjectDetailModal } from './components/Modals/ProjectDetailModal';

// ScrollToTop on route change
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default function App() {
  const [siteVisitOpen, setSiteVisitOpen] = useState(false);
  const [selectedProjectForVisit, setSelectedProjectForVisit] = useState(undefined);
  const [selectedPlot, setSelectedPlot] = useState(null);
  const [videoTourOpen, setVideoTourOpen] = useState(false);
  const [emiCalculatorOpen, setEmiCalculatorOpen] = useState(false);
  const [emiInitialPrice, setEmiInitialPrice] = useState(899000);
  const [selectedProjectDetails, setSelectedProjectDetails] = useState(null);

  const handleOpenSiteVisit = (projectName) => {
    setSelectedProjectForVisit(projectName);
    setSiteVisitOpen(true);
  };

  const handleOpenEmiCalculator = (price) => {
    if (price) setEmiInitialPrice(price);
    setEmiCalculatorOpen(true);
  };

  const handleOpenProjectDetails = (project) => {
    setSelectedProjectDetails(project);
  };

  const handleSelectPlot = (plot) => {
    setSelectedPlot(plot);
  };

  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col bg-white text-slate-900 font-sans selection:bg-[#064E3B] selection:text-white">
        
        {/* Global Navigation Bar */}
        <Navbar
          onOpenSiteVisit={() => handleOpenSiteVisit()}
          onOpenEmiCalculator={() => handleOpenEmiCalculator()}
        />

        {/* Dynamic Route Content */}
        <div className="flex-1">
          <Routes>
            <Route
              path="/"
              element={
                <HomePage
                  onOpenSiteVisit={handleOpenSiteVisit}
                  onOpenVideoTour={() => setVideoTourOpen(true)}
                  onSelectPlot={handleSelectPlot}
                  onOpenProjectDetails={handleOpenProjectDetails}
                />
              }
            />
            <Route
              path="/projects"
              element={
                <ProjectsPage
                  onOpenSiteVisit={handleOpenSiteVisit}
                  onOpenEmiCalculator={handleOpenEmiCalculator}
                  onOpenProjectDetails={handleOpenProjectDetails}
                />
              }
            />
            <Route
              path="/projects/:id"
              element={
                <ProjectDetailPage
                  onOpenSiteVisit={handleOpenSiteVisit}
                  onOpenEmiCalculator={handleOpenEmiCalculator}
                  onSelectPlot={handleSelectPlot}
                />
              }
            />
            <Route
              path="/about"
              element={<AboutPage onOpenSiteVisit={() => handleOpenSiteVisit()} />}
            />
            <Route
              path="/gallery"
              element={<GalleryPage />}
            />
            <Route
              path="/why-invest"
              element={
                <WhyInvestPage
                  onOpenSiteVisit={() => handleOpenSiteVisit()}
                  onOpenEmiCalculator={() => handleOpenEmiCalculator()}
                />
              }
            />
            <Route path="/contact" element={<ContactPage />} />
            {/* Catch-all fallback */}
            <Route
              path="*"
              element={
                <HomePage
                  onOpenSiteVisit={handleOpenSiteVisit}
                  onOpenVideoTour={() => setVideoTourOpen(true)}
                  onSelectPlot={handleSelectPlot}
                />
              }
            />
          </Routes>
        </div>

        {/* Global Footer */}
        <Footer onOpenEmiCalculator={() => handleOpenEmiCalculator()} />

        {/* Floating WhatsApp and Call Action Buttons */}
        <FloatingActions />

        {/* Global Modals */}
        <SiteVisitModal
          isOpen={siteVisitOpen}
          onClose={() => setSiteVisitOpen(false)}
          defaultProject={selectedProjectForVisit}
        />

        <PlotDetailModal
          plot={selectedPlot}
          onClose={() => setSelectedPlot(null)}
          onBookSiteVisit={() => {
            setSelectedPlot(null);
            handleOpenSiteVisit();
          }}
        />

        <VideoTourModal
          isOpen={videoTourOpen}
          onClose={() => setVideoTourOpen(false)}
          onBookSiteVisit={() => {
            setVideoTourOpen(false);
            handleOpenSiteVisit();
          }}
        />

        <EmiCalculatorModal
          isOpen={emiCalculatorOpen}
          onClose={() => setEmiCalculatorOpen(false)}
          initialPrice={emiInitialPrice}
          onOpenSiteVisit={handleOpenSiteVisit}
        />

        <ProjectDetailModal
          project={selectedProjectDetails}
          onClose={() => setSelectedProjectDetails(null)}
          onOpenSiteVisit={handleOpenSiteVisit}
          onOpenEmiCalculator={handleOpenEmiCalculator}
        />
      </div>
    </BrowserRouter>
  );
}
