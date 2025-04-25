import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
  Routes,
} from "react-router-dom";
import Home from "./pages/Home";
import ServicesIndex from "./pages/services";
import Contact from "./pages/Contact";
import Development from "./pages/services/Development";
import AIDesign from "./pages/services/AIDesign";
import DataAnalytics from "./pages/services/DataAnalytics";
import CreativeServices from "./pages/services/CreativeServices";
import Consulting from "./pages/services/Consulting";
import MusicalCreation from "./pages/services/MusicalCreation";
import Resources from "./pages/Resources";
import IAEthique from "./pages/blog/IAEthique";
import PromptEngineering from "./pages/blog/PromptEngineering";
import ReactTypeScript from "./pages/blog/ReactTypeScript";
import LandingPageMarketing from "./pages/blog/LandingPageMarketing";
import CICDDeployment from "./pages/blog/CICDDeployment";
import WebPerformance from "./pages/blog/WebPerformance";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/services" element={<ServicesIndex />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/services/development" element={<Development />} />
      <Route path="/services/ai" element={<AIDesign />} />
      <Route path="/services/data" element={<DataAnalytics />} />
      <Route path="/services/design" element={<CreativeServices />} />
      <Route path="/services/consulting" element={<Consulting />} />
      <Route path="/services/music" element={<MusicalCreation />} />
      <Route path="/resources" element={<Resources />} />
      <Route path="/blog/ia-ethique" element={<IAEthique />} />
      <Route path="/blog/prompt-engineering" element={<PromptEngineering />} />
      <Route path="/blog/react-typescript" element={<ReactTypeScript />} />
      <Route path="/blog/landing-page-marketing" element={<LandingPageMarketing />} />
      <Route path="/blog/cicd-deployment" element={<CICDDeployment />} />
      <Route path="/blog/web-performance" element={<WebPerformance />} />
    </Routes>
  );
};

export default App;
