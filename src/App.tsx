import { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';

// Import pages
import Index from './pages/Index';
import About from './pages/About';
import Services from './pages/services';
import AI from './pages/services/AI';
import Content from './pages/services/Content';
import Data from './pages/services/Data';
import Development from './pages/services/Development';
import Music from './pages/services/Music';
import NoCode from './pages/services/NoCode';
import Consulting from './pages/services/Consulting';
import Portfolio from './pages/Portfolio';
import Resources from './pages/Resources';
import Blog from './pages/Blog';
import IAEthique from './pages/blog/IAEthique';
import CICDDeployment from './pages/blog/CICDDeployment';
import PromptEngineering from './pages/blog/PromptEngineering';
import ReactTypeScript from './pages/blog/ReactTypeScript';
import WebPerformance from './pages/blog/WebPerformance';
import LandingPageMarketing from './pages/blog/LandingPageMarketing';
import Contact from './pages/Contact';
import Privacy from './pages/Privacy';
import Legal from './pages/Legal';
import NotFound from './pages/NotFound';
import Automatisation from './pages/Automatisation';
import AutomationPlatformComparison from './pages/AutomationPlatformComparison';

// Import components
import { Toaster } from "@/components/ui/toaster";
import { useToast } from "@/components/ui/use-toast";

function App() {
  const location = useLocation();
  const { toast } = useToast()

  useEffect(() => {
    // Track page views in Google Analytics
    if (typeof window.gtag !== 'undefined') {
      window.gtag('config', 'G-XXXXXXXXXX', {
        'page_path': location.pathname + location.search
      });
    }
  }, [location]);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/services/ai" element={<AI />} />
        <Route path="/services/content" element={<Content />} />
        <Route path="/services/data" element={<Data />} />
        <Route path="/services/development" element={<Development />} />
        <Route path="/services/music" element={<Music />} />
        <Route path="/services/no-code" element={<NoCode />} />
        <Route path="/services/consulting" element={<Consulting />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/ia-ethique" element={<IAEthique />} />
        <Route path="/blog/cicd-deployment" element={<CICDDeployment />} />
        <Route path="/blog/prompt-engineering" element={<PromptEngineering />} />
        <Route path="/blog/react-typescript" element={<ReactTypeScript />} />
        <Route path="/blog/web-performance" element={<WebPerformance />} />
        <Route path="/blog/landing-page-marketing" element={<LandingPageMarketing />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/legal" element={<Legal />} />
        <Route path="/automatisation" element={<Automatisation />} />
        <Route path="/automation-platform-comparison" element={<AutomationPlatformComparison />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Toaster />
    </div>
  );
}

export default App;
