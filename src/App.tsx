
import {
  Route,
  Routes,
} from "react-router-dom";
import Home from "./pages/Index";
import ServicesIndex from "./pages/services/index";
import Contact from "./pages/Contact";
import Development from "./pages/services/Development";
import AI from "./pages/services/AI";
import Data from "./pages/services/Data";
import Content from "./pages/services/Content";
import Consulting from "./pages/services/Consulting";
import MusicService from "./pages/services/Music";
import NoCode from "./pages/services/NoCode";
import Automatisation from "./pages/Automatisation";
import Resources from "./pages/Resources";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import IAEthique from "./pages/blog/IAEthique";
import PromptEngineering from "./pages/blog/PromptEngineering";
import ReactTypeScript from "./pages/blog/ReactTypeScript";
import LandingPageMarketing from "./pages/blog/LandingPageMarketing";
import CICDDeployment from "./pages/blog/CICDDeployment";
import WebPerformance from "./pages/blog/WebPerformance";
import Portfolio from "./pages/Portfolio";
import About from "./pages/About";
import Chatbot from "./components/chat/Chatbot";
import { Toaster } from "./components/ui/toaster";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/services" element={<ServicesIndex />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services/development" element={<Development />} />
        <Route path="/services/ai" element={<AI />} />
        <Route path="/services/data" element={<Data />} />
        <Route path="/services/content" element={<Content />} />
        <Route path="/services/consulting" element={<Consulting />} />
        <Route path="/services/music" element={<MusicService />} />
        <Route path="/services/nocode" element={<NoCode />} />
        <Route path="/automatisation" element={<Automatisation />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/blog" element={<Blog />} />
        {/* Specific blog post routes should come before the dynamic route */}
        <Route path="/blog/ia-ethique" element={<IAEthique />} />
        <Route path="/blog/prompt-engineering" element={<PromptEngineering />} />
        <Route path="/blog/react-typescript" element={<ReactTypeScript />} />
        <Route path="/blog/landing-page-marketing" element={<LandingPageMarketing />} />
        <Route path="/blog/cicd-deployment" element={<CICDDeployment />} />
        <Route path="/blog/web-performance" element={<WebPerformance />} />
        {/* Dynamic route should be last to avoid catching specific routes */}
        <Route path="/blog/:slug" element={<BlogPost />} />
      </Routes>
      <Chatbot />
      <Toaster />
    </>
  );
};

export default App;
